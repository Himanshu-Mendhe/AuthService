const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const apiRoutes = require('./routes/index');
const {PORT} = require('./config/server-config');

const db = require('./models/index'); 

//const {User} = require('./models/index');
//const bcrypt = require('bcrypt');

//const UserService = require('./services/user-service'); 


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
       /*
       const service = new UserService();
       //const newToken = service.createToken({email:'admin@admin.com',id:'6'});
       //console.log((`new token is ${newToken}`));
       const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlkIjoiNiIsImlhdCI6MTcwODE1MTA1OSwiZXhwIjoxNzA4MTUxMDY5fQ.bRJQ4HIAF67FgEGgxLBTKefyNFUQje61QJYwgXHwVyw'
       const response = service.verifyToken(token);
       console.log(response);
       */
       /*
       if (process.env.DB_SYNC) {
        db.sequelize.sync({alter:true});
       }
       */
    })
};

prepareAndStartServer();