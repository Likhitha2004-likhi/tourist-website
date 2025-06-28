const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();


// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files (like CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

// Connect to SQLite DB
const db = new sqlite3.Database('./database/bookings.db');

// Create table if not exists
db.run(`
  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    phone TEXT,
    adults INTEGER,
    children INTEGER,
    date TEXT,
    ac TEXT,
    service TEXT
  )
`);


// Routes for all pages
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/mysore', (req, res) => res.render('mysore'));
app.get('/coorg', (req, res) => res.render('coorg'));
app.get('/chikmagalur', (req, res) => res.render('chikkamagalur'));

app.get('/shivamogga', (req, res) => res.render('shivamogga'));
app.get('/crn', (req, res) => res.render('crn'));
app.get('/mangalore', (req, res) => res.render('mangalore'));
app.get('/udupi', (req, res) => res.render('udupi'));
app.get('/vijayanagar', (req, res) => res.render('vijayanagar'));

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});




app.post('/submit', (req, res) => {
  const { name, email, phone, adults, children, date, ac, service } = req.body;

  db.run(
    `INSERT INTO bookings (name, email, phone, adults, children, date, ac, service)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [name, email, phone, adults, children, date, ac, service],
    function (err) {
      if (err) {
        return res.send('Error saving booking.');
      }

      res.render('success', { name, service });
    }
  );
});
app.post('/register-home', (req, res) => {
  const { name, phone, date, service } = req.body;

  // Insert NULL for missing values
  db.run(
    `INSERT INTO bookings (name, email, phone, adults, children, date, ac, service)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [name, null, phone, null, null, date, null, service],
    function (err) {
      if (err) {
        return res.send('Error saving registration.');
      }

      res.render('home-success', { name, service });
    }
  );
});


app.get('/admin', (req, res) => {
  db.all('SELECT * FROM bookings ORDER BY id DESC', (err, rows) => {
    if (err) {
      return res.send('Error fetching bookings');
    }
    res.render('admin', { bookings: rows });
  });
});


app.post('/delete/:id', (req, res) => {
  const bookingId = req.params.id;
  db.run('DELETE FROM bookings WHERE id = ?', bookingId, function(err) {
    if (err) {
      return res.send('Error deleting booking.');
    }
    res.redirect('/admin'); // reload admin page
  });
});



// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
