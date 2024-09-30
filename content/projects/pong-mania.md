---
title: "Pong-Mania"
description: "A fun, engaging multiplayer experience using WebSockets."
author: "Angel Dhakal"
date: "2024-09-29T13:50:00Z"
alt: "Pong Mania"
image: "/images/pong-mania-main.svg"
tags: ["Golang", "HTMX", "WebSockets", "AWS", "PostgreSQL", "CircleCI", "Docker"]
categories: ["Application", "Real Time", "Game"]
demoUrl: "https://pongmania.com"
info_url: "/projects/pong-mania"
sourceCodeUrl: "https://github.com/andy4747/pong-mania"
draft: false
---

## Pong-Mania: A Realtime Multiplayer Classic

In 2024, I embarked on an exciting journey to recreate the classic Pong game, but with a modern twist: **real-time multiplayer**. Pong-Mania leverages modern technologies like **Golang**, **HTMX**, and **WebSockets** to deliver a seamless multiplayer experience where players from around the world can compete against each other in real time.

### The Challenge

The idea behind Pong-Mania was not just to create a simple Pong game but to build a scalable, responsive multiplayer version where the game state is synchronized in real time across multiple players. I used **WebSockets** for continuous bi-directional communication between the client and the server, ensuring that every movement and action was reflected instantly.

### Deployment & Cloud Infrastructure

One of the most critical aspects of developing a multiplayer game is ensuring that the server can handle multiple game rooms and players simultaneously. For this, I deployed the application on **AWS EC2**, providing both high availability and scalability to handle fluctuating traffic. To manage the infrastructure, I used **Terraform**, ensuring that the AWS cloud resources were efficiently provisioned and easily maintainable.

### Authentication & Game Logic

Pong-Mania also features a custom login system that combines **magic link authentication** using **AWS SES** and OAuth2 with Google for secure user sign-ins. Each game room operates in its own **Goroutine**, optimizing concurrency for a smooth user experience. Additionally, I designed a **PostgreSQL trigger function** to dynamically determine game winners based on real-time game data, automating game result management.

### Continuous Delivery & Deployment

To ensure that every new feature or bug fix was rapidly deployed without downtime, I integrated **CircleCI** for continuous integration and deployment. The CI/CD pipeline automates the entire deployment process, pushing production-ready Docker images to a private **Docker Hub** registry.

Pong-Mania is more than just a game—it's a real-time experience powered by modern technology. You can [check out the game here](https://yourliveappurl.com/pong-mania) or explore the [codebase on GitHub](https://github.com/yourusername/pong-mania).

---

## Key Takeaways:
- Real-time synchronization using **WebSockets**.
- **Goroutines** for efficient game room management.
- **AWS EC2** and **Terraform** for scalable cloud deployment.
- **Magic link authentication** with **AWS SES** and OAuth2 integration.

[Play Pong-Mania Now](https://pongmania.com/)
