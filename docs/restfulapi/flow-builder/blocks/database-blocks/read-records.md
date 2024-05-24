---
sidebar_position: 2
title: 'Read Records'
description: Learn to about Read Records! 
sidebar_label: Read Records
---

# Read Records

The ReadOne and ReadMany blocks in Zeromagic enable you to retrieve data from a Cosmos DB container. These blocks provide flexibility in fetching either a single record or multiple records from your database.


## 1. Read One

Reads a single record by its ID from a Cosmos DB container.

### Properties

**Container Name**: The name of the Cosmos DB container from which the record will be deleted.

**Record ID**: The unique identifier of the record to be deleted.

**Returns**: Return a `record` object with the fetched data.

## 2. Read Many

Reads multiple records sorted by a specific key and order.

**Container Name**: The name of the Cosmos DB container from which the record will be deleted.

**Sort Key:** The key by which the retrieved records will be sorted.

**Sort Order:** The order in which the retrieved records will be sorted (ascending or descending).

**Returns**: Return a `record` array containing the sorted data.
