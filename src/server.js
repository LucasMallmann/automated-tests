import app from './app';

const port = process.env.PORT || 3333;

console.log(`Server is listening on port: ${port}`);

app.listen(port);
