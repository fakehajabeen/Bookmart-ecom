const express = require('express');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./routes');

const app = express();
const PORT = process.env.PORT || 8080; // Default port 8080 if not defined in .env

app.use(cookieParser());
app.use(express.json());

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/bookstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.use('/api', router);

app.get('/', (req, res) => {
    res.send("Hello from Vercel backend!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;











// const express = require('express');
// const cors = require('cors');
// //const connectDB = require('./config/db');
// const router = require('./routes');
// require('dotenv').config();
// const cookieParser = require('cookie-parser');
// const mongoose = require('mongoose');

// const app = express();
// app.use(cookieParser());
// app.use(express.json());

// app.use(cors({
//     origin : process.env.FRONTEND_URL,
//     credentials : true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
// }))

// // app.use(cors({
// //     origin: "https://mern-book-ecom-og7b.vercel.app",
// //     credentials: true,
// //     methods: ['GET', 'POST', 'PUT', 'DELETE'],
// //     allowedHeaders: ['Content-Type', 'Authorization'],
// // }));

// require('./config/db');
// app.use('/api', router);
// //const PORT =  8080;
//    mongoose.connect('mongodb://127.0.0.1/bookstore')          
// // connectDB()
// //     .then(() => {
// //         app.listen(PORT, () => {
// //             console.log(`Server is running on port ${PORT}`);
// //             console.log('Connected to the database');
// //         });
// //     })
// //     .catch((err) => {
// //         console.error('Error connecting to the database:', err);
// //     });


// app.get('/', (req, res) => {
//     res.send("Hello from Vercel backend!");
// });

// module.exports = app;
