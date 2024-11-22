import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tag Management

Manage and retrieve tags associated with an organization’s resources, such as containers. Tags help organize and categorize resources for efficient management.

:::info Overview
The **Tag Management** API enables the following operations:
- **Retrieve Organization Tags**: Fetch a list of all tags associated with an organization.
  :::

:::warning Note
All API requests require valid authentication headers. Unauthorized requests will return a `401 Unauthorized` error.
:::

## Endpoints

### Retrieve Organization Tags

Fetch all tags associated with a specific organization.

**Endpoint**: `GET /orgs/{org_id}/tags`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.

#### Example Response:
```json
[
  {
    "id": "tag-123",
    "name": "confidential",
    "created_at": "2023-01-01T00:00:00Z"
  },
  {
    "id": "tag-456",
    "name": "finance",
    "created_at": "2023-02-01T00:00:00Z"
  }
]
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



