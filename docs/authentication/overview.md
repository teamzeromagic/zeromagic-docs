---
sidebar_position: 1
title: 'Authentication & User Identity'
description: User Creation and Management! 
sidebar_label: Overview 
---

import Cosmos from '@site/static/img/azure-cosmos-db.png';
import Mongo from '@site/static/img/mongodb.png';

# Authentication & User Identity

Zeromagic simplifies your project development with **authentication feature**, empowering you to manage user authentication seamlessly within your projects.With our `built-in authentication system`, you can create and manage user accounts effortlessly, eliminating the need for external authentication services.

Our platform simplifies user management by offering everything you need within the project console. **You can create and manage users from our console or using API**. According to your project's specific needs, you can choose from various authentication methods, including traditional email-password combinations or the added security of mobile-one-time passwords (OTPs). We even support Social authentication. You can maintain complete control over user information with a centralized user management feature. This user-friendly system allows you to configure your own templates for one-time codes, password resets, and email confirmations. Additionally you can update user details, reset passwords, and revoke access – all from a single, convenient location within the project console.

:::info IMPORTANT
> Currently **Azure CosmosDB** is only supported

If you are spinning database internally, then zeromagic handles all your database and containers. If you are adding external database using **BYOD(Bring Your Own Database)**,then zeromagic will be creating a separate container in your database to handle your users.

> Note : In case, if your users are not displayed in the zeromagic dashboard then it might be due to tampered users data. Tampered Users won't be reflected in rest api operations and in dashboard also. 
:::


### Quick Links
- [Authentication Methods](/authentication/quickstart/methods/introduction)
- [Template Configurations](/authentication/quickstart/templates)
- [Manage Users](/authentication/quickstart/users)
- [API Reference](/authentication/apireference/generalinfo)

