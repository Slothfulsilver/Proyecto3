const express = require('express')
const app = express();
const https = require('https');
const axios = require("axios");

app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static('public'));