const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());              
app.use(express.json());    

const users = []; // SToring new users in array

// Login endpoint api
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email && user.password === password);

  if(user) {
    return res.json({
      success: true,
      message: "Login successful"
    });
      
  } else {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password!"
    });
  }

  const VALID_EMAIL = "admin@example.com";
  const VALID_PASSWORD = "admin123";

  if (email === VALID_EMAIL && password === VALID_PASSWORD) {
    res.json({
      success: true,
      message: "Login successful"
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Invalid email or password"
    });
  }
});

// Signup endpoint api
app.post("/api/signup", (req, res) => {
  const { name, email, password, confirmPassword } = req.body; 

  //validation
if(!name || !email || !password) {
  return res.status(400).json(
    {
      success:false,
      message: "All fields are required!"
    }
  );
}

if(password != confirmPassword) {
  return res.status(400).json({
    success:false,
    message: "Passwords do not match!"
  })
}

  const userExists = users.find(user => user.email === email);
  if (userExists) {
    return res.status(400).json({
      success: false,
      message: "User already exists"
    });
  }

  //if new user then store it in array 
  users.push({ name, email, password });

  res.json({
    success: true,
    message: "Signup successful"
  });

});
// student false api 
app.get("/api/students", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Soham Mokashi",
      age: 18,
      course: "Computer Science",
      submission: "Submitted"
    },
    {
      id: 2,
      name: "Krishna Ghoman",
      age: 22,
      course: "Computer Science",
      submission: "Pending"
    },
    {
      id: 3,
      name: "Digvijay Ekade",
      age: 24,
      course: "Electronics",
      submission: "Submitted"
    },
    {
      id: 4,
      name: "Pramod",
      age: 24,
      course: "Computer Science",
      submission: "Submitted"
    }
  ]);
});


// Test endpoint
app.get("/", (req, res) => {
  res.send("Hello, Soham!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});