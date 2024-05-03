---
sidebar_position: 3
title: 'Environment'
description: Quick Start with Environment! 
sidebar_label: Environment 
---

# Environment

Environments provide a structured approach to managing deployments for your projects. Each environment acts as a distinct stage in your development lifecycle, allowing you to isolate, test, and ultimately deploy your user's API to production.


## Create Environment
 
- To create a new environment, head to the **Environments** section in the **project console**. 

![sidebar-env](@site/static/img/sidebar-env.png)

- Click `Create Environment` and will launch a form to define your environment details. 

- Choose a _"name"_ that clearly identifies the purpose of the environment. 
- Select the specific `database` you want to connect to from the available dropdown menu. This database will be linked to this environment.
- By clicking on `Create Environment` will set up your new environment, ready for deployment process.

![secret-values](@site/static/img/secret-values.png)

:::info Important
Please note that the free tier of Zeromagic allows for only one environment.
:::

## Manage Environment

- Click on the specific environment you want to manage. This will open the environment's settings page.
- Within the settings section, you can modify the `database` configuration associated with this environment
- To permanently delete a environment, click the **Delete** in the settings section.

:::warning Warning
Deleting the environment will also remove any configurations, secrets, or deployed APIs associated with it.
:::

![secret-key](@site/static/img/secret-key.png)
