let express = require('express')
let cors = require('cors')
require('./Config/conn')
let userRoute = require('./Route/userRoute')

let app = express();

app.use(express.json());
app.use(cors());

// for api calling
app.use('/api/admin',userRoute)


app.listen(4000 , ()=>{
    console.log('server running on 4000');
})