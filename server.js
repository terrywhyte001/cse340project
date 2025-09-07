// server.js
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const path = require("path")

const app = express()

// Set view engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// Middleware
app.use(expressLayouts)
app.use(express.static(path.join(__dirname, "public")))

// Routes
app.get("/", (req, res) => {
  res.render("index", { 
    title: "Home Page"  // 👈 Passes to <%= title %>
  })
})

// Use PORT from environment (Render) or fallback to 3000
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})


