---
sidebar_position: 3
title: 'Social Authentication'
description: Quick Start with Basic Connections! 
sidebar_label: Social Authentication
---

# Social Authentication

Social Authentication allows your client to authenticate with social providers. The endpoints are pre-built and are easy for you to manage the social authentication flow from your client application. To get your `{auth_base_url}`, check it out here - [Get started with base url](/authentication/apireference/generalinfo#get-started-with-base-url).

> Note : **Signup and Login** authentication methods are handled under this single endpoint. If the user logging with a provider does not exists, then new user is created or else existing user details are returned as response

## Step - 1 : Setup Social Connection
To setup and get `connection_name` of your preferrred social connection, check it our here - [Setup your social connection](/authentication/quickstart/methods/social) 

:::info CALLBACK URL
Make sure to configure the below given call back URL in the third party service `https://localhost:8000/oauth/callback/`
:::

## Step - 2 : Get Authorisation Page URL
You will need to redirect the user to preferred social provider page to grant access to your application. You can get this authorize url from the below endpoint. On opening the `authorize_url` link, it will display a page asking the user to approve or deny access to your application. However, if you provide an invalid config credentials or redirect_uri then the user will instead see an error page.

#### Path
| Method | Endpoint |
|---------|-------|
|`POST` | `{auth_base_url}/oauth`|

#### Header
| Key | Datatype | Description|
|-------|-------|----------|
| `APP-KEY` * | String | App key of the particular project |


#### Body Data
POST the data in the **application/json** format.

| Param | Datatype | Description|
|-------|-------|----------|
| `connection_name` * | String | Unique connection_name of your social method |


#### Response Body Data

| Param | Datatype | Description|
|-------|-------|----------|
| `connection_name` | String | Unique connection_name of your social method |
| `authorize_url`   | String | URL of authorisation consent page |

#### Request Example

```go
POST https://api.zeromagic.in/auth/353d1499ab5149e194a53cf0f6c837f4/development/oauth 
HTTP/1.1
APP-KEY : ldM6yPAAE3PRTZbHXrjqGGzZY2Yjm7GwjAyjbNqWH48

{
    "connection_name":"google"
}
```

#### Response Example

```go
HTTP/1.1 
200 OK

{
    "connection_name":"google",
    "authorize_url":"https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=697287702987-gkvha4hnaucu0bks7p92b3.apps.googleusercontent.com&redirect_uri=http%3A//localhost%3A8000/api/oauth/callback&scope=https://www.googleapis.com/auth/userinfo.email&state=gAAAAABmITpQ_yFqTdppecJMBvXYFwa6lbJyF-DbxIfQ2LbvkEvErkFYQhrrqb_ABxWCXL75VcFGBf2cx010roKZ0VSFj8JHg-X6sieSSguLIoJfHF3l0t1QfA8F57wg4jmjZZEeQ=="
}
```

You can open this `authorize_url` from your client applicantion end and it will be prompted to user consent page.

## Step - 3 : User Success Response

:::info Client Redirect Uri
It is necessary to add your **client application in oauth redirect uri** under project settings. The success response is appended to your client application redirect uri as query params. To add oauth redirect uri, check it our here - [Add OAuth Redirect uri](/authentication/quickstart/methods/social)  
:::

#### Query Params
| Key | Datatype | Description|
|-------|-------|----------|
| `user_id` | String | User Id of the user |
| `email` | String | Email of the user |
| `access_token` | String | JWT access token is returned |
| `token_type` | String | Value is *bearer* |
| `expires_in` | String | Currently no expiry time for token, Returns None |

The output response will be in the format of `{client_oauth_redirect_uri}?{success_params}`
For example, if your client_oauth_redirect_uri is **https://zeromagic.in/** then success response will be in the format of `https://client.zeromagic.in/?user_id=&access_token=&token_type=&expires_in=`


#### Success Response Example

```go
GET https://client.zeromagic.in/?user_id=1&access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNDU2Nzg5LCJuYW1lIjoiSm9zZXBoIn0.OpOSSw7e485LOP5PrzScxHb7SR6sAOMRckfFwi4rp7o&token_type=bearer&expires_in=null
HTTP/1.1 
```

#### Error Response Example

The error message is also appended to the redirect uri as query params.The error message will be in the format of `https://client.zeromagic.in/?error=&message=&code=&state=`

```go
GET https://client.zeromagic.in/?error=error&message=message&code=error_code&state=gAAAAABmIWikfuZW6M2N5P6aGiL7wZOp1D_wCC2aIP4nlqFmVjS7KhHByd5zJjK_BpFeAc8yj24CDDmCtgC4MV1bATWEKzmkLw%3D%3D
HTTP/1.1 
```

### Support Social Providers 

To know about the supported social providers, visit here - [Supported Social Providers](/authentication/quickstart/methods/social#supported-social-providers)
