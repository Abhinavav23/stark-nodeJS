const {connect} = require('mongoose');
// console.log('staring connection');

connect(process.env.DB_Connection_URL)
.then(() => {
    console.log('connection successful');
})
.catch((err) => {
    console.log(`something went wrong ${err.message}`);
})