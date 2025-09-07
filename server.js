/* ******************************************
 * server.js
 * Main server file for the CSE341 project
 ******************************************/

/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const env = require("dotenv").config()
const expressLayouts = require("express-ejs-layouts")
const path = require("path")

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

/* ***********************
 * Routes
 *************************/
// Root route → renders index.ejs
app.get("/", (req, res) => {
  res.render("index", { title: "Home" })
})

// Example API route (you can add your contacts here later)
app.get("/contacts", (req, res) => {
  res.json({ message: "Contacts API coming soon!" })
})

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT || 3000
const host = process.env.HOST || "localhost"

/* ***********************
 * Start Server
 *************************/
app.listen(port, () => {
  console.log(`App listening on ${host}:${port}`)
})
