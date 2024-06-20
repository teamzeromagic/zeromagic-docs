---
sidebar_position: 5
title: 'Switch Case'
description: Learn to about Switch Case! 
sidebar_label: Switch Case
---

# Switch Case

This property allows you to define conditions (cases) for branching. Similar to the expression editor, the implementation may offer visual tools or text input for creating conditions. 

It utilises the same condition syntax as the [If Conditions](/flow-builder/blocks/flow-control/if-else#condition-editor).

###  Branch Selection:

**New Branch:** The new case whose condition evaluates to True is identified. The code block associated with that case (if present) is executed.

**Default Branch:** If no case condition matches the expression value, and a default branch is defined using the default keyword, the code associated with the default branch is executed


### Return Value

`val` - Returns a value that can be compared to the evaluated expression.


:::info Important

If several conditions are met, only the first one in sequence will be executed.

:::

:::warning Deleting Switch Block

Deleting Switch block will delete the entire flow connected to the block. 

:::
