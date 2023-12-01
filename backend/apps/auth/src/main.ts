// Imports
import dotenv from 'dotenv';
import colors from 'colors';
import express from 'express';

// Load env variables
dotenv.config();

// Enable use of colors on the CLI
colors.enable();

// Initialize expres app
const app = express();

// Routes
app.get('/', (req, res) => {
  res.send({ success: true, message: 'Hi there!' });
});

// Define the port to run the server
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`.yellow);
});
