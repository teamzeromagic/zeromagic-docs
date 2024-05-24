---
sidebar_position: 1
title: 'Create Records'
description: Learn to about Create Records! 
sidebar_label: Create Records
---
# Create Records

The CreateOne and CreateMany blocks in Zeromagic allow you to insert data into a Cosmos DB container. These blocks are useful for adding single or multiple records to your database.


## 1. Create One

Creates a single record in a Cosmos DB container.

### Properties
**Container Name**: The name of the Cosmos DB container where the object will be inserted.

**Records to Add**: The object to be inserted into the container.

**Auto Create**: Create a collection if it doesnt exists in the container.

**Returns**: Return a `val` with the ID of newly created record.

## 2. Create Many

Creates multiple records in a Cosmos DB container in a single operation.

**Container Name**: The name of the Cosmos DB container where the objects will be inserted.

**Records to Add**: An array of objects to be inserted into the container.

**Auto Create**: Create a collection if it doesnt exists in the container.

**Returns**: Return a `val` with the IDs of newly created records.