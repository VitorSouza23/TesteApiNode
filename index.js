const express = require("express");
const v1 = require('./Routes/v1');
const app = express();

app.use(express.json());

app.use('/v1', v1);

app.listen(3000);