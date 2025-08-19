---
layout: post
title: "The Making of a Scalable URL Shortener"
date: 2024-01-16 10:00:00 +0800
categories: [backend, architecture, scalability]
tags: [system-design, scalability, microservices, performance]
---

Building a URL shortener might seem straightforward at first glance, but creating one that can handle millions of requests per second while maintaining reliability and performance presents fascinating engineering challenges.

## System Requirements

Before diving into the architecture, let's define what we're building:

- **Functional Requirements**
  - Shorten long URLs to compact aliases
  - Redirect short URLs to original destinations
  - Custom aliases for branded links
  - Analytics and click tracking

- **Non-Functional Requirements**
  - Handle 100M URLs shortened per day
  - 100:1 read-to-write ratio
  - 99.9% availability
  - Sub-100ms response times

## Architecture Overview

The system follows a microservices architecture with these key components:

### URL Encoding Service
The heart of the system uses a base62 encoding strategy:

```python
def encode_url(id):
    chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    base = len(chars)
    result = ""
    
    while id > 0:
        result = chars[id % base] + result
        id = id // base
    
    return result
```

### Database Design

We use a hybrid approach:
- **MySQL** for metadata and analytics
- **Redis** for caching frequently accessed URLs
- **Cassandra** for click event storage

### Caching Strategy

Multi-level caching ensures optimal performance:

1. **Application cache** for hot URLs
2. **CDN** for geographic distribution  
3. **Database query cache** for analytics

## Scaling Challenges

### Database Sharding
With billions of URLs, we partition data using consistent hashing based on the short URL key.

### Rate Limiting
Implemented using a sliding window algorithm to prevent abuse while allowing legitimate burst traffic.

### Global Distribution
Multiple data centers with eventual consistency for writes and strong consistency for reads within regions.

## Lessons Learned

Building this system taught valuable lessons about:

- **Premature optimization** can be costly - start simple and measure
- **Monitoring is crucial** - you can't improve what you don't measure
- **Graceful degradation** - the system should degrade gracefully under load
- **Data consistency** - eventual consistency is often sufficient for user-facing features

The URL shortener now processes over 50 million requests daily with 99.95% uptime, proving that thoughtful architecture and iterative optimization can handle massive scale. 