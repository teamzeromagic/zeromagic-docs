---
sidebar_position: 4
title: 'For Loop Items'
description: Learn to about For Loop Items! 
sidebar_label: For Loop Items
---

# For Loop Items

The Loop Items Block component empowers you to iterate through the elements of a collection (array, list, etc.) of items.

**Item:** This property allows you to define a variable name to represent the current item within each iteration. By default, the variable item is used.


It utilises the same branch system as the [For Loop](for-loop#branches).

### Accessing Value inside for loop

`val` - Returns an array containing the modified or filtered items based on the code executed within the _Continues Until True_ branch. If the collection is not modified, the original collection is returned.

To access a particular object from a collection(array of objects) you can access with the syntax below 

```jsx
{{$block-name.val.object-key}}
```

```jsx title="Example"
// sample collection
collections = [
    {
        name : "Rohith",
        age : 21
        city : "Chennai",
    },
    {
        name : "Revanth",
        age : 21
        city : "Banglore",
    },
    {
        name : "Aravind",
        age : 22
        city : "Mumbai",
    }
]

// access current object inside Forloop
// highlight-next-line
{{$forLoop.val.name}}

```

:::warning Deleting For Loop Items

Deleting For Loop Items block will delete the entire flow connected to the block. 

:::
