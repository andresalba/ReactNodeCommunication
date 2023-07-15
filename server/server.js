const express = require('express')
const app = express()
const fs = require('fs');

app.get("/aeaapi", (req, res) => {
    fs.readFile('MOCK_DATA.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Internal Server Error');
        }
        const jsonData = JSON.parse(data);
        //res.json(jsonData);
        res.json({ "users": jsonData });
    });
})

/* app.get("/aeaapi", (req, res) => {
    res.json({ "users": [{"id":1,"first_name":"Randolph","last_name":"Batsford","email":"rbatsford0@theguardian.com","gender":"Male","industry":"Games"}, {"id":1000,"first_name":"Madeline","last_name":"Fanshawe","email":"mfanshawerr@altervista.org","gender":"Female","industry":"Movies"}] });
}) */

app.listen(5000, ()=>{
    console.log("servidor corriendo en el puerto 5000")
})