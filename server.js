// const express = require('express');

const express = require('express');

const cors = require('cors');
const http = require('http');

const port = 3001;
// const  = require('request');

// let city = 'blaydon';

const application = express();

application.use(cors());
application.get("/:city", (req, res) => {
    const city = req.params.city;
    console.log(`The city is ${city}`);
    let apiKey = '64ed39adf1af589526c9d3f5f71cdb22';
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
    // req(url, function( error, result, body ) {
    //     if (error) {
    //         console.log('error: ', error );
    //     } else {
    //         console.log('body: ', body );
    //     }
    // });
});

application.listen( port, () => {
    console.log( `Server running on port ${port}` );
});

// const app = express();




// app.use(express.json());

