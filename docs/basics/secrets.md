---
sidebar_position: 4
title: 'Secrets'
description: Quick Start with Secrets! 
sidebar_label: Secrets 
---

# Secrets

Secrets are sensitive pieces of information that are vital for the secure functioning of your applications, such as API keys, database passwords, and access tokens. With Zeromagic, you can easily manage these secrets within your environment to ensure security and confidentiality.
 

## Create Secrets

- To create a new secret, head to the **Secrets** section in the **project console**. 

![sidebar-secrets](@site/static/img/sidebar-secrets.png)

- Click `Create Secret` and will launch a form to define your secret details. 
- Identify the environment where you want to store the secret. You might need to select a specific environment from a list or menu.

![secret-env-name](@site/static/img/secret-env-name.png)

- Choose a _"name"_ that clearly identifies the purpose of the secret.
- Input the _"value"_ that the secret represents.

![secret-details](@site/static/img/secret-details.png)

- Select the type of secret from the dropdown. You can check the available secret types [here](secrets#available-secret-types).
- Click on `Create Secret` and your secret will be created.

![secret-values](@site/static/img/secret-values.png)

## Delete Secret
To permanently delete a secret, click the **Delete** button next to the key you want to remove. This action cannot be undone.

![secret-key](@site/static/img/secret-key.png)

## Available Secret Types

- **Password :** Passwords are used for user authentication purposes. They grant access to protected systems, databases, or applications.
- **Token :** Tokens are short-lived pieces of data used for authentication or authorization. They often act as temporary credentials for accessing resources.
- **API Key :** API keys are unique identifiers used to authenticate applications or users when interacting with APIs.
- **Basic Auth :** Basic authentication is a simple authorization scheme that transmits credentials (username and password) directly within the request header.