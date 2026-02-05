const express = require('express');
const app = express();
const port = 3000;

//Setting EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) =>{
    res.render('index', {
        title: 'Home Page',
        message: 'Hello from the Express Server!'
    });
});

app.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}`);
});