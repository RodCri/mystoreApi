const express = require('express');
const routerApi = require('./routes/index');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
routerApi(app)
const whitelist = ['http://localhost:8000','https://myapp.com']
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'), false);
    }
  }
}
app.use(cors(options));

app.listen(port, () =>{})
