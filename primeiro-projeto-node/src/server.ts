import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({message: 'hello world go'});
});

app.listen(8080, '0.0.0.0', () => {
    console.log("iinted")
});
