# 🌍 Tourist Website

A dynamic and responsive website built for showcasing tourism-related content including destinations, packages, and contact information. Built using **HTML, CSS, Bootstrap, JavaScript, Node.js, Express, and SQLite**.

---

## 📌 Features

- 🏠 Home page with scenic visuals and welcome text  
- 🧭 About Us section describing the tourism agency   
- 📦 Tour Packages with itinerary details  
- 📅 tour Booking or Travel Enquiry (if applicable)  
- 📞 Contact Us form with backend handling  
- 💬 Flash messages and server-side validation  
- 💾 SQLite database for storing user/tour info  
- 🎨 Fully responsive using Bootstrap 5

---

## 🛠 Tech Stack

| Technology     | Purpose                             |
|----------------|--------------------------------------|
| HTML / CSS     | Frontend page structure & styling    |
| Bootstrap      | Responsive layout                    |
| JavaScript     | Basic interactivity                  |
| Node.js        | Backend runtime environment          |
| Express.js     | Server-side routing and logic        |
| SQLite         | Lightweight database (bookings.db)   |
| EJS            | Templating engine for dynamic views  |




## 📂 Folder Structure

```bash
tourist-website/
│
├── app.js                    # Main Express server
├── package.json              # Project metadata and dependencies
├── package-lock.json
├── .gitignore
│
├── database/
│   └── bookings.db           # SQLite database file
│
├── node_modules/             # Installed NPM dependencies (optional in README)
│
├── public/                   # Static CSS files
│   ├── about.css
│   ├── ckm.css
│   ├── contact.css
│   ├── coorg.css
│   ├── crn.css
│   ├── index.css
│   ├── mangalore.css
│   ├── mysore.css
│   ├── shivamogga.css
│   ├── style.css
│   ├── udupi.css
│   └── vijaynagar.css
│
├── views/                    # EJS template files
│   ├── index.ejs
│   ├── about.ejs
│   ├── contact.ejs
│   ├── admin.ejs
│   ├── home-success.ejs
│   ├── success.ejs
│   ├── coorg.ejs
│   ├── crn.ejs
│   ├── mangalore.ejs
│   ├── mysore.ejs
│   ├── shivamogga.ejs
│   ├── udupi.ejs
│   ├── vijayanagar.ejs
│   ├── chikkamagalur.ejs
│   └── partials/
│       ├── footer.ejs
│       └── navbar.ejs
│
└── README.md                # This file