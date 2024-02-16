const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {PORT} = require('./config/server-config');

const prepareAndStartServer = () => {
    app.listen(PORT,  ()=> {
        console.log(`server started on port : ${PORT}`)
    })
}

prepareAndStartServer();