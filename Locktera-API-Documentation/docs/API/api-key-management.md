import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# API Key Management

Manage the creation, retrieval, and deletion of API keys to ensure secure access to the Locktera platform.

:::info Overview
The **API Key Management** API enables the following operations:
- **Retrieve API Keys**: Fetch a list of API keys associated with your organization.
- **Create API Keys**: Generate new API keys for secure application access.
- **Delete API Keys**: Remove API keys that are no longer needed.
  :::

:::warning Note
All API requests require valid authentication headers for secure operations. Unauthorized requests will return a `401 Unauthorized` error.
:::

## Endpoints

### Retrieve API Keys

Fetch all API keys associated with a specific organization.

**Endpoint**: `GET /orgs/{org_id}/api_keys`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.

#### Example Response:
```json
[
  {
    "id": "key-123",
    "name": "My API Key",
    "created_at": "2023-11-18T12:00:00Z",
    "permissions": ["read", "write"]
  }
]
```

### Create a New API Key

Generate a new API key for the specified organization.

**Endpoint**: `POST /orgs/{org_id}/api_keys`

Parameters:
`org_id` (string, required): The unique identifier for the organization.
`name` (string, required): A descriptive name for the API key.
`permissions` (array, required): A list of permissions assigned to the API key.

#### Example Request:
```json
{
  "name": "New API Key",
  "permissions": ["read", "write"]
}

```

#### Example Response:
```json
{
  "id": "key-456",
  "name": "New API Key",
  "created_at": "2023-11-18T12:00:00Z",
  "permissions": ["read", "write"]
}
```


### Delete an API Key

Remove an existing API key to revoke access.

**Endpoint**: `DELETE /orgs/{org_id}/api_keys/{key_id}`

Parameters:
`org_id` (string, required): The unique identifier for the organization.
`key_id` (string, required): The unique identifier of the API key to delete.

#### Example Response:
```json
{
  "message": "API key deleted successfully"
}

```
#### Example Implementations
<!-- TODO: Include code implementation tabs -->


API Response Codes
- **200 OK**: Request processed successfully.
- **400 Bad Request**: Invalid input or parameters.
- **401 Unauthorized**: Authentication failed or invalid API key.
- **404 Not Found**: Resource not found.
- **500 Internal Server Error**: An error occurred on the server.
