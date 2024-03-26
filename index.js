const fs = require("fs");
const express = require('express');
const app = express ();
app.use(express.json());
const PORT = process.env.PORT || 2540;
if (!fs.existsSync('./cache')) fs.mkdirSync('./cache')
const axios = require('axios');

const { EmbedBuilder, WebhookClient } = require('discord.js');

app.post('/webhook', async(request, response) => {
    const id = request.query.id
    const token = request.query.auth
    const webhookClient = new WebhookClient({ id: id, token: token });
    webhookClient.send({
        content: request.body.content,
        embeds: request.body.embeds
    })
    response.send('OK')
})

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});