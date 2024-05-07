---
sidebar_position: 3
title: 'Update Records'
description: Learn to about Update Records! 
sidebar_label: Update Records
---

# Update Records

The UpdateOne and UpdateMany blocks in Zeromagic allow you to modify existing records within a Cosmos DB container. These blocks offer the flexibility to update either a single record or multiple records simultaneously.

## 1. Update One
Updates a single record by its ID in a Cosmos DB container.

### Properties

**Container Name:** The name of the Cosmos DB container containing the record to be updated.

**Record ID:** The unique identifier of the record to be updated.

**Update Record:** The data that will be used to update the record.

**Returns**: Return a `record` with the ID of newly created record.

## 2. Update Many
Updates multiple records based on a filter query in a Cosmos DB container.


### Properties

**Container Name:** The name of the Cosmos DB container containing the record to be updated.


**Filter Query**: A filter query used to identify the records to be updated. The filter query consists of a left value `(field name)` and a right value `(data to be evaluated)`.

It utilises the same condition syntax as the [If Conditions](if-else#condition-editor). 

**Update Record:** The data that will be used to update the record.

**Returns**: Return a `records` with the IDs of newly created records.
