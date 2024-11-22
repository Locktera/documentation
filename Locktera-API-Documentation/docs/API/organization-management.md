import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Organization Management

Manage and configure organizational details, including API keys, tags, customizations, access logs, and more. This section outlines all endpoints available for organization-level management.

:::info Overview
The **Organization Management** API enables the following operations:
- **Retrieve Organization Details**: Access information about an organization.
- **Update Organization Details**: Modify organization settings.
- **Delete Organizations**: Remove organizations from the hierarchy.
- **Access Logs**: Monitor access activities within the organization.
- **Audit Logs**: Retrieve audit trails for organizational operations.
- **Consumption Tracking**: View monthly resource consumption.
- **Customizations**: Retrieve or update organization-level customizations.
  :::

:::warning Note
All API requests require valid authentication headers for secure operations. Unauthorized requests will return a `401 Unauthorized` error.
:::

## Endpoints

### Retrieve Organization Information

Retrieve detailed information about a specific organization.

**Endpoint**: `GET /orgs/{org_id}`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.

#### Example Response:
```json
{
  "id": "org-123",
  "name": "Example Organization",
  "created_at": "2023-01-01T00:00:00Z",
  "customizations": {...}
}
```
---

### Retrieve Organization Information

Retrieve detailed information about a specific organization.

**Endpoint**: `GET /orgs/{org_id}`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.

#### Example Response:
```json
{
  "id": "org-123",
  "name": "Example Organization",
  "created_at": "2023-01-01T00:00:00Z",
  "customizations": {...}
}
```
---

### Update Organization Details

Modify the details of an organization.

**Endpoint**: `PATCH /orgs/{org_id}`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.
- **`name`** *(string, optional)*: The new name for the organization.
- **`customizations`** *(object, optional)*: Updated customizations for the organization.

#### Example Request:
```json
{
  "name": "Updated Organization Name"
}
```
---

### Delete Organization

Remove an organization from the hierarchy.

**Endpoint**: `DELETE /orgs/{org_id}`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.

#### Example Request:
```json
{
  "message": "Organization deleted successfully"
}
```
---

### Retrieve Access Log

Fetch the access log for an organization.

**Endpoint**: `GET /orgs/{org_id}/access_log`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.

#### Example Request:
```json
[
  {
    "timestamp": "2023-11-01T12:00:00Z",
    "user": "john.doe@example.com",
    "action": "LOGIN",
    "status": "SUCCESS"
  }
]

```
---

### Retrieve Audit Log

Fetch the audit trail for children organizations or operations.

**Endpoint**: `GET /orgs/{org_id}/children_audit`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.

---

### Retrieve Monthly Consumption

View monthly resource consumption for an organization.

**Endpoint**: `GET /orgs/{org_id}/consumption`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.

---

### Retrieve Organization Customizations

Fetch current customization settings for an organization.

**Endpoint**: `GET /orgs/{org_id}/customizations`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.

---

### Update Organization Customizations

Modify customization settings for an organization.

**Endpoint**: `PUT /orgs/{org_id}/customizations`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.
- **`customizations`** *(object, required)*: The updated customizations object.

---

#### Example Implementations
<!-- TODO: Include code implementation tabs -->


API Response Codes
- **200 OK**: Request processed successfully.
- **400 Bad Request**: Invalid input or parameters.
- **401 Unauthorized**: Authentication failed or invalid API key.
- **404 Not Found**: Resource not found.
- **500 Internal Server Error**: An error occurred on the server.