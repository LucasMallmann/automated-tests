import app from './app';

const port = process.env.PORT || 3333;

// eslint-disable-next-line no-console
console.log(`Server is listening on port: ${port}`);

app.listen(port);
