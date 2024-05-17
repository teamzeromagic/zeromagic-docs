---
sidebar_position: 3
title: 'Username with Pasword API'
description: Quick Start with Basic Connections! 
sidebar_label: Username Password
---

# Username with Password - Basic Authentication

The Username with Password authentication allows your client to authenticate using username and password method. The endpoints are pre-built and are easy to manage your authentication flow and users. To get your `{auth_base_url}`, check it out here - [Get started with base url](/authentication/apireference/generalinfo#get-started-with-base-url).

> Note : **APP-KEY** *to be passed in Headers can be obtained from the settings in the project dashboard*

## Signup API

This endpoints allows you to create a new user using the username and password method.

#### Path
| Method | Endpoint |
|---------|-------|
|`POST` | `{auth_base_url}/username-password-signup`|

#### Header
| Key | Datatype | Description|
|-------|-------|----------|
| `APP-KEY` * | String | App key of the particular project |


#### Body Data
POST the data in the **application/json** format.

| Param | Datatype | Description|
|-------|-------|----------|
| `username` * | String | Username of the user. Check out the [username format here](/authentication/apireference/basicauth/usernamepass#username-validators) |
| `password` * | String | Password of the user |


#### Response Body Data

| Param | Datatype | Description|
|-------|-------|----------|
| `user_id` | String | User Id of the new created user |
| `username`  | String | Username of the user |


#### Request Example

```go
POST https://api.zeromagic.in/auth/353d1499ab5149e194a53cf0f6c837f4/development/username-password-signup 
HTTP/1.1
APP-KEY : ldM6yPAAE3PRTZbHXrjqGGzZY2Yjm7GwjAyjbNqWH48

{
   "username" : "zeromagic_user",
   "password": "user1234"
}
```

#### Response Example

```go
HTTP/1.1 
201 CREATED

{
   "user_id": "1",
   "username" : "zeromagic_user"
}
```

## Login API

This endpoints allows you to login a user using the username and password method.

#### Path
| Method | Endpoint |
|---------|-------|
|`POST` | `{auth_base_url}/username-password-login`|

#### Header
| Key | Datatype | Description|
|-------|-------|----------|
| `APP-KEY` * | String | App key of the particular project |


#### Body Data
POST the data in the **application/json** format.

| Param | Datatype | Description|
|-------|-------|----------|
| `username` * | String | Username of the user. Check out the [username format here](/authentication/apireference/basicauth/usernamepass#username-validators) |
| `password` * | String | Password of the user |


#### Response Body Data

| Param | Datatype | Description|
|-------|-------|----------|
| `user_id` | String | User Id of the user |
| `username`  | String | Username of the user |
| `access_token` | String | JWT access token is returned |
| `token_type` | String | Value is *bearer* |
| `expires_in` | String | Currently no expiry time for token, Returns null |


#### Request Example

```go
POST https://api.zeromagic.in/auth/353d1499ab5149e194a53cf0f6c837f4/development/username-password-login 
HTTP/1.1
APP-KEY : ldM6yPAAE3PRTZbHXrjqGGzZY2Yjm7GwjAyjbNqWH48

{
   "username" : "zeromagic_user",
   "password": "user1234"
}
```

#### Response Example

```go
HTTP/1.1 
200 OK

{
   "user_id": "1",
   "username" : "zeromagic_user"
   "access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNDU2Nzg5LCJuYW1lIjoiSm9zZXBoIn0.OpOSSw7e485LOP5PrzScxHb7SR6sAOMRckfFwi4rp7o",
   "token_type" :"bearer",
   "expires_in" : null
}
```


## Username 
- The username must be between 4 and 20 characters long.
- The username can only contain alphanumeric characters (letters and digits) and underscores.
- The username cannot contain any spaces.
- The username must begin with a letter (a-z or A-Z).

```jsx title="Examples"
zeromagic_user
Zerouser01
```