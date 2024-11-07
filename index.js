const express = require('express');
const cors = require('cors');
const app = express();


const todosRouter = require('./routes/todos');

// Set Application PORT
const port = 5000;

app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })

app.use('/api/todos', todosRouter);


app.listen(port, () => {
    console.log('Aplikasi telah berjalan pada http://localhost:' + port);
})

// 
// localhost:5000/api/todos/