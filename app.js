const express = require('express');

const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

const todosRoute = require('./routes/todos');


app.use(bodyParser.json());
app.use('/todos', todosRoute);

app.get('/', (req, res) => {
    res.send('i go before you');
});
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true},
    ()=> 
    console.log('connected')
    );
app.listen(3000);