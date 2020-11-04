const path = require("path");
const express = require("express");
const app = express();
const fetchDataGoogle = require('./api');

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
})

app.get('/fetchData', async (req, res) => {    
    const key = req.query.key;
    const payload = await fetchDataGoogle(key);

    res.send(payload);
});

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 5000
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});