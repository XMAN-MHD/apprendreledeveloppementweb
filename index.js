/*
    import modules
*/ 
// packages
const  express = require('express');
/*
    server
*/
const app = new express();
/*
    port
*/
let port = process.env.PORT || 4000;
app.listen(port, () => {console.log('Express server listening on port 4000')});
