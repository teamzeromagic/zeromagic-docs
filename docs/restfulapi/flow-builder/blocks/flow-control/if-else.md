---
sidebar_position: 1
title: 'If Else'
description: Learn to about If Else! 
sidebar_label: If Else
---

# If Else
The If-Else Block component provides conditional branching within your application's logic flow. It allows you to execute different code sections based on the evaluation of a specified condition


### Branch Selection: 
Based on the outcome of the condition evaluation (True or False), the corresponding code block within the If-Else Block is executed.

**True Branch**: If the condition evaluates to True, the code within the True block (if present) is executed.

**False Branch**: If the condition evaluates to False, the code within the False block (if present) is executed.

### Multiple Conditions and Grouping

The Multiple Conditions and Grouping feature enables to create intricate logical statements by evaluating multiple conditions within a single action.

**Connecting Conditions**: Conditions can be connected using 'AND' or 'OR' operators to specify how the conditions relate to each other

**Grouping Conditions:** Groups can contain nested conditions, enabling the creation of layered logic statements similar to combining multiple 'if' statements. 

### Condition Editor

Conditions are built using an intuitive graphical interface, allowing users to select variables, comparison operators, and corresponding values. The supported operators for constructing these conditions include:

- Equals / Does not equal
- Greater than / Greater than or equal
- Less than / Less than or equal
- Contains
- In / Not In
- Starts with

###  Data Types

Both the left-hand side and right-hand side support a variety of data types, including:

- Booleans (true, false)
- Strings
- Numbers
- Dates
- Variables (indicated with double curly braces: `{{myVar}}`)
- Null / Undefined (null)

### Return Value

`val` - Returns the result of the condition evaluation, indicating whether the condition evaluated to true or false.

:::warning Deleting If Else Block

Deleting If-Else block will delete the entire flow connected to the block. 

:::
