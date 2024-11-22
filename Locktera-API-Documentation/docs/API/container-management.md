import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Container Management

Manage tera files (containers) within the organization’s library. This section outlines all endpoints available for creating, updating, retrieving, and managing containers.

:::info Overview
The **Container Management** API enables the following operations:
- **Retrieve Containers**: Fetch specific containers or a list of containers for an organization.
- **Manage Container Access**: Block, unblock, or retrieve access attempts for containers.
- **Post-Quantum Security**: Retrieve post-quantum keys for container encryption.
- **Tags and DRM**: Retrieve and manage container tags and Digital Rights Management (DRM) rules.
  :::

:::warning Note
All API requests require valid authentication headers. Unauthorized requests will return a `401 Unauthorized` error.
:::

## Endpoints

### Retrieve a Specific Container

Fetch detailed information about a specific container.

**Endpoint**: `GET /orgs/{org_id}/containers/{container_id}`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.
- **`container_id`** *(string, required)*: The unique identifier for the container.

#### Example Response:
```json
{
  "id": "container-123",
  "name": "Secure File",
  "created_at": "2023-01-01T00:00:00Z",
  "tags": ["confidential", "finance"],
  "drm_rules": {...}
}
```
---

### Retrieve All Containers

Fetch a list of all containers associated with an organization.

**Endpoint**: `GET /orgs/{org_id}/containers`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.

---

### Block Container Access

Restrict access to a specific container.

**Endpoint**: `PUT /orgs/{org_id}/containers/{container_id}/block`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.
- **`container_id`** *(string, required)*: The unique identifier for the container.

#### Example Response:
```json
{
  "message": "Container access blocked successfully"
}

```
---

### Unblock Container Access

Restore access to a previously blocked container.

**Endpoint**: `DELETE /orgs/{org_id}/containers/{container_id}/block`

---


### Retrieve Container DRM Rules

Fetch DRM rules applied to a specific container.

**Endpoint**: `GET /orgs/{org_id}/containers/{container_id}/drm_rules`

---

### Delete DRM Rules

Remove DRM rules applied to a container.

**Endpoint**: `DELETE /orgs/{org_id}/containers/{container_id}/drm_rules`

---

### Retrieve Access Attempts

Fetch a log of access attempts for a specific container.

**Endpoint**: `GET /orgs/{org_id}/containers/{container_id}/attempts`

---

### Retrieve Tags Audit

Fetch audit logs for container tags.

**Endpoint**: `GET /orgs/{org_id}/containers/{container_id}/tags_audit`

---

### Retrieve Container by Digest

Retrieve container details using its unique digest.

**Endpoint**: `GET /orgs/{org_id}/container_by_digest`

---

## Example Implementations
<!-- TODO: Include code implementation tabs -->

### Encode a File into a Container

Encode files into a container and upload them to your organization using the `encode` endpoint. This example demonstrates how to prepare a manifest, attach files, and make the request in both Python and TypeScript.

### Encode a File into a Container

Encode files into a container and upload them to your organization using the `encode` endpoint. This example demonstrates how to prepare a manifest, attach files, and make the request in both Python and TypeScript.

<Tabs
  defaultValue="python"
  values={[
  { label: 'Python', value: 'python', },
  { label: 'TypeScript', value: 'typescript', },
  ]}
>

<TabItem value="python">

```python
    import os
    import json
    import mimetypes
    import requests
    
    API_URL = 'https://api.locktera.com'
    ORG_ID = 'your-org-id'
    headers = {'Authorization': 'Bearer your-access-token'}
    
    def encode_manifest(manifest_path):
        # Read the manifest
        with open(manifest_path) as file:
            manifest = json.load(file)
    
        manifest_dir = os.path.dirname(manifest_path)
        encode_url = f'{API_URL}/orgs/{ORG_ID}/containers/encode'
        files = []
    
        # Add the manifest to the request
        files.append(('manifest', ('manifest', json.dumps(manifest), 'application/json')))
    
        # Add each file to the request
        for file_name in manifest['files']:
            type_, _ = mimetypes.guess_type(file_name)
            files.append(('files', (file_name, open(f'{manifest_dir}/{file_name}', 'rb'), type_)))
    
        # Send the request and print the response
        print('Encoding...')
        rsp = requests.post(encode_url, headers=headers, files=files)
        encoded_manifest = rsp.json()
        print(encoded_manifest['org_id'], encoded_manifest['container']['uuid'])
    
    # Example usage
    encode_manifest('/path/to/manifest.json')
```
</TabItem>

<TabItem value="typescript">
```typescript
  import * as fs from 'fs';
  import * as path from 'path';
  import axios from 'axios';
  import FormData from 'form-data';
  
  const API_URL = 'https://api.locktera.com';
  const ORG_ID = 'your-org-id';
  const headers = { Authorization: 'Bearer your-access-token' };
  
  async function encodeManifest(manifestPath: string) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    const manifestDir = path.dirname(manifestPath);
    
        const encodeUrl = `${API_URL}/orgs/${ORG_ID}/containers/encode`;
        const formData = new FormData();
    
        // Add the manifest to the request
        formData.append('manifest', JSON.stringify(manifest), { contentType: 'application/json' });
    
        // Add each file to the request
        for (const fileName of manifest.files) {
            const filePath = path.join(manifestDir, fileName);
            formData.append('files', fs.createReadStream(filePath));
        }
    
        try {
            console.log('Encoding...');
            const response = await axios.post(encodeUrl, formData, {
                headers: { ...headers, ...formData.getHeaders() },
            });
            console.log(response.data.org_id, response.data.container.uuid);
        } catch (error) {
            console.error('Error encoding file:', error);
        }
  }
  
  // Example usage
  encodeManifest('/path/to/manifest.json');
```
  </TabItem> </Tabs> 



API Response Codes
- **200 OK**: Request processed successfully.
- **400 Bad Request**: Invalid input or parameters.
- **401 Unauthorized**: Authentication failed or invalid API key.
- **404 Not Found**: Resource not found.
- **500 Internal Server Error**: An error occurred on the server.