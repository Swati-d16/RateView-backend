
# Local Business Dashboard - Backend API

This is the backend API server for the Local Business Dashboard project. It simulates Google Business data and provides AI-generated SEO headlines for local businesses.

## Features

- **Business Data Simulation**: Generates realistic Google Business metrics (ratings, reviews)
- **SEO Headline Generation**: Provides AI-like SEO headlines from a curated list
- **CORS Enabled**: Allows frontend integration from different origins
- **Error Handling**: Comprehensive error handling and validation
- **RESTful API**: Clean and well-structured API endpoints

## API Endpoints

### POST /business-data
Submit business information to get simulated analytics data.

**Request Body:**
```json
{
  "name": "Joe's Pizza Palace",
  "location": "New York, NY"
}
```

**Response:**
```json
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Best Local Business in Your Area - Trusted by Thousands",
  "businessName": "Joe's Pizza Palace",
  "businessLocation": "New York, NY",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### GET /regenerate-headline
Generate a new SEO headline for the business.

**Query Parameters:**
- `name`: Business name (optional)
- `location`: Business location (optional)

**Response:**
```json
{
  "headline": "Your Neighborhood's #1 Choice for Quality and Value",
  "timestamp": "2024-01-15T10:35:00.000Z"
}
```

### GET /health
Health check endpoint to verify the API is running.

**Response:**
```json
{
  "status": "OK",
  "message": "Local Business Dashboard API is running",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

## Setup Instructions

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   Or for production:
   ```bash
   npm start
   ```

4. **Verify the server is running:**
   Open your browser and go to `http://localhost:3001/health`

The API will be available at `http://localhost:3001`

## Project Structure

```
backend/
├── server.js          # Main server file with all endpoints
├── package.json       # Dependencies and scripts
└── README.md         # This file
```

## Configuration

The server runs on port **3001** by default. The frontend is configured to connect to this port.

## CORS Configuration

CORS is enabled for all origins to allow the frontend to make requests. In production, you should configure this to only allow specific domains.

## Error Handling

The API includes comprehensive error handling:
- Input validation for required fields
- Proper HTTP status codes
- Detailed error messages
- Server error logging

## Development

To run the server in development mode with auto-restart:

```bash
npm run dev
```

This uses nodemon to automatically restart the server when files change.
