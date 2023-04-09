const express = require('express');
const app = express();

// Middleware to restrict access during non-working hours
app.use((req, res, next) => {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)
  const hourOfDay = now.getHours(); // 0 to 23

  // Check if it's a working day (Monday to Friday) and within working hours (9 to 17)
  if (dayOfWeek > 0 && dayOfWeek < 6 && hourOfDay >= 9 && hourOfDay < 17) {
    next(); // Allow access to the routes below
  } else {
    res.send('Sorry, the web application is only available during working hours (Monday to Friday, from 9 to 17).');
  }
});

// Route for Home page
app.get('/', (req, res) => {
  res.send('<h1>Home page</h1><p>Welcome to our website!</p>');
});

// Route for Our Services page
app.get('/our-services', (req, res) => {
  res.send('<h1>Our Services page</h1><p>Here are our services:</p><ul><li>Service 1</li><li>Service 2</li><li>Service 3</li></ul>');
});

// Route for Contact Us page
app.get('/contact-us', (req, res) => {
  res.send('<h1>Contact Us page</h1><p>Contact us at email@example.com or call us at +1234567890.</p>');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Web application is running on http://localhost:3000');
});
