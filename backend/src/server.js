import Express from 'express';
import { createServer } from 'http';

const App = Express();
const Server = createServer(App);

App.get('/', (req, res) => {
    return res.send('Hello world!');
});

Server.listen(5000, () => {
    console.log('Server is running!');
});
