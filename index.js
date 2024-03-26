const fs = require("fs");
const express = require('express');
const app = express ();
app.use(express.json());
const PORT = process.env.PORT || 2540;
if (!fs.existsSync('./cache')) fs.mkdirSync('./cache')
const axios = require('axios');

app.post('/webhook', async(request, response) => {
    console.log(request.body)
    console.log(request.query)
})

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});