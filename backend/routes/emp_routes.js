let express = require('express');

let router = express.Router();

let users = require('../models/users');

let bcrypt = require('bcrypt');


router.post("/register", async (req, res) => {
        
    try {

        let data = req.body;

        data.password = await bcrypt.hash(data.password, 10);

        let newuser = new users(data);

        await newuser.save();

        res.send("Employee registered successfully");

    } catch (err) {

        res.status(500).send(err.message);

    }

});


router.post("/login",async (req, res) => {
    let data=req.body;
    let emailcheck=users.findOne({email:data.email});

    if (emailcheck){
        let passcheck=await bcrypt.compare(emailcheck.password,data.password);
        if(passcheck){
            res.send("login successfull");
        }
        else{
            res.send("password wrong")
        }

    }else{
        res.send("user not found");
    }
    
});


router.get("/viewtask", (req, res) => {

    res.send("viewtask page called");

});


module.exports = router;