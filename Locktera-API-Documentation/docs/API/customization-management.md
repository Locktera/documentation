import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Customization Management

Customize and manage organization-level settings to ensure a tailored experience for your organization’s needs.

:::info Overview
The **Customization Management** API enables the following operations:
- **Retrieve Customizations**: Fetch current customization settings for an organization.
- **Update Customizations**: Modify customization settings for an organization.
  :::

:::warning Note
All API requests require valid authentication headers. Unauthorized requests will return a `401 Unauthorized` error.
:::

## Endpoints

### Retrieve Organization Customizations

Fetch current customization settings for a specific organization.

**Endpoint**: `GET /orgs/{org_id}/customizations`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.

#### Example Response:
```json
{
  "theme": "dark",
  "logo_url": "https://example.com/logo.png",
  "branding_color": "#0047AB"
}
```

---

### Update Organization Customizations

Modify customization settings for a specific organization.

**Endpoint**: `PUT /orgs/{org_id}/customizations`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.
- **`customizations`** *(object, required)*: The updated customizations object.

#### Example Request:
```json
{
  "theme": "light",
  "logo_url": "https://example.com/new-logo.png",
  "branding_color": "#FF5733"
}

```

#### Example Response:
```json
{
  "message": "Organization customizations updated successfully"
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



