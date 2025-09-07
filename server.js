/* ******************************************
 * server.js
 * Main server file
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
// Serve static files (CSS, images, JS) from "public"
app.use(express.static(path.join(__dirname, "public")))
app.use(expressLayouts)

/* ***********************
 * View Engine Setup
 *************************/
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.set("layout", "./layouts/layout")  // 👈 put this right after views setup

/* ***********************
 * Routes
 *************************/
// Root route → renders index.ejs inside layout.ejs
app.get("/", (req, res) => {
  res.render("index", { title: "Home" })
})

// Example API route (not required but good to keep)
app.get("/contacts", (req, res) => {
  res.json({ message: "Contacts API coming soon!" })
})

/* ***********************
 * Server Startup
 *************************/
const port = process.env.PORT || 5500
const host = process.env.HOST || "localhost"

app.listen(port, () => {
  console.log(`App listening on ${host}:${port}`)
})

