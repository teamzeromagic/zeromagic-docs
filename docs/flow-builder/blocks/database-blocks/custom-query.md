---
sidebar_position: 5
title: 'Custom Query'
description: Learn to about Custom Query! 
sidebar_label: Custom Query
---

# Custom Query

The Custom Query block in Zeromagic allows you to execute custom queries using the Zeromagic Query Language. This powerful feature enables you to interact with your Cosmos DB database with precision and flexibility.

## Zeromagic Query Language

The Zeromagic Query Language is a JSON-based query language specifically designed for interacting with Cosmos DB databases. It provides a straightforward syntax for constructing complex queries, filtering data, and performing operations on your database records.

**Container Name:** The name of the Cosmos DB container containing the record to be updated.


**Query Editor**: Custom Query block based on [**Zeromagic Query Language**](/datasources/zeromagic-query-language/overview) provides a user-friendly interface for composing and editing queries

**Auto Create**: Create a collection if it doesnt exists in the container.

**Returns**: Return a `val` based on the executed ZQL database query in the editor.


```jsx title="Custom Query Syntax"
{
  "container": "<container_name>",
  "filter": {
    "@opr": "<and/or>",
    "@sort": {
      "key": "<field_name>",
      "order": "<asc/desc>"
    },
    "@fields": ["<field_name_1>", "<field_name_2>"],
    "<field_name_1>": {
      "@contains": "<substring>",
      "@startswith": "<prefix>",
      "@in": ["<value_1>", "<value_2>"],
      "@nin": ["<value_1>", "<value_2>"],
      "@eq": "<value>",
      "@ne": "<value>",
      "@gt": "<integer>",
      "@lt": "<integer>",
      "@gte": "<integer>",
      "@lte": "<integer>"
    }
  }
}
```