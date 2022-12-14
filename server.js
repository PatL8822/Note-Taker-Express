const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// app.get('/', (req, res) =>
//     res.sendFile(path.join(__dirname, '../public/index.html'))
// );

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);


app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));