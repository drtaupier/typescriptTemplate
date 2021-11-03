import express from 'express';
import routes from './routes/index';
import students from './routes/api/students';
import teachers from './routes/api/teachers';

const app = express();
const port = 3000;

app.use('/api', routes);

app.listen(port, ()=>{
    console.log(`Server started at localhost:${port}`);
});