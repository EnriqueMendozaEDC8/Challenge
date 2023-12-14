const express = require("express");
const cors = require('cors');

const creditCardRoutes = require('./creditCard');

const app = express();
const PORT = 5000;

app.use(cors());
app.use('/v1', creditCardRoutes);

app.get('/', function(req, res){
    res.send('Hello from backend')    
});

app.get('/health', function(req, res){
    res.send('We are ready')
});

app.listen(5000, () => {
  console.log(`Server started on port ${PORT}`);
});
