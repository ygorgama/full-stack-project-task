const express = require('express');
const countriesRouter = require('./routes/countries');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/api/countries", countriesRouter);

module.exports = app;