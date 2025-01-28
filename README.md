# News Aggregator App

## Project Overview

The News Aggregator App is a web application that fetches and displays the latest news from various categories. It uses React for the frontend and a Node.js backend to handle API requests.

## Features

- **Category-Based News**: Users can filter news articles by category.
- **Search Functionality**: Users can search for news articles based on keywords.
- **Responsive Design**: The application is designed to work seamlessly across different devices.
- **Google Analytics**: Integrated to track user interactions.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher)
- **Firebase Account**: Create a Firebase project.
- **News API Key**: Obtain an API key from [NewsAPI.org](https://newsapi.org/).

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/rijughosh01/newsaggregatorapp
   cd newsaggregatorapp

   ```

2. **Install Dependencies**:

   npm install

3. **Create Environment Variables**:

   - Create a .env file in the root directory and add your API keys:
     REACT_APP_NEWS_API_KEY=your-api-key-here

4. **Firebase Setup**:

   - Ensure you have the Firebase CLI installed. If not, install it using npm:
     npm install -g firebase-tools

   - Log in to Firebase:
     firebase login

   - Initialize Firebase in your project:
     firebase init

## Running the Application

**Development**

- To run the application in development mode, use the following command:
          npm start

## Deployment

- To deploy the application to Firebase Hosting, use the following command:
        firebase deploy

## License

- This project is licensed under the MIT License.

## Contact

**For any inquiries, please contact**:

- Pritam Ghosh

- Email: pg4009355@gmail.com

- GitHub: https://github.com/rijughosh01
