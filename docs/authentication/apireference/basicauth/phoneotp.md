---
sidebar_position: 2
title: 'Mobile number with otp API'
description: Quick Start with Basic Connections! 
sidebar_label: Mobile number with OTP
---

# Mobile number with OTP - Basic Authentication

The Mobile number with OTP authentication allows your client to authenticate using OTP method. The endpoints are pre-built and are easy to manage your authentication flow and users. To get your `{auth_base_url}`, check it out here - [Get started with base url](authentication/apireference/generalinfo#get-started-with-base-url).

> Note : **APP-KEY** *to be passed in Headers can be obtained from the settings in the project dashboard*

:::info Important
**Sending SMS OTP** - Currently, we send SMS OTP via Twilio. It is necessary for configure your twilio integration in the dashboard. Click here for [twilio integration](/integrations/twilio)
:::

## Signup API

This endpoints allows you to create a new user using the mobile number and otp method.

#### Path
| Method | Endpoint |
|---------|-------|
|`POST` | `{auth_base_url}/mobile-otp-signup`|

#### Header
| Key | Datatype | Description|
|-------|-------|----------|
| `APP-KEY` * | String | App key of the particular project |


#### Body Data
POST the data in the **application/json** format.

| Param | Datatype | Description|
|-------|-------|----------|
| `country_code` * | String | Country code of the mobile number. Check the [supported country codes](/authentication/apireference/basicauth/phoneotp#supported-country-codes) |
| `mobile` * | String | Mobile number of the user |


#### Response Body Data
The response with **201 CREATED** status code represents that user is created and the OTP is sent to the mobile number

| Param | Datatype | Description|
|-------|-------|----------|
| `user_id` | String | User Id of the new created user |
| `mobile` | String | Mobile number of the user |


#### Request Example

```go
POST https://api.zeromagic.in/auth/353d1499ab5149e194a53cf0f6c837f4/development/mobile-otp-signup 
HTTP/1.1
APP-KEY : ldM6yPAAE3PRTZbHXrjqGGzZY2Yjm7GwjAyjbNqWH48

{
   "country_code" : "+91",
   "mobile": "9876543211"
}
```

#### Response Example

```go
HTTP/1.1 
201 CREATED

{
   "user_id": "1",
   "mobile": "9876543211"
}
```

## Login API

This endpoints allows you to login a user using the mobile number and otp method.

#### Path
| Method | Endpoint |
|---------|-------|
|`POST` | `{auth_base_url}/mobile-otp-login`|

#### Header
| Key | Datatype | Description|
|-------|-------|----------|
| `APP-KEY` * | String | App key of the particular project |


#### Body Data
POST the data in the **application/json** format.

| Param | Datatype | Description|
|-------|-------|----------|
| `mobile` * | String | Mobile number of the user |


#### Response Body Data
The response with **200 OK** status code represents that the OTP is sent to the mobile number

| Param | Datatype | Description|
|-------|-------|----------|
| `user_id` | String | User Id of the user |
| `mobile` | String | Mobile number of the user |


#### Request Example

```go
POST https://api.zeromagic.in/auth/353d1499ab5149e194a53cf0f6c837f4/development/mobile-otp-login 
HTTP/1.1
APP-KEY : ldM6yPAAE3PRTZbHXrjqGGzZY2Yjm7GwjAyjbNqWH48

{
   "mobile": "9876543211"
}
```

#### Response Example

```go
HTTP/1.1 
200 OK

{
   "user_id": "1",
   "mobile": "9876543211"
}
```

## Verify Otp API

This endpoints allows you to verify the otp of the respective mobile number.

#### Path
| Method | Endpoint |
|---------|-------|
|`POST` | `{auth_base_url}/mobile-otp-verify`|

#### Header
| Key | Datatype | Description|
|-------|-------|----------|
| `APP-KEY` * | String | App key of the particular project |


#### Body Data
POST the data in the **application/json** format.

| Param | Datatype | Description|
|-------|-------|----------|
| `mobile` * | String | Mobile number of the user |
| `otp_code` *| Integer | Otp sent to the mobile number |

#### Response Body Data

| Param | Datatype | Description|
|-------|-------|----------|
| `user_id` | String | User Id of the user |
| `mobile` | String | Mobile number of the user |
| `access_token` | String | JWT access token is returned |
| `token_type` | String | Value is *bearer* |
| `expires_in` | String | Currently no expiry time for token, Returns null |


#### Request Example

```go
POST https://api.zeromagic.in/auth/353d1499ab5149e194a53cf0f6c837f4/development/mobile-otp-login 
HTTP/1.1
APP-KEY : ldM6yPAAE3PRTZbHXrjqGGzZY2Yjm7GwjAyjbNqWH48

{
   "mobile": "9876543211",
   "otp_code" : 1234
}
```

#### Response Example

```go
HTTP/1.1 
200 OK

{
   "user_id": "1",
   "mobile": "9876543211",
   "access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNDU2Nzg5LCJuYW1lIjoiSm9zZXBoIn0.OpOSSw7e485LOP5PrzScxHb7SR6sAOMRckfFwi4rp7o",
   "token_type" :"bearer",
   "expires_in" : null
}
```

## Supported Country Codes

Below are the list of country codes supported currently. Please, reach out to our support team,if your country code is not listed.

| Country | Country Code |
|---------|--------------|
| India   |  +91         |