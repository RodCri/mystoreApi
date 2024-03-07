const express = require('express');
const routerApi = require('./app/routes/index');

const app = express();
const port = 3000;

app.use(express.json());
routerApi(app)

app.listen(port, () =>{})
