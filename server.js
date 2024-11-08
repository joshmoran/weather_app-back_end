// const express = require('express');

const express = require('express');
const cors = require('cors');
const http = require('http');
const application = express();
application.use(cors());

require('dotenv').config();

const PORT = process.env.PORT;

application.get("/:city", (req, res) => {
    const city = req.params.city;
    console.log(`The city is ${city}`);
    let apiKey = process.env.API_KEY;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    data = '';

    http.get( url, (response) => {
        response.setEncoding('utf8');
        response.on('data', (chunk) => {
          data += chunk;
        });
    
        response.on('end', () => {
          res.send(data);
        });
      });
});

application.listen( PORT, () => {
    console.log( `Server running on port ${PORT}` );
});
