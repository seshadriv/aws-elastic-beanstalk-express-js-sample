const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Seshadri! Welcome to AWS CICD Pipeline project!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
