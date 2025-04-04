const express = require('express');
const app = express();
const router = require('./routers')

app.use(express.static('./public'))

app.use('/', router)

app.listen(5000, () => {
    console.log('Server listening on port 5000');
})