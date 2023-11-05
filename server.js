 const express = require('express');
 const app = express();
 const path = required('path');

 app.set("/", "html");
 app.use(express.static(path.join(_dirname, "/")));
 app.use(express.json());
 app.use(express.urlencoded({extended: false}));

 app.get('/', (req, res) => {
    res.render('index');

 });

 app.listen(4200, () => {
    console.log("Listening on http://localhost:4200");
 });