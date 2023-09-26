// console.log('starting');
const app = require('./app');
require('dotenv').config();
require('./connectDb.js');

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
})