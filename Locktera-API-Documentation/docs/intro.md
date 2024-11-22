---
sidebar_position: 1
---
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px', marginBottom: '10px' }}>
  <div style={{
    backgroundColor: '#EAF4FC',
    color: '#2B5592',
    padding: '5px 10px',
    borderRadius: '15px',
    fontSize: '14px',
    fontWeight: 'bold'
  }}>
    Version: 1.6.1
  </div>
  <div style={{
    backgroundColor: '#FDF4E3',
    color: '#A67B3F',
    padding: '5px 10px',
    borderRadius: '15px',
    fontSize: '14px',
    fontWeight: 'bold'
  }}>
    Node.js: 14.x+
  </div>
  <div style={{
    backgroundColor: '#E4F4E3',
    color: '#3FA66F',
    padding: '5px 10px',
    borderRadius: '15px',
    fontSize: '14px',
    fontWeight: 'bold'
  }}>
    Python: 3.6+
  </div>
</div>

# Locktera API Documentation


# Locktera API Documentation

Welcome to the Locktera API documentation! This guide provides all the necessary details to work with the Locktera API, including authentication methods, endpoints, usage limits, and examples to help developers interact with the Locktera platform efficiently. The Locktera API is designed to be secure, reliable, and scalable, giving developers access to manage and configure organizational data, containers, DRM (Digital Rights Management), API keys, and resource usage effectively.

## Overview

The Locktera API enables administrators and developers to:

- **Manage Organizations**: Configure organization details, manage access and audit logs, track consumption, and customize settings.
- **Control User Access**: Set API keys, address book entries, and handle user consent management.
- **Configure Storage**: Set up storage configurations across multiple services like Azure, S3, and custom storage options.
- **Monitor DRM Rules**: Manage and enforce Digital Rights Management (DRM) rules, ensuring secure content access.
- **Audit Activity**: Log and review events, access logs, and audit trails to keep track of actions within the organization.
- **Service Status Monitoring**: Check the health of various Locktera services in real-time to maintain availability and reliability.



---
## Explore Documentation

Explore the features and functionalities of the Locktera platform through these comprehensive guides:


<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>

{/* Address Book Management */}
  <div style={{
    border: '1px solid #E0E0E0',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#F9FAFB',
    color: '#2B5592',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0,0,0,0.2)'}
  onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0px 2px 4px rgba(0,0,0,0.1)'} >
    <a href="/docs/API/address-book-management" style={{ textDecoration: 'none', color: 'inherit' }}>
      <h3>Address Book Management</h3>
      <p style={{ color: '#000000' }}>Manage address book entries, including email addresses, names, and companies.</p>
    </a>
  </div>

{/* API Key Management */}
  <div style={{
    border: '1px solid #E0E0E0',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#F9FAFB',
    color: '#2B5592',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0,0,0,0.2)'}
  onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0px 2px 4px rgba(0,0,0,0.1)'} >
    <a href="/docs/API/api-key-management" style={{ textDecoration: 'none', color: 'inherit' }}>
      <h3>API Key Management</h3>
      <p style={{ color: '#000000' }}>Generate and manage API keys for authentication.</p>
    </a>
  </div>

{/* Consent Management */}
  <div style={{
    border: '1px solid #E0E0E0',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#F9FAFB',
    color: '#2B5592',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0,0,0,0.2)'}
  onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0px 2px 4px rgba(0,0,0,0.1)'} >
    <a href="/docs/API/consent-management" style={{ textDecoration: 'none', color: 'inherit' }}>
      <h3>Consent Management</h3>
      <p style={{ color: '#000000' }}>Manage user and viewer consents for compliance and tracking.</p>
    </a>
  </div>

{/* Container Management */}
  <div style={{
    border: '1px solid #E0E0E0',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#F9FAFB',
    color: '#2B5592',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0,0,0,0.2)'}
  onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0px 2px 4px rgba(0,0,0,0.1)'} >
    <a href="/docs/API/container-management" style={{ textDecoration: 'none', color: 'inherit' }}>
      <h3>Container Management</h3>
      <p style={{ color: '#000000' }}>Organize and manage containers for storing data.</p>
    </a>
  </div>

{/* Customization Management */}
  <div style={{
    border: '1px solid #E0E0E0',
    borderRadius: '10px',
    padding: '19px',
    backgroundColor: '#F9FAFB',
    color: '#2B5592',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0,0,0,0.2)'}
  onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0px 2px 4px rgba(0,0,0,0.1)'} >
    <a href="/docs/API/customization-management" style={{ textDecoration: 'none', color: 'inherit' }}>
      <h3>Customization Management</h3>
      <p style={{ color: '#000000' }}>Customize platform settings and configurations for your organization.</p>
    </a>
  </div>

{/* DRM Storage Configuration */}
  <div style={{
    border: '1px solid #E0E0E0',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#F9FAFB',
    color: '#2B5592',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0,0,0,0.2)'}
  onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0px 2px 4px rgba(0,0,0,0.1)'} >
    <a href="/docs/API/drm-storage-configuration" style={{ textDecoration: 'none', color: 'inherit' }}>
      <h3>DRM Storage Configuration</h3>
      <p style={{ color: '#000000' }}>Configure and manage digital rights management (DRM) settings for storage.</p>
    </a>
  </div>

{/* Error Management */}
  <div style={{
    border: '1px solid #E0E0E0',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#F9FAFB',
    color: '#2B5592',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0,0,0,0.2)'}
  onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0px 2px 4px rgba(0,0,0,0.1)'} >
    <a href="/docs/API/error-management" style={{ textDecoration: 'none', color: 'inherit' }}>
      <h3>Error Management</h3>
      <p style={{ color: '#000000' }}>Log and retrieve error events and monitor service status.</p>
    </a>
  </div>

{/* Events Management */}
  <div style={{
    border: '1px solid #E0E0E0',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#F9FAFB',
    color: '#2B5592',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0,0,0,0.2)'}
  onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0px 2px 4px rgba(0,0,0,0.1)'} >
    <a href="/docs/API/events-management" style={{ textDecoration: 'none', color: 'inherit' }}>
      <h3>Events Management</h3>
      <p style={{ color: '#000000' }}>Track and manage events for containers and organizations.</p>
    </a>
  </div>

{/* Organization Management */}
  <div style={{
    border: '1px solid #E0E0E0',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#F9FAFB',
    color: '#2B5592',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0,0,0,0.2)'}
  onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0px 2px 4px rgba(0,0,0,0.1)'} >
    <a href="/docs/API/organization-management" style={{ textDecoration: 'none', color: 'inherit' }}>
      <h3>Organization Management</h3>
      <p style={{ color: '#000000' }}>Manage organizations, configure settings, and access audit logs.</p>
    </a>
  </div>

{/* Tag Management */}
  <div style={{
    border: '1px solid #E0E0E0',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#F9FAFB',
    color: '#2B5592',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0,0,0,0.2)'}
  onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0px 2px 4px rgba(0,0,0,0.1)'} >
    <a href="/docs/API/tag-management" style={{ textDecoration: 'none', color: 'inherit' }}>
      <h3>Tag Management</h3>
      <p style={{ color: '#000000' }}>Set up and manage tags for categorizing and organizing data.</p>
    </a>
  </div>






</div>


---

## Authentication

To access the Locktera API, you will need a valid API key associated with your organization. This key should be included in the header of each request.

### Example of the Authentication Header:
Authorization: Bearer YOUR_API_KEY

### Getting an API Key

API keys can be created and managed through the `API Key Management` section. You must have administrative permissions within your organization to generate new API keys.

---

## Base URL

All Locktera API requests are made to the following base URL:

https://api.locktera.com/v1

Ensure that all requests follow this format, appending the specific endpoint path as documented.

---

## Rate Limiting

To maintain optimal service levels, the Locktera API enforces rate limits on requests. By default:

- **Standard Users**: 100 requests per minute
- **Admin Users**: 500 requests per minute

Exceeding these limits will result in a `429 Too Many Requests` response. Consider implementing exponential backoff or retry strategies to handle these situations gracefully.

---

## Response Format

The Locktera API uses JSON for all responses. Successful responses return an HTTP status code of `200 OK`, while errors are indicated by standard HTTP status codes, such as:

- **400 Bad Request**: Invalid request data
- **401 Unauthorized**: Missing or invalid API key
- **403 Forbidden**: Insufficient permissions
- **404 Not Found**: Resource not found
- **429 Too Many Requests**: Rate limit exceeded
- **500 Internal Server Error**: Server error

Each error response contains a JSON body with an error message and code for easier debugging.

---

## Usage Guidelines

### Best Practices

1. **Authenticate Requests**: Always include a valid API key in the header of your requests.
2. **Optimize API Calls**: Use pagination, filtering, and sorting options as documented to avoid excessive data retrieval.
3. **Handle Errors Gracefully**: Implement error-handling logic to manage potential errors, especially for rate-limiting responses.
4. **Monitor Rate Limits**: Ensure your application respects rate limits to avoid disruptions.
5. **Use Secure Connections**: All requests should be made over HTTPS for security.

---

## API Versioning

The Locktera API is versioned to ensure backward compatibility and manage updates effectively. All requests in this documentation are based on version `v1`. Version numbers are included in the URL (e.g., `/v1/orgs`), and Locktera will announce any breaking changes before releasing a new version.

### Future Updates

- **Deprecation Policy**: Endpoints from older versions will be supported for at least 6 months after the release of a new version.
- **Change Announcements**: Check for announcements in your developer dashboard to stay updated on any new changes or deprecations.

---

## Pagination and Filtering

For endpoints returning large data sets, the Locktera API supports pagination, sorting, and filtering.

### Pagination Parameters

| Parameter | Type   | Description                  |
|-----------|--------|------------------------------|
| `page`    | int    | Page number (1 by default)   |
| `limit`   | int    | Number of results per page   |

### Filtering by Timestamps

Use the optional `start` and `end` query parameters for date filtering. All timestamps should be in ISO UTC format:

?start=2023-01-01T00:00:00Z&end=2023-01-31T23:59:59Z



