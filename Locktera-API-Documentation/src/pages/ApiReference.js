import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

function ApiReference() {
    return (
        <div>
            {/* Link back to the Documentation site */}
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <a href="/docs/intro" className="stickyBackLink">← Back to Documentation</a>

            </div>

            {/* Swagger UI component */}
            <SwaggerUI url="/openapi-spec.yml" />
        </div>
    );
}

export default ApiReference;
