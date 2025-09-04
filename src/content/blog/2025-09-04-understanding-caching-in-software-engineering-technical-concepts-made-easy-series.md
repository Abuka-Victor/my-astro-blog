---
author: Victor Abuka
pubDatetime: 2025-09-04
modDatetime: 2025-09-04
title: "Understanding Caching in Software Engineering: Technical Concepts Made
  Easy Series"
slug: understanding-caching-in-software-engineering
featured: true
draft: false
description: Ever wonder why some websites and applications load in the blink of
  an eye? The secret is caching, a powerful software engineering technique that
  dramatically speeds up data delivery.  This article uses a simple librarian
  analogy to demystify caching, explaining how it works and why it's essential
  for building high-performance systems. You'll explore different approaches,
  from client-side caching in your browser to powerful server-side techniques.
  Dive in to learn about spatial, temporal, and distributed caching, and unlock
  the secrets to making your software perform at its absolute best.
---
This was originally posted on my \[Dev.to\]([https://dev.to/abukavictor/understanding-caching-in-software-engineering-technical-concepts-made-easy-series-530p](https://dev.to/abukavictor/understanding-caching-in-software-engineering-technical-concepts-made-easy-series-530p))  
  
Have you ever wondered why some websites and applications load so much faster than others? The answer lies in caching, a technique used in software engineering to speed up the delivery of data and resources. In this article, we'll explore caching in detail, with a focus on the techniques used in caching data within a computer system.

**What is Caching?**

Caching is the process of storing frequently accessed data in a temporary storage location called a cache. When a user requests data or resources, the system checks the cache first to see if it's already there. If it is, the data is served from the cache, eliminating the need to retrieve it from the original source. This results in faster load times and improved performance.

To visualise this, imagine you're a librarian and somebody comes to you asking for a popular book. Instead of going to the shelves and retrieving the book every time someone requests it, you keep a few copies behind the counter and when someone asks for the book, you check behind the counter first to see if it's available. If it is, you hand it over, saving time and effort.

**Types of Caching**

There are different ways to classify caching. One way you can classify them is based on whether the data is saved on the client-side or on the server-side:

\> client-side and server-side caching.

Client-side caching is when the cache is stored on the user's device, such as in their web browser. Often used for static resources like images, CSS, and JavaScript files. Server-side caching is when the cache is stored on the server. Used for dynamic data that changes frequently, such as database queries or API responses.

Furthermore, another way to classify caching is based on the technique used when caching. In order words, here we are interested in how exactly the caching is done. In this article, we will discuss three major types. They are spatial caching, temporal caching and distributed caching.

**Spatial Caching**

When I teach I usually refer to this as regional caching because it feels more in line with the meaning. Here a section of related data is cached. I know that doesn’t sound very explanatory but lets look at it this way.

Imagine I run a big store in Nigeria called WindowMart, we sell all sorts of things. We also happen to have good data analysts and from our data we found that customers from places like Ondo, Osun and Ogun buy farming tools the most. Hence we made a decision to supply our branches in those regions with more things like treated seeds and fertilisers.

Let’s bring this to our computer system, so basically when Mr Code goes to fetch info from the database he looks around him and says “hmm I think they’ll probably need these too” and he takes it into the cache. In other words, a section of related data is cached.

So how is this applicable to building the fast and performant systems you intend to build? Good question. Storing related data in CDNs (Content Delivery Network) can reduce latency and improve the performance of your product. Note that although this form of caching is very useful, it is mostly data driven.

**Temporal Caching**

This type of caching involves storing data or resources for a specific period of time. For example, a web browser may cache a webpage for a few hours or days, so that it loads faster the next time the user visits it. This caching is based on how often those pieces of data are used. Temporal caching is usually implemented in levels with the highest level containing pieces of data that are the most frequently used and the lowest level containing those that are less frequently requested. It goes without saying that the higher levels will be the fastest in terms of access time and the lower levels will take longer time to access the data contained.

**Distributed Caching**

Just as the name implies, this type of cache exactly mirrors the database. It involves storing data or resources in multiple caches, which are spread across different locations or servers. This allows the system to handle a larger volume of requests and reduces the risk of a single point of failure.

There are a lot of different implementations of a distributed cache. Amazon does it one way and Microsoft does it another. One implementation is called the write-through method. In this method, data is written through the cache to the database. To put it simply, you write data to the cache first and then write the same data to the database. Of course you will need to use your ninja software engineering skills to determine a way to make these transactions ACID. 

Conclusively, caching is an essential technique for improving the performance of websites and applications. By storing frequently accessed data and resources in a cache, the system can deliver them faster, resulting in a better user experience. I really hope this article has helped you understand caching in software engineering. Whether it's spatial, temporal or distributed caching, choose a technique that fits your problem so your software can perform at its best. It is also very possible to have a hybrid of these different techniques. That’s all for now, till next time. Happy Hacking!