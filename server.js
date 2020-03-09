const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use(cors());

app.get('/', (req, res) => {
    res.json({ "message": "welcome to node application" });
});

require('./main/routes/routes')(app);

app.listen(3001, () => {
    console.log("server is listenling on port 3001");
});