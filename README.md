# Retrometroid

This repository contains the Retrometroid application built using **Node.js**, **Next.js**, and **MongoDB**, orchestrated with Docker Compose.

## Prerequisites

Before you begin, ensure you have met the following requirements:

You have installed Docker and Docker Compose.

## Getting Started

To get started with the project, follow these steps:

Clone this repository to your local machine

Navigate to the project directory

## Environment Variables

In the backend directory, create the `.env` file by duplicating the `.env.sample` file and insert keys. Once it's done, you can do the same in the frontend directory.

## Installation

Using Docker Compose
Start all containers (Next.js, Node.js server, and MongoDB database):

`docker-compose up -d`

Verify that the containers are running:

` docker-compose ps`

## Usage

Once the project is up and running, you can access the applications as follows:

Node.js API:
`http://localhost:3001`

Next.js Application:
`http://localhost:3000`

MongoDB:
`mongodb://localhost:27017`

## Documentation

**Swagger API** Documentation
The API documentation is available and interactive thanks to Swagger. You can access it at:

`http://localhost:3001/api-docs`

## Running Tests

The project includes a suite of tests to ensure its correctness. To run the tests, execute:

```
cd retrometroid/backend
npm run test
```
