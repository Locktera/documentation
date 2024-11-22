import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Address Management

Manage address book entries, including email addresses, names, companies, and phone numbers. This section outlines all endpoints available for creating, updating, retrieving, and deleting address records within an organization's address book.

:::info Overview
The **Address Management** API enables the following operations:
- **Retrieve Addresses**: Fetch a list of address entries for the organization.
- **Create or Update Addresses**: Add new address entries or update existing ones.
- **Delete Address Entries**: Remove addresses that are no longer needed.
- **Retrieve Audit Logs**: Fetch audit logs for address book operations.
  :::

:::warning Note
All API requests require valid authentication headers for secure operations. Unauthorized requests will return a `401 Unauthorized` error.
:::

## Endpoints

### Retrieve Organization Addresses

Fetch all address entries associated with a specific organization.

**Endpoint**: `GET /orgs/{org_id}/addresses`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.

#### Example Response:
```json
[
  {
    "email": "john.doe@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "company": "Example Corp",
    "phone_number": "+1-234-567-8901"
  }
]
```
---

### Create or Update Address Entry

Add a new address entry or update an existing one.

**Endpoint**: `PUT /orgs/{org_id}/addresses/{email}`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.
- **`email`** *(string, required)*: The email address of the contact.

#### Example Request:
```json
{
  "first_name": "Jane",
  "last_name": "Doe",
  "company": "Example Inc",
  "phone_number": "+1-987-654-3210"
}

```

#### Example Response:
```json
{
  "email": "jane.doe@example.com",
  "first_name": "Jane",
  "last_name": "Doe",
  "company": "Example Inc",
  "phone_number": "+1-987-654-3210"
}

```
---

### Delete Address Entry

Add a new address entry or update an existing one.

**Endpoint**: `DELETE /orgs/{org_id}/addresses/{email}`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.
- **`email`** *(string, required)*: The email address of the contact.

#### Example Response:
```json
{
  "message": "Address entry deleted successfully"
}

```
---

### Retrieve Address Audit Logs

Fetch audit logs for address-related operations.

**Endpoint**: `GET /orgs/{org_id}/addresses_audit`

#### Parameters:
- **`org_id`** *(string, required)*: The unique identifier for the organization.

#### Example Response:
```json
{
  "message": "Address entry deleted successfully"
}

```
---

API Response Codes
- **200 OK**: Request processed successfully.
- **400 Bad Request**: Invalid input or parameters.
- **401 Unauthorized**: Authentication failed or invalid API key.
- **404 Not Found**: Resource not found.
- **500 Internal Server Error**: An error occurred on the server.

---

### Example Implementations
<!-- TODO: Include code implementation tabs -->

<Tabs
defaultValue="command-line"
values={[
{label: 'Command Line (cURL)', value: 'command-line'},
{label: 'TypeScript', value: 'typescript'},
{label: 'Python', value: 'python'},
{label: 'Go', value: 'go'},
{label: 'JavaScript', value: 'javascript'},
{label: 'Java', value: 'java'},
{label: 'Ruby', value: 'ruby'},
{label: 'React', value: 'react'},
]}>

<TabItem value="command-line">
```bash
curl -X GET "https://api.locktera.com/orgs/{org_id}/addresses" -H "Authorization: Bearer YOUR_API_KEY"
```
</TabItem>

<TabItem value="typescript">
```typescript
import axios from 'axios';

async function fetchAddresses(orgId: string) {
const response = await axios.get(`https://api.locktera.com/orgs/${orgId}/addresses`, {
headers: {
Authorization: `Bearer YOUR_API_KEY`,
},
});
console.log(response.data);
}

fetchAddresses("org-123");
```
</TabItem>
<TabItem value="python">
```python
import requests

def fetch_addresses(org_id):
    url = f"https://api.locktera.com/orgs/{org_id}/addresses"
    headers = {"Authorization": "Bearer YOUR_API_KEY"}
    response = requests.get(url, headers=headers)
    print(response.json())

fetch_addresses("org-123")
```
</TabItem>

<TabItem value="go">
```go
package main

import (
"fmt"
"net/http"
"io/ioutil"
)

func fetchAddresses(orgID string) {
client := &http.Client{}
req, _ := http.NewRequest("GET", fmt.Sprintf("https://api.locktera.com/orgs/%s/addresses", orgID), nil)
req.Header.Add("Authorization", "Bearer YOUR_API_KEY")
res, _ := client.Do(req)
body, _ := ioutil.ReadAll(res.Body)
fmt.Println(string(body))
}

func main() {
fetchAddresses("org-123")
}
```

</TabItem>

<TabItem value="javascript">
```javascript
fetch("https://api.locktera.com/orgs/org-123/addresses", {
  method: "GET",
  headers: {
    Authorization: "Bearer YOUR_API_KEY"
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));

```

</TabItem>

<TabItem value="java">
```java
import java.net.HttpURLConnection;
import java.net.URL;
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
public static void main(String[] args) throws Exception {
URL url = new URL("https://api.locktera.com/orgs/org-123/addresses");
HttpURLConnection conn = (HttpURLConnection) url.openConnection();
conn.setRequestMethod("GET");
conn.setRequestProperty("Authorization", "Bearer YOUR_API_KEY");

        BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        String inputLine;
        StringBuffer content = new StringBuffer();
        while ((inputLine = in.readLine()) != null) {
            content.append(inputLine);
        }
        in.close();
        System.out.println(content.toString());
    }
}

```
</TabItem>

<TabItem value="ruby">
```ruby
require 'net/http'
require 'json'

uri = URI("https://api.locktera.com/orgs/org-123/addresses")
request = Net::HTTP::Get.new(uri)
request["Authorization"] = "Bearer YOUR_API_KEY"

response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(request)
end

puts JSON.parse(response.body)

```
</TabItem>

<TabItem value="react">
```react
import axios from 'axios';
import { useEffect, useState } from 'react';

function AddressList() {
const [addresses, setAddresses] = useState([]);

useEffect(() => {
axios.get("https://api.locktera.com/orgs/org-123/addresses", {
headers: {
Authorization: "Bearer YOUR_API_KEY",
}
})
.then(response => setAddresses(response.data))
.catch(error => console.error("Error:", error));
}, []);

return (
<div>
<h1>Address List</h1>
<ul>
{addresses.map((address, index) => (
<li key={index}>{address.first_name} {address.last_name}</li>
))}
</ul>
</div>
);
}

export default AddressList;

```
</TabItem>
</Tabs>



:::caution Important Replace "YOUR_ACCESS_TOKEN" and "org_id" with actual values in your implementation.
:::

### API Response Codes
- `200 OK`: Successfully retrieved addresses.
- `401 Unauthorized`: Authentication failed or access token is invalid.
- `404 Not Found`: Organization or address not found.
- `500 Internal Server Error`: Server encountered an error while processing the request.
For more information, visit the full API documentation at Locktera API Documentation.



