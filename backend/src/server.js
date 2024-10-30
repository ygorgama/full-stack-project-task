const app = require('./app');
require('dotenv').config();

const port = 3000;

app.listen(port, () => {
    console.log("Server running on port " + port);
});