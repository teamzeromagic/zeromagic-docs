---
sidebar_position: 3
title: 'HTTP Response'
description: Learn to about HTTP Response! 
sidebar_label: HTTP Response
---

# HTTP Response

The HTTP Response block is utilized to send a response back for an HTTP request. This block ensures that the response returned is properly formatted as a JSON object, making it suitable for integration with web services and APIs.

:::tip Important

The Response value (payload) only accepts a JSON object or a database return values. Make sure that the response value is a JSON object.

:::

![json](@site/static/img/json-var.png)
![response](@site/static/img/response.png)

```jsx title="Sample Response"
{
  "body" :{
    "response" : {
        "userId": 123,
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com"
    },
    "status": 200
  }
}
```

### Key features of the HTTP Response block include:

- **JSON Format:** The response value must be in JSON format. This ensures compatibility with a wide range of applications and services that consume JSON data.

- **Status Codes:** You can specify HTTP status codes to indicate the success or failure of the request. Common status codes include 200 (OK), 400 (Bad Request), 404 (Not Found), and 500 (Internal Server Error), among others.
