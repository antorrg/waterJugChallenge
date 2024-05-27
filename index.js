
const app = require('./src/app.js')
require('dotenv').config();

const Port = process.env.PORT || 3001;

app.listen(Port, ()=>{
    console.log(`Server is listenning on port: ${Port}`)
});