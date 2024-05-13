---
sidebar_position: 4
title: 'Email with otp API'
description: Quick Start with Basic Connections! 
sidebar_label: Email with OTP
---


# Email with OTP - Basic Authentication

The Email with OTP authentication allows your client to authenticate using OTP method. The endpoints are pre-built and are easy to manage your authentication flow and users. To get your `{auth_base_url}`, check it out here - [Get started with base url](authentication/apireference/generalinfo#get-started-with-base-url).

> Note : **APP-KEY** *to be passed in Headers can be obtained from the settings in the project dashboard*

:::info Important
**Sending Email OTP** - Currently, we don't support additional custom SMTP configuration. We send emails from our SMTP server. No configuration is needed for email setup
:::

## Signup API

This endpoints allows you to create a new user using the email address and otp method.

#### Path
| Method | Endpoint |
|---------|-------|
|`POST` | `{auth_base_url}/email-otp-signup`|

#### Header
| Key | Datatype | Description|
|-------|-------|----------|
| `APP-KEY` * | String | App key of the particular project |


#### Body Data
POST the data in the **application/json** format.

| Param | Datatype | Description|
|-------|-------|----------|
| `email` * | String | Email of the user |


#### Response Body Data
The response with **201 CREATED** status code represents that user is created and the OTP is sent to the email address

| Param | Datatype | Description|
|-------|-------|----------|
| `user_id` | String | User Id of the new created user |
| `email` | String | Email of the user |


#### Request Example

```go
POST https://api.zeromagic.in/auth/353d1499ab5149e194a53cf0f6c837f4/development/email-otp-signup 
HTTP/1.1
APP-KEY : ldM6yPAAE3PRTZbHXrjqGGzZY2Yjm7GwjAyjbNqWH48

{
    "email":"user@zeromagic.in"
}
```

#### Response Example

```go
HTTP/1.1 
201 CREATED

{
    "user_id": "1",
    "email":"user@zeromagic.in"
}
```

## Login API

This endpoints allows you to login a user using the email and otp method.

#### Path
| Method | Endpoint |
|---------|-------|
|`POST` | `{auth_base_url}/email-otp-login`|

#### Header
| Key | Datatype | Description|
|-------|-------|----------|
| `APP-KEY` * | String | App key of the particular project |


#### Body Data
POST the data in the **application/json** format.

| Param | Datatype | Description|
|-------|-------|----------|
| `email` * | String | Email of the user |


#### Response Body Data
The response with **200 OK** status code represents that the OTP is sent to the email address

| Param | Datatype | Description|
|-------|-------|----------|
| `user_id` | String | User Id of the user |
| `email` | String | Email of the user |

#### Request Example

```go
POST https://api.zeromagic.in/auth/353d1499ab5149e194a53cf0f6c837f4/development/email-otp-login 
HTTP/1.1
APP-KEY : ldM6yPAAE3PRTZbHXrjqGGzZY2Yjm7GwjAyjbNqWH48

{
    "email":"user@zeromagic.in"
}
```

#### Response Example

```go
HTTP/1.1 
200 OK

{
    "user_id": "1",
    "email":"user@zeromagic.in"
}
```

## Verify Otp API

This endpoints allows you to verify the otp of the respective email address.

#### Path
| Method | Endpoint |
|---------|-------|
|`POST` | `{auth_base_url}/email-otp-verify`|

#### Header
| Key | Datatype | Description|
|-------|-------|----------|
| `APP-KEY` * | String | App key of the particular project |


#### Body Data
POST the data in the **application/json** format.

| Param | Datatype | Description|
|-------|-------|----------|
| `email` * | String | Email of the user |
| `otp_code` *| Integer | Otp sent to the email address |

#### Response Body Data

| Param | Datatype | Description|
|-------|-------|----------|
| `user_id` | String | User Id of the user |
| `email` * | String | Email of the user |
| `access_token` | String | JWT access token is returned |
| `token_type` | String | Value is *bearer* |
| `expires_in` | String | Currently no expiry time for token, Returns None |


#### Request Example

```go
POST https://api.zeromagic.in/auth/353d1499ab5149e194a53cf0f6c837f4/development/email-otp-login 
HTTP/1.1
APP-KEY : ldM6yPAAE3PRTZbHXrjqGGzZY2Yjm7GwjAyjbNqWH48

{
    "email":"user@zeromagic.in"
    "otp_code" : 1234
}
```

#### Response Example

```go
HTTP/1.1 
200 OK

{
   "user_id": "1",
   "email":"user@zeromagic.in"
   "access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNDU2Nzg5LCJuYW1lIjoiSm9zZXBoIn0.OpOSSw7e485LOP5PrzScxHb7SR6sAOMRckfFwi4rp7o",
   "token_type" :"bearer",
   "expires_in" : null
}
```