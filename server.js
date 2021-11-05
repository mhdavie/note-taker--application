const express = require('express')
const api = require('./routes/api.js')
const html = require('./routes/html.js')

const app = express();
const PORT = process.env.PORT || 3001; 
// (dotenv) should be installed

app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(express.static('public'));
app.use('/api', api);
app.use('/', html);
app.listen( PORT, () =>console.log(`Listening to PORT: ${PORT}`));
