---
sidebar_position: 2
title: "Operators and Property"
description: Quick Introduction with Query Language Operators and Property!
sidebar_label: Operators and Property
---
Zeromagic introduces container, operators and properties, providing developers with a structured approach to perform operations on data containers and individual items within those containers. These properties enable efficient data manipulation and management within the Zeromagic platform.

## Filter Property

The filter property within your Zeromagic queries provides a versatile set of operators to refine your data access. Here's a breakdown of some commonly used operators:

```jsx
"filter" : {} // fetchs all records
    (or) 
"filter" : {
    ...props
}
```


### 1. Logical Operators

`@opr`: Combine multiple filter conditions using the logical AND (`and`) or OR (`or`) operators within this property.

```jsx
"@opr" : "and"
    (or)
"@opr" : "or"
```

### 2. Sorting Operators

`@sort`: Specify sorting criteria within this property. Define the key to sort by (`key`) and the desired order (`"order"`: `"asc"` for ascending, `"desc"` for descending).

```jsx
"@sort": { "key": "name", "order": "asc" }
    (or)
"@sort": { "key": "name", "order": "desc" }
```

### 3. Field Selection

`@fields`: Define a list of fields `["<field_1>", "<field_2>", "<field_3>"]` you want to retrieve from the records.

```jsx
"@fields" : ["id","name","price","status"],
```

### 4. Comparison Operators:

`@eq`: Exact equality check

```jsx
"name": { "@eq": "Max" }
```

`@ne`: Not equal check

```jsx
"name": { "@ne": "Max" }
```

`@gt`: Greater than comparison

```jsx
"price": { "@gt": 100 }
```

`@lt`: Less than comparison

```jsx
"price": { "@lt": 100 }
```

`@gte`: Greater than or equal to comparison.

```jsx
"price": { "@gte": 120 }
```

`@lte`: Less than or equal to comparison.

```jsx
"price": { "@lte": 120 }
```

### 5. String Matching:

`@contains`: Check if a string contains a specific substring.

```jsx
"name": { "@contains": "John Doe" }
```

`@startswith`: Check if a string starts with a specific prefix.

```jsx
"name": { "@startswith": "John" }
```

`@in`: Check if a value is within a provided list.

```jsx
"status": { "@in": ["active", "pending"] }
```

`@nin`: Check if a value is not within a provided list.

```jsx
"status": { "@nin": ["active", "pending"] }
```

### Sample Filter Query

```jsx title="Example"
{
"container" : "ecommerce",
"filter" : {
        "@opr" : "and",
        "@sort": { "key": "name", "order": "asc" },
        "@fields" : ["id","name","price" , "status"],
        "id": "1",
        "price": {
            "@gt": 20,
            "@lt": 20,
            "@gte": 20,
            "@lte": 20
        },
        "name" : {
            "@contains": "John Doe" ,
            "@startswith": "John", 
            "@eq": "Max",
            "@ne": "Max",
        },
        "status"  : {
       "@in": ["active", "pending"],
       "@nin": ["active", "pending"] 
        }
    } 
}
```


## Query Property

### 1. Container Property: (Required)

`container`: Specifies the name of the container on which the operation will be performed. This property allows developers to target specific data containers within their Zeromagic projects.

```jsx
"container" : "student"
```

### 2. Item Property: (Required for `createOne` method)

`item`: Represents a single item to be created within a data container. This property encapsulates the attributes and values of the item to be created, facilitating the creation of individual data records.

```jsx
    "item": {
      "name": "John Doe",
      "email": "john.doe@example.com"
    } // single item to create
```

### 3. Items Property: (Required for `createMany` method)

`items`: Contains an array of multiple items to be created within a data container. This property allows developers to create multiple data records simultaneously, streamlining the data creation process.

```jsx
    "items" : [

     {
      "name": "John Doe",
      "email": "john.doe@example.com"
    } , 
    {
      "name": "Max Well",
      "email": "max.well@example.com"
    }
    ]   // multiple item to create
```

### 4. Update Property: (Required for `updateOne` and `updateMany` method)

`update`: Defines the properties to be updated for a specific data record. This property specifies the attributes and new values to be applied to the selected record, enabling seamless data updates within Zeromagic containers.

```jsx
"update": {
    "name": "Steve"
    }
```
