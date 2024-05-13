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
| Login      | [/email-password-login](https://www.google.com/support/enterprise/static/gsa/docs/admin/current/gsa_doc_set/admin_crawl/url_patterns.html) |
| Reset      | [/email-password-reset](https://www.google.com/support/enterprise/static/gsa/docs/admin/current/gsa_doc_set/admin_crawl/url_patterns.html) |

### Mobile number with otp API

| API         | Path             |
|-------------|------------------|
| Sign-up    | [/mobile-otp-signup](https://www.google.com/support/enterprise/static/gsa/docs/admin/current/gsa_doc_set/admin_crawl/url_patterns.html) |
| Login      | [/mobile-otp-login](https://www.google.com/support/enterprise/static/gsa/docs/admin/current/gsa_doc_set/admin_crawl/url_patterns.html) |
| Verify OTP      | [/mobile-otp-verify](https://www.google.com/support/enterprise/static/gsa/docs/admin/current/gsa_doc_set/admin_crawl/url_patterns.html) |

### Username with password API

| API         | Path             |
|-------------|------------------|
| Sign-up    | [/username-password-signup](https://www.google.com/support/enterprise/static/gsa/docs/admin/current/gsa_doc_set/admin_crawl/url_patterns.html) |
| Login      | [/username-password-login](https://www.google.com/support/enterprise/static/gsa/docs/admin/current/gsa_doc_set/admin_crawl/url_patterns.html) |

### Email with otp API

| API         | Path             |
|-------------|------------------|
| Sign-up    | [/email-otp-signup](https://www.google.com/support/enterprise/static/gsa/docs/admin/current/gsa_doc_set/admin_crawl/url_patterns.html) |
| Login      | [/email-otp-login](https://www.google.com/support/enterprise/static/gsa/docs/admin/current/gsa_doc_set/admin_crawl/url_patterns.html) |
| Verify OTP      | [/email-otp-verify](https://www.google.com/support/enterprise/static/gsa/docs/admin/current/gsa_doc_set/admin_crawl/url_patterns.html) |

## Social Authentication - Available APIs

The endpoint `/oauth` is common for all social authentication methods  

| API         | Path             |
|-------------|------------------|
| OAuth    | [/oauth](https://www.google.com/support/enterprise/static/gsa/docs/admin/current/gsa_doc_set/admin_crawl/url_patterns.html) |

The list of supported social authentication methods

| Provider    | Followed Protocol |
|-------------|------------------|
| Google    | OAuth2 |


