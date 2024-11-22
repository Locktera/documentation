import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Events Management

Track and manage events related to containers and organizations, including access, creation, expiration, and failure events.

:::info Overview
The **Events Management** API enables the following operations:
- **Retrieve Events**: Fetch events for an organization or specific containers.
- **Create Events**: Log new events for containers.
  :::

:::warning Note
All API requests require valid authentication headers. Unauthorized requests will return a `401 Unauthorized` error.
:::

## Endpoints

### Retrieve Events for an Organization

Fetch events for a specific organization.

**Endpoint**: `GET /orgs/{org_id}/events`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.

---

### Retrieve Container Events by Access

Fetch events for containers filtered by access activities.

**Endpoint**: `GET /orgs/{org_id}/container_events/by_access`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.

---

### Retrieve Container Events by Block

Fetch events for containers filtered by block activities.

**Endpoint**: `GET /orgs/{org_id}/container_events/by_block`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.

---

### Retrieve Container Events by Creation Date

Fetch events for containers filtered by their creation date.

**Endpoint**: `GET /orgs/{org_id}/container_events/by_create`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.

---

### Retrieve Container Events by Expiration Date

Fetch events for containers filtered by their expiration date.

**Endpoint**: `GET /orgs/{org_id}/container_events/by_expire`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.

---

### Retrieve Failed Container Events

Fetch events for containers where access attempts failed.

**Endpoint**: `GET /orgs/{org_id}/container_events/by_fail`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.

---

### Retrieve Container Events

Fetch events for a specific container.

**Endpoint**: `GET /orgs/{org_id}/containers/{container_id}/events`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.
- **`container_id`** *(string, required)*: The unique identifier for the container.

---

### Create a Container Event

Log a new event for a specific container.

**Endpoint**: `POST /orgs/{org_id}/containers/{container_id}/events`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.
- **`container_id`** *(string, required)*: The unique identifier for the container.
- **`event`** *(object, required)*: The event details.

#### Example Request:
```json
{
  "event_type": "ACCESS",
  "timestamp": "2023-11-18T12:00:00Z",
  "status": "SUCCESS"
}
```

#### Example Response:
```json
{
  "message": "Event logged successfully"
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