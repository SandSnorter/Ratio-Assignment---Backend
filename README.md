# Ratio Assignment - Content Moderation

This README document provides instructions for setting up and running the server application that utilizes the OpenAI API to moderate content. The server is built using Node.js and Express and requires several environment configurations to operate correctly.

## Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Running the Server](#running-the-server)
6. [Using the Moderation API](#using-the-moderation-api)
7. [Expected Results](#expected-results)
8. [Troubleshooting](#troubleshooting)

## Introduction
This project implements a simple server that moderates content using the OpenAI API. It receives text input via a POST request and returns a moderation result. The server is built in Node.js, using the Express framework.

## Prerequisites
To run this server, you will need:
- Node.js (v14.x or newer)
- npm (Node Package Manager)
- Access to OpenAI API (API key)
- Postman or a similar tool for sending HTTP requests

## Installation
Follow these steps to install the required dependencies:
1. Clone the Repository:
    ```bash
    git clone [repository-url]
    cd [project-folder]
    ```
2. Install Dependencies:
    ```bash
    npm install
    ```

## Configuration
Create a `.env` File: Create a `.env` file in the root directory of your project and add the following content:
```plaintext
OPENAI_API_KEY=your_openai_api_key_here
```

## Running the Server

To start the server, run the following command in your terminal:

```bash
  npm run dev
```
After running the command, you should see the following message indicating that the server is running successfully:

```bash
  Server is running on http://localhost:8000
```

## Using the Moderation API

### Sending a Moderation Request
Use Postman or any similar tool to send a POST request:
- URL: http://localhost:8000/
- Method: POST
- Body: JSON format
```json
{
  "input": "Text you want to moderate"
}
```

## Expected Results
After sending the POST request with the text, you should receive a JSON response from the server that includes the moderation results, such as the classifications of the content based on OpenAI's moderation models.

![blurr](https://github.com/SandSnorter/Ratio-Assignment-Backend/assets/121429638/4939360c-a607-493b-b744-4fa126a94cdb)

## Troubleshooting
In case of errors:
- Ensure that the OPENAI_API_KEY is correctly set in the `.env` file.
- Verify that all dependencies are correctly installed.
- Check the console for any error messages, which might give insights into what might be going wrong.
- For additional support, consult the OpenAI API documentation available [here](https://openai.com/docs/).

This setup guide ensures you have everything you need to get the moderation server up and running. Follow the steps carefully and validate each step to avoid common issues.
