---
sidebar_position: 3
title: 'Dataconnectors'
description: Learn to about Dataconnectors! 
sidebar_label: Dataconnectors
---

# Data Connectors

Data Connectors are essential for integrating your data sources with your GraphQL endpoint. They allow you to seamlessly bind your data schema to the GraphQL API, enabling efficient data retrieval and manipulation.
 
## How Data Connectors Work ?

Zeromagic's Data Connector page provides a central location to manage your data connections. 

### 1. Data Sources

Upon navigating to the Data Connectors page, you'll be presented with a list of available data sources. All the data sources available in the `Database` section of the project console will be displayed here.

:::info Data sources 
Refer the docs to learn about [data sources](/datasources/introduction/)
:::

![datamanager](@site/static/img/datamanager.png)

### 2. Tables within Data Sources

When you click on a specific data source, you'll be prompted to a `Data Manager Page`. This page consists of `List` and `Not Listed` tabs. 

- __Listed:__ Shows all the tables which have logical models that are listed in that data source.

![listed-tables](@site/static/img/listed-tables.png)

- __Not Listed:__ Shows all the tables which are not listed within that data source.

![notlisted-tables](@site/static/img/notlisted-tables.png)

### 3. Creating Logical Models

Logical models represent the structure and relationships of your data, enabling you to define how data should be queried and manipulated through the GraphQL API.

- **Select a Table:** In the `Not Listed` table select a table, click on `list` to create a logical model.

- **Define Logical Model:** Provide the necessary details for the logical model, such as field names, data types, and relationships with other models.

- **Create Logical Model:** Create the logical model to generate the corresponding schema


![logical-model](@site/static/img/logical-model.png)

### 4. Schema Generation 

Once a logical model is created, the system automatically generates the GraphQL schema for mutations and queries based on the model. This schema allows you to perform CRUD (Create, Read, Update, Delete) operations on the data through the GraphQL API.
 
### 5. Edit logical model

In the `Listed` tab, you can find all the tables that have been listed. Click on a specific table to _view and manage_ its logical model. This page displays comprehensive information about the model, allowing you to edit fields and define or modify relationships. Use this functionality to refine and optimize your data structure for seamless integration with your GraphQL endpoint.


## Benefits of Data Connectors ?

- **Automatic Schema Generation:** Logical models are converted into GraphQL schemas automatically, saving time and reducing errors.

- **Enhanced Data Management:** Logical models provide a clear and organized structure for your data, making it easier to manage and query.

- **Simplified Data Access:** Data connectors provide a unified interface for accessing data from various sources through GraphQL.

:::warning Troubleshooting
- **Tables Not Listing:** Ensure you have selected a valid data source and that the table is not already listed.
- **Schema Generation Issues:** Verify that all fields and relationships in the logical model are correctly defined.
:::
 