---
sidebar_position: 1
title: 'Email Password API'
description: Get started with Email and Password authentication API
sidebar_label: Email Password
---

# Email and Password - Basic Authentication

The Email Password authentication allows your client to authenticate using email and password method. The endpoints are pre-built and are easy to manage your authentication flow and users. To get your `{auth_base_url}`, check it out here - [Get started with base url](/authentication/apireference/generalinfo#get-started-with-base-url).

> Note : **APP-KEY** *to be passed in Headers can be obtained from the settings in the project dashboard*


## Signup API

This endpoints allows you to create a new user using the email and password method.

#### Path
| Method | Endpoint |
|---------|-------|
|`POST` | `{auth_base_url}/email-password-signup`|

#### Header
| Key | Datatype | Description|
|-------|-------|----------|
| `APP-KEY` * | String | App key of the particular project |


#### Body Data
POST the data in the **application/json** format.

| Param | Datatype | Description|
|-------|-------|----------|
| `email` * | String | Input email address of the user |
| `password` * | String | Password of the user |
| `is_verification` | bool | If True, then a verification mail will be sent to the user's mail-id. Default is False. |

:::info Important
**Email Verification Process** - An Email verification link will be sent automatically to the user's email address if is_verification is True. Upon clicking the link, the user's email address will be verified automatically.
:::

#### Response Body Data

| Param | Datatype | Description|
|-------|-------|----------|
| `user_id` | String | User Id of the new created user |
| `email`  | String | Email address of the user |
| `email_verification` | String | If email verification is required then **"pending"**, else status is **"verified"** if verification not required. |


#### Request Example

```go
POST https://api.zeromagic.in/auth/353d1499ab5149e194a53cf0f6c837f4/development/email-password-signup 
HTTP/1.1
APP-KEY : ldM6yPAAE3PRTZbHXrjqGGzZY2Yjm7GwjAyjbNqWH48

{
   "email" : "user@zeromagic.in",
   "password": "user1234",
   "is_verification" : false
}
```

#### Response Example

```go
HTTP/1.1 
201 CREATED

{
   "user_id": "1",
   "email" : "user@zeromagic.in",
   "email_verification" : "verified"
}
```

## Login API

This endpoints allows you to login a user using the email and password method.

#### Path
| Method | Endpoint |
|---------|-------|
|`POST` | `{auth_base_url}/email-password-login`|

#### Header
| Key | Datatype | Description|
|-------|-------|----------|
| `APP-KEY` * | String | App key of the particular project |


#### Body Data
POST the data in the **application/json** format.

| Param | Datatype | Description|
|-------|-------|----------|
| `email` * | String | Email address of the user |
| `password` * | String | Password of the user |


#### Response Body Data

| Param | Datatype | Description|
|-------|-------|----------|
| `user_id` | String | User Id of the user |
| `email`  | String | Email address of the user |
| `email_verification` | String | If email verification is required then **"pending"**, else status if **"verified"** if verification not required. |
| `access_token` | String | JWT access token is returned |
| `token_type` | String | Value is *bearer* |
| `expires_in` | String | Currently no expiry time for token, Returns null |



#### Request Example

```go
POST https://api.zeromagic.in/auth/353d1499ab5149e194a53cf0f6c837f4/development/email-password-login 
HTTP/1.1
APP-KEY : ldM6yPAAE3PRTZbHXrjqGGzZY2Yjm7GwjAyjbNqWH48

{
   "email" : "user@zeromagic.in",
   "password": "user1234"
}
```

#### Response Example

```go
HTTP/1.1 
200 OK

{
   "user_id": "1",
   "email" : "user@zeromagic.in",
   "email_verification" : "verified",
   "access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNDU2Nzg5LCJuYW1lIjoiSm9zZXBoIn0.OpOSSw7e485LOP5PrzScxHb7SR6sAOMRckfFwi4rp7o",
   "token_type" :"bearer",
   "expires_in" : null
}
```

## Password Reset API

This endpoints allows you to reset the password for the user.

#### Path
| Method | Endpoint |
|---------|-------|
|`POST` | `{auth_base_url}/email-password-reset`|

#### Header
| Key | Datatype | Description|
|-------|-------|----------|
| `APP-KEY` * | String | App key of the particular project |

#### Body Data
POST the data in the **application/json** format.

| Param | Datatype | Description|
|-------|-------|----------|
| `email` * | String | Email address of the user |


#### Response Body Data

| Param | Datatype | Description|
|-------|-------|----------|
| `user_id` | String | User Id of the new created user |
| `email`  | String | Email address of the user |


:::info Important
**Password Reset Process** - An Email password reset link will be sent automatically to the user's email address. Upon clicking the link, the user will be redirected to password reset page where user can set his new password. You don't need to create a webpage for password reset from your client end.
:::



#### Request Example

```go
POST https://api.zeromagic.in/auth/353d1499ab5149e194a53cf0f6c837f4/development/email-password-reset 
HTTP/1.1
APP-KEY : ldM6yPAAE3PRTZbHXrjqGGzZY2Yjm7GwjAyjbNqWH48

{
   "email" : "user@zeromagic.in"
}
```

#### Response Example

```go
HTTP/1.1 
200 OK

{
   "user_id": "1",
   "email" : "user@zeromagic.in"
}
```

