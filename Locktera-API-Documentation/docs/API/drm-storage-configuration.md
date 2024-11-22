import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# DRM Storage Configuration

Manage storage settings for your organization, including supported storage options like Azure, BYOS, and S3. This section outlines the endpoints for configuring and retrieving storage settings.

:::info Overview
The **DRM Storage Configuration** API enables the following operations:
- **Retrieve Storage Configuration**: View current storage settings for an organization.
- **Update Storage Configuration**: Modify the storage settings for an organization.
  :::

:::warning Note
All API requests require valid authentication headers. Unauthorized requests will return a `401 Unauthorized` error.
:::

## Endpoints

### Retrieve Storage Configuration

Fetch the current storage configuration for an organization.

**Endpoint**: `GET /orgs/{org_id}/storage_config`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.

#### Example Response:
```json
{
  "storage_type": "BYOS",
  "configuration": {
    "provider": "Azure",
    "container_name": "secure-container",
    "connection_string": "AccountName=example;AccountKey=***"
  }
}
```
---

### Update Storage Configuration

Modify the storage configuration for an organization.

**Endpoint**: `PUT /orgs/{org_id}/storage_config`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.
- **`storage_config`** *(object, required)*: The updated storage configuration object.

#### Example Request:
```json
{
  "storage_type": "S3",
  "configuration": {
    "bucket_name": "my-secure-bucket",
    "access_key": "ACCESS_KEY",
    "secret_key": "SECRET_KEY"
  }
}

```

#### Example Response:
```json
{
  "message": "Storage configuration updated successfully"
}

```
---


#### Example Implementations
<!-- TODO: Include code implementation tabs -->


API Response Codes
- **200 OK**: Request processed successfully.
- **400 Bad Request**: Invalid input or parameters.
- **401 Unauthorized**: Authentication failed or invalid API key.
- **404 Not Found**: Resource not found.
- **500 Internal Server Error**: An error occurred on the server.



