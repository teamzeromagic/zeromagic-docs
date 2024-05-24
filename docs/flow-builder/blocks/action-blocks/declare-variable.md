---
sidebar_position: 1
title: 'Declare Variable'
description: Learn to about Declare Variable! 
sidebar_label: Declare Variable
---

# Declare Variable

The Declare Variable block is used to define a variable within the workflow. A variable can be declared with one of five data types:

1. Text 
2. Number 
3. Boolean
4. List 
5. Time

Each datatype has certain properties that can be used. 


### Text  

Stores string data allowing you to create and manage string-based variables.

![text](@site/static/img/str-var.png)

The text datatype has the following properties that can be used.

<small>
| Operations         | Description             |
|-------------|------------------|
| Set    | Declare a string or Overwrite an existing string |
| Prepend      | Add string value at start |
| Append     | Add string value at end |
</small>

### Number   

Stores numerical data, representing quantities, counts, or measurements.

![number](@site/static/img/num-var.png)

The number datatype has the following properties that can be used.

<small>
| Operations         | Description             |
|-------------|------------------|
| Set    | Declare a number or Overwrite an existing number |
| Plus    | Add a value |
| Minus     | Subtract a value |
</small>

### Boolean 

Represents true or false values, often used for making conditional decisions or indicating states.

![boolean](@site/static/img/bool-var.png)

The boolean datatype has the following properties that can be used.

<small>
| Operations         | Description             |
|-------------|------------------|
| Set    | Declare a boolean or Overwrite an existing boolean |
</small>

### List  

Stores an ordered collection of items of `string` or `number` data type, ideal for managing multiple values.

![list](@site/static/img/list-var.png)

The list datatype has the following properties that can be used.

<small>
| Operations         | Description             |
|-------------|------------------|
| Set    | Declare a array or Overwrite an existing array |
| Prepend      | Add a value at start of list |
| Append     | Add a value at end of list |
</small>


### Time  

Stores specific points in time (e.g., dates, timestamps) or durations (e.g., hours, minutes).

![time](@site/static/img/time-var.png)

The time datatype has the following properties that can be used.

<small>
| Operations         | Description             |
|-------------|------------------|
| Set    | Declare a time value or Overwrite an existing time value |
</small>


:::tip Information

[Check here](/variables/environment-variables/) to learn about how to access the variables inside the workflow.

:::