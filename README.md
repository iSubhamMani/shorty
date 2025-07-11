# Shorty

Shorty is a simple URL shortener service built using **AWS Lambda**, **API Gateway**, **DynamoDB**, and the **Serverless Framework**.

## Features

- Shorten long URLs to compact, shareable links
- Redirect users to the original URL
- Serverless architecture for scalability and low cost

## Tech Stack

- **AWS Lambda**: Handles URL creation and redirection logic
- **API Gateway**: Exposes RESTful endpoints
- **DynamoDB**: Stores URL mappings
- **Serverless Framework**: Simplifies deployment and infrastructure management
- **Next.Js**: For the client app

## Getting Started

1. Clone the repository
2. Navigate to backend folder: `cd backend`
3. Install dependencies: `npm install`
4. Deploy with Serverless: `serverless deploy`

## Usage

- `POST /shorten` – Create a short URL
- `GET /{shortCode}` – Redirect to the original URL
