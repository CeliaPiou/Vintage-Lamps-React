const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectMongoDB = require('./config/dbMongo');
const ENV = require('./config/env');
const app = express();


/// IMPORT ROUTER
const userRouter = require('./router/user.router')
const articleRouter = require('./router/article.router')
const orderRouter = require('./router/orders.router')
const avisRouter = require('./router/avis.router')
const categoryRouter = require('./router/category.router.js')


/// CONNEXION MONGO
connectMongoDB(ENV.MONGO_URI, ENV.DB_NAME);


/// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true}
));


/// URLS API PREFIX
app.use('/lv/users', userRouter);
app.use('/lv/articles', articleRouter);
app.use('/lv/orders', orderRouter);
app.use('/lv/avis', avisRouter);
app.use('/lv/category', categoryRouter)



/// MIDDLEWARES DE GESTION D'ERREURS
app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || "Une erreur est survenue";
    const details = error.details || null;

    res.status(status).json({
        error: {
            status,
            message,
            details
        }
    })
});


module.exports = app;
