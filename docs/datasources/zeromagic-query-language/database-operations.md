---
sidebar_position: 3
title: "Database Operations"
description: Quick Introduction with Query Language Database Operations!
sidebar_label: Database Operations
---

# Database Operations

Zeromagic supports a range of database methods to perform CRUD (Create, Read, Update, Delete) operations on data. Available methods include readOne, readMany, createOne, createMany, updateOne, updateMany, deleteOne, and deleteMany, providing comprehensive support for data management tasks.

## Read Operations

a) `readOne`: Retrieve a single record by its `ID`.

```jsx title="readOne"
{

  "container": "student",
  "filter":{
    "id": "1",
    }
}
```

b) `readMany`: Retrieve multiple records based on specific criteria using `filter property`.

```jsx title="readMany"
{
    "container": "student",
    "filter":{
        "@opr" : "and/or",
        "@sort": { "key": "name", "order": "asc" },
        "@fields" : ["name","subject"],
        "id": "1",
        "age": {
            "@gt": 20,
        },
        "subject" : {
            "@in": ["science","maths"],
        }
    }
}
```

## Create Operations

a) `createOne`: Create a new record with the provided data in the `item property`.

```jsx title="createOne"
{

  "container": "student",
   "item": {
     "id": "1",
     "age" : 30,
     "name": "Max",
     "subject" : ["science" , "biology"] 
    }
}
```

b) `createMany`: Create multiple records in a single operation using the `items property`.

```jsx title="createMany"
{

  "container": "student",
   "items": [
    {
     "id": "1",
     "age" : 30,
     "name": "Max",
     "subject" : ["science" , "biology"] 
    },
    {
     "id": "2",
     "age" : 20,
     "name": "John",
     "subject" : ["maths"] 
    }
   ] 
}
```
## Update Operations

a) `updateOne`: Update an existing record based on its `ID` and new data provided in the `update property` within the query.

```jsx title="updateOne"
{

  "container": "student",
  "id": "1", 
   "update": {
       "age": 25
   }
}
```
b) `updateMany`: Update multiple records based on `filter property` and new data provided in the `update property` within the query.

```jsx title="updateMany"
{

  "container": "student",    
  "filter": {
     "subject" :  {
       "@in": ["maths" , "biology"] ,
     } 
    }, 
   "update": {
       "department": 'Science'
   }
}
```

## Delete Operations

a) `deleteOne`: Delete a single record by its `ID`.


```jsx title="deleteOne"
{

  "container": "student",  
  "id": "1",
}
```

b) `deleteMany`: Delete multiple records based on specific criteria using `filter property`.


```jsx title="deleteMany"
{

  "container": "student",   
  "filter":{
    "age" : {
        "@gt": 20, 
    }  
    }
}
```