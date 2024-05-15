---
sidebar_position: 3
title: 'Social Connections'
description: Quick Start with Social Connections! 
sidebar_label: Social Connections
---

# Social Connections

Social Connections are variety of built-in authentication methods that you can readily enable and configure. These methods offer secure and convenient ways for users to access your platform.

## Setup Client OAuth Redirect URI 
You must add your **client application url in OAuth Redirect Uri** under projects settings in dashboard. This is the uri where your success response will be appended as query params and you can parse this response in your client application.

:::info
*It is mandatory to add OAuth Redirect Uri for your social authentication method flow to work properly.*
:::

**Step-1 :** Open your **Project Settings** in your dashboard.

![project-console](@site/static/img/project-console.png)

**Step-2 :** Add your Client Application Url in **OAuth Redirect Uri** under your project settings.

![project-console](@site/static/img/project-console.png)


## Create Social Connection
You can start creating connection within just few clicks. Follow the steps below steps to start creating a connection.

### Connection 1: Google Auth

- Navigate to the Providers tab and select `Google`. This action will prompt the configuration form to appear.
- Enter your `Client ID` and `Client Secret` of the [Google OAuth](https://support.google.com/cloud/answer/6158849).
- Add the Callback Url in your third party developer application. Get the [Oauth Callback Url here](/authentication/quickstart/methods/social#oauth-callback-url)


![connection-google](@site/static/img/connection-google.png)

- Click on `Add Connection` to easily link your connection to the platform with just a single click.

![connection-google](@site/static/img/connection-google.png)

- Once you created a new connection, click on the newly created connection in your `Connections` tab. You can get your `connection_name` in that configurations tab. This `connection_name` will be used to make an api calls from your client application.

![connection-google](@site/static/img/connection-google.png)


## Supported Social Providers

The list of supported social authentication methods

| Provider    | Followed Protocol |
|-------------|------------------|
| Google    | OAuth2 |


## Oauth Callback URL
Make sure to configure the below given call back URL in the third party service

:::info Callback url
`https://localhost:8000/oauth/callback/`
:::
