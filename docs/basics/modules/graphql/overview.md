---
sidebar_position: 1
title: 'Overview'
description: Learn to about GraphQL API! 
sidebar_label: Overview
---

# Overview

Zeromagic integrates seamlessly with **GraphQL**, a powerful query language that provides a superior approach for more efficient  data manipulation and developer-friendly experience.

## What is a GraphQL?

`GraphQL` is a relatively newer architectural style that provides an alternative to REST. It empowers developers to request the exact data they need from your platform in a single, efficient call. Unlike REST APIs that provide multiple predefined endpoints for data retrieval, GraphQL allows you to define exactly the data you need through a `query language`. This query language resembles writing a clear and concise request, specifying the desired data fields from your API. This approach can improve performance and reduce over-fetching or under-fetching of data. The flexible and decoupled nature of GraphQL aligns well with scalable application development.

![graphql-arch](@site/static/img/graphql-arch.png)

## Why GraphQL?

- **Precise Data Fetching:** With GraphQL, clients can request exactly the data they need, nothing more and nothing less. This reduces over-fetching and under-fetching of data, leading to more efficient API requests.

- **Flexible Data Structure:** GraphQL provides a strong type system that allows clients to specify the shape and structure of the data they expect in the response. 

- **Reduced Network Calls:** By combining data requests into a single GraphQL query, you can significantly reduce the number of network calls required to fetch all the necessary information

- **Single Endpoint:** Unlike REST APIs, which typically have multiple endpoints for different resources, GraphQL APIs have a single endpoint.

- **Real-time Updates:** GraphQL supports real-time updates through subscriptions, allowing clients to receive data in real-time as it changes on the server