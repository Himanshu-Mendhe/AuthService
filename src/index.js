const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const apiRoutes = require('./routes/index');
const {PORT} = require('./config/server-config');

//const {User} = require('./models/index');
//const bcrypt = require('bcrypt');

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
 
    app.use('/api', apiRoutes);
 
    app.listen(PORT, async()=> {
        console.log(`server started on port : ${PORT}`);
        /*
        const incomingPassword = 'canBeAnything';
        const user = await User.findByPk(5);
        const response = bcrypt.compareSync(incomingPassword, user.password);
        console.log(response);
        */
    })
};

prepareAndStartServer();