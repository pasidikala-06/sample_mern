let express=require('express');
let app=express();
let mongoose=require('mongoose');
let hrroutes=require('./routes/hr_routes');
let emproutes=require('./routes/emp_routes'); 
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/hrmangement").then(()=>{console.log("db connect success")}).catch((err)=>console.log(err));

app.use("/api/hr",hrroutes);
app.use("/api/emp", emproutes);
app.listen(3000,()=>{
    console.log("server listening on port 3000");
})

