import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Error Management

Track and log error events at the organization level to monitor and improve system performance.

:::info Overview
The **Error Management** API enables the following operations:
- **Retrieve Errors**: View error logs for an organization.
- **Log Errors**: Record new error events for troubleshooting and analysis.
- **Service Status**: Check the real-time operational status of Locktera services.
  :::

:::warning Note
All API requests require valid authentication headers. Unauthorized requests will return a `401 Unauthorized` error.
:::

## Endpoints

### Retrieve Organization Error Events

Fetch all error events logged for a specific organization.

**Endpoint**: `GET /orgs/{org_id}/errors`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.

#### Example Response:
```json
[
  {
    "error_id": "error-123",
    "message": "File upload failed",
    "timestamp": "2023-11-18T12:00:00Z",
    "severity": "high"
  },
  {
    "error_id": "error-456",
    "message": "API key authentication failed",
    "timestamp": "2023-11-17T08:45:00Z",
    "severity": "medium"
  }
]
```
---

### Log a New Error Event

Record a new error event for an organization.

**Endpoint**: `POST /orgs/{org_id}/errors`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.
- **`error`** *(object, required)*: The details of the error event.

#### Example Request:
```json
{
  "message": "Database connection timeout",
  "severity": "critical",
  "timestamp": "2023-11-18T14:30:00Z"
}

```
#### Example Response:
```json
{
  "message": "Error logged successfully",
  "error_id": "error-789"
}

```
---

### Retrieve Locktera Service Status

Check the operational status of Locktera services.

**Endpoint**: `GET /service_status`


#### Example Response:
```json
{
  "status": "Operational",
  "services": {
    "api": "Operational",
    "storage": "Degraded Performance",
    "authentication": "Operational"
  },
  "timestamp": "2023-11-18T12:30:00Z"
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