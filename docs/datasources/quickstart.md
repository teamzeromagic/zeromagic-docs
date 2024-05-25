---
sidebar_position: 2
title: 'Quickstart'
description: Quick Start with Database! 
sidebar_label: Quickstart 
tags: [database, datasource, azure-cosmosdb] 
---

# Connect Databases to Zeromagic

Quickly connect a new, existing, or demo databases with the Zeromagic Platform. You can connect multiple databases and build one easy-to-use Restful or GraphQL API for all your data.

:::tip Connection methods

You can connect to databases by using environment variables, the raw connection string or connection parameters. Employing environment variables is advised for enhanced security, as connection details set via a string may become exposed in Metadata. 

:::

If you have created your project in Zeromagic platform, click on the `View Console` button to open the Project Console in your browser.

![project-console](@site/static/img/project-console.png)

Navigate to `Database` section on the sidebar of the project console. 

## Option 1: Creating a Database on the platform

This option allows you to create a new Azure Cosmos DB instance directly within the Zeromagic platform. This is ideal if you don't have an existing database or prefer a managed solution.

- To get started quickly with a database,click `Create Database`.

- Choose a name for your database to identify it on the platform.

- Select `Cosmos DB` from the available database options.

Click on `Connect Database` to create and connect a new Cosmos database to your Project.

![database-free-create](@site/static/img/create-free-db.png)



:::info Note

Cosmos DB is available only on shared instances for free tier. You cannot edit the configuration details in free instance.

:::

## Option 2: Connecting to an External Database

This option allows you to connect Zeromagic to an already-existing database that is managed somewhere else.

:::info Note

The connection details can only be connected to **Azure Cosmos DB for NoSQL**.
You can create your Cosmos DB by follwing this [tutorial](https://learn.microsoft.com/en-us/azure/cosmos-db/try-free)

:::

- To get started quickly with a database,click `Create Database`.

- Choose a name for your database to identify it on the platform.

- To use an existing database, toggle `External Connection`.

-  Enter the details of your database connection. Enter your `Cosmos Database name`, which is the name you assigned to your database in Azure Cosmos DB. 

![cosmos-db-name](@site/static/img/cosmos-db-name.png)

- Provide your Azure Cosmos DB `Connection URI`. This is a unique string that identifies your database instance and allows secure access. You can find the connection URI within the Azure portal for your Cosmos DB account.

- You have the option to use either the **PRIMARY KEY** or **SECONDARY KEY** as your `Connection Key` to connect to your external database.

![cosmos-config](@site/static/img/cosmos-config.png)

Click on `Connect Database` to connect to your existing Cosmos database to your Project.

![cosmos-ext-db](@site/static/img/create-ext-db.png)

Your external Cosmos database will be connected to the platform, allowing you to transfer data seamlessly.

### More databases

More database support will soon be available. Here, you can stay updated with supported [databases](/datasources/introduction).

### Quick Links

[Try Azure Cosmos DB free](https://learn.microsoft.com/en-us/azure/cosmos-db/try-free)