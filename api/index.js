const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const board = require('./routes/board')

// Import API Routes
app.use(board)

// Export the server middleware
module.exports = {
  path: '/api/v1',
  handler: app
}
