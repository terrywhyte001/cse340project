/* ******************************************
 * server.js
 * Main server file for the CSE341 project
 ******************************************/

/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const dotenv = require("dotenv")
const path = require("path")
const expressLayouts = require("express-ejs-layouts")

dotenv.config()
const app = express()

/* ***********************
 * Middleware
 *************************/
// Serve static files (CSS, JS, images) from "public"
app.use(express.static(path.join(__dirname, "public")))
app.use(expressLayouts)

/* ***********************
 * View Engine Setup
 *************************/
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.set("layout", "layouts/layout") // main layout (wraps index.ejs + partials)

/* ***********************
 * Routes
 *************************/
// Home route → renders index.ejs inside layout
app.get("/", (req, res) => {
  res.render("index", { title: "Home" })
})

// Example API route (assignment placeholder)
app.get("/contacts", (req, res) => {
  res.json({ message: "Contacts API coming soon!" })
})

/* ***********************
 * Server Startup
 *************************/
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
})

