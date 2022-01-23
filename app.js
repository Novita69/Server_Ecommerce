require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./api/users/user.router');

// function auth(req, res, next) {
//     console.log(req.headers);
//     var authHeader = req.headers.authorization;

//     if (!authHeader) {
//         var err = new Error('You are not authenticated');
//         res.setHeader('WWW-Authenticated', 'Basic');
//         err.status = 401;
//         return next(err);

//     }

//     var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
//     var username = auth[0];
//     var password = auth[1];

//     if (username === 'admin' && password === 'password') {
//         next();
//     }
//     else {
//         var err = new Error('You are not authenticated');
//         res.setHeader('WWW-Authenticated', 'Basic');
//         err.status = 401;
//         return next(err);
//     }
// }

// app.use(auth);

// app.use(auth);

app.use(express.json());

app.use('/api/users', userRouter);
app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running on PORT : ', process.env.APP_PORT);
});