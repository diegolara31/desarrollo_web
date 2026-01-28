import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/extra', (req, res) => {
    res.sendFile(__dirname + '/2nd.html');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});