import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Consent Management

Track and manage user and viewer consent records to ensure compliance with organizational policies and legal requirements.

:::info Overview
The **Consent Management** API enables the following operations:
- **Retrieve Consents**: View consents at the organization or viewer level.
- **Update Consents**: Modify consent records for organizations or viewers.
  :::

:::warning Note
All API requests require valid authentication headers. Unauthorized requests will return a `401 Unauthorized` error.
:::

## Endpoints

### Retrieve Organization Consents

Fetch all consents at the organization level.

**Endpoint**: `GET /orgs/{org_id}/consents`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.

#### Example Response:
```json
[
  {
    "consent_id": "consent-123",
    "description": "GDPR Compliance",
    "status": "granted",
    "updated_at": "2023-11-01T12:00:00Z"
  }
]
```
---

### Retrieve Viewer Consent Status

Fetch the consent status for a specific viewer.

**Endpoint**: `GET /viewers/{email}/consents`

#### Parameters:
- **`email`** *(string, required)*: The email address of the viewer.

#### Example Response:
```json
[
  {
    "consent_id": "consent-123",
    "description": "Terms of Use",
    "status": "granted",
    "updated_at": "2023-10-31T08:00:00Z"
  }
]

```
---

### Update Organization Consent

Modify the consent status for an organization.

**Endpoint**: `PUT /orgs/{org_id}/consents/{consent_id}`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization. 
- **`consent_id`** *(string, required)*: The unique identifier for the consent record. 
- **`status`** *(string, required)*: The updated consent status (granted or revoked).

#### Example Request:
```json
{
  "status": "revoked"
}


```
---

### Update Viewer Consent

Modify the consent status for a specific viewer.

**Endpoint**: `PUT /viewers/{email}/consents/{consent_id}`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.
- **`consent_id`** *(string, required)*: The unique identifier for the consent record.
- **`status`** *(string, required)*: The updated consent status (granted or revoked).

#### Example Request:
```json
{
  "status": "granted"
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