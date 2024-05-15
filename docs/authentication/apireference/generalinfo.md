---
sidebar_position: 1
title: 'General API Information'
description: Get started with Auth APIS! 
sidebar_label: General Information
---

# General Information

The Zeromagic Auth API Reference allows to create and manage users using `REST API`. These apis are great place to start if you want to build authentication system for your application. You can start consuming to the pre-built endpoints from your client application. We support both Basic and Social authentication methods.

## Get Started with Base URL

The authentication has separate url which can be found in the `Environments` section in the dashboard. The base url can be found in the name of `Auth URL` under Environments. To make an api call to the below authentication endpoint, the uri is in the format or `{base_auth_url}/{authentication_endpoint}`.

For example, if `https://api.zeromagic.in/auth/353d1499ab5149e194a53cf0f6c837f4/development/` is your authentication base url and you have to make a request to `/email-password-signup` endpoint, then your uri will be `https://api.zeromagic.in/auth/353d1499ab5149e194a53cf0f6c837f4/development/email-password-signup`

:::info Important
**Environments** are required for making an api call. When you make an api call to the url mentioned in the environments, the database operations is performed over the **Database binded to the Environment**.  
:::

## Basic Authentication - Available APIs

### Email with password API

| API         | Path             |
|-------------|------------------|
| Sign-up    | [/email-password-signup](/authentication/apireference/basicauth/emailpassword#sign-up) |
| Login      | [/email-password-login](/authentication/apireference/basicauth/emailpassword#login-api) |
| Reset      | [/email-password-reset](/authentication/apireference/basicauth/emailpassword#password-reset-api) |

### Mobile number with otp API

| API         | Path             |
|-------------|------------------|
| Sign-up    | [/mobile-otp-signup](/authentication/apireference/basicauth/phoneotp#signup-api) |
| Login      | [/mobile-otp-login](/authentication/apireference/basicauth/phoneotp#login-api) |
| Verify OTP      | [/mobile-otp-verify](/authentication/apireference/basicauth/phoneotp#verify-otp-api) |

### Username with password API

| API         | Path             |
|-------------|------------------|
| Sign-up    | [/username-password-signup](/authentication/apireference/basicauth/usernamepass#signup-api) |
| Login      | [/username-password-login](/authentication/apireference/basicauth/usernamepass#login-api) |

### Email with otp API

| API         | Path             |
|-------------|------------------|
| Sign-up    | [/email-otp-signup](/authentication/apireference/basicauth/emailotp#signup-api) |
| Login      | [/email-otp-login](/authentication/apireference/basicauth/emailotp#login-api) |
| Verify OTP      | [/email-otp-verify](/authentication/apireference/basicauth/emailotp#verify-otp-api) |

## Social Authentication - Available APIs

The endpoint `/oauth` is common for all social authentication methods  

| API         | Path             |
|-------------|------------------|
| OAuth    | [/oauth](/authentication/apireference/socialconnection) |


### Support Social Providers 

To know about the supported social providers, visit here - [Supported Social Providers](/authentication/quickstart/methods/social#supported-social-providers)

