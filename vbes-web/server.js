const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8000
;

app.use(express.json());
app.use(express.static(path.join(__dirname, '/'))); // Serve index.html

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // ✅ In real apps: check credentials properly!
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required.' });
  }

  const loginsFile = path.join(__dirname, 'logins.json');

  // Load existing logins
  let logins = {};
  if (fs.existsSync(loginsFile)) {
    logins = JSON.parse(fs.readFileSync(loginsFile));
  }

  // Add new login time
  const loginTime = new Date().toISOString();
  if (!logins[username]) {
    logins[username] = [];
  }
  logins[username].push(loginTime);

  // Save back to file
  fs.writeFileSync(loginsFile, JSON.stringify(logins, null, 2));

  console.log(`User ${username} logged in at ${loginTime}`);
  res.json({ message: `Login successful at ${loginTime}` });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
