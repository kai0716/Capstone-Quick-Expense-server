const express = require('express');
const cors = require('cors'); // cors package prevents CORS errors when using client side API calls
const helmet = require('helmet'); // Add http headers, small layer of security
const knex = require('knex')(require('./knexfile.js')); // Knex instance
const app = express();
const PORT = process.env.PORT || 5050;

const expenseRoute = require('./routes/expense');
const incomeRoute = require('./routes/income');
const userRoute = require('./routes/user');
const categoryRoute = require('./routes/category');
// Require .env files for environment variables (keys and secrets)

require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded())

app.use((req, res, next) => {
    next();
});
app.use('/expense', expenseRoute);
app.use('/income', incomeRoute);
app.use('/category', categoryRoute);
app.use('/users', userRoute);


app.get("/", (req, res) => {
    res.send("server is running");
});



app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}.`);
});