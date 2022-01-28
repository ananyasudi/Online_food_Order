var express = require("express");
var router = express.Router();

const User=require("../models/Users");
// "localhost:4000/buyer"-->we need to send id of buyer , u will get buyer element
router.post("/:id/getU",function(req,res){
    const _id=req.body.ID;
    console.log(req.body);
    User.findOne({ _id }).then(user => {
        if (!user) {
            res.send("ERROR!!user not found");
        }
        else{
            res.send(user);
        }
    });
});
router.post("/edit",function(req,res){
    const _id=req.body.id;
    console.log("nono");
    User.findByIdAndUpdate({_id:req.body.id},{
        name:req.body.name,
        age:req.body.age,
        contact:req.body.contact,
        batch:req.body.batch,
    },function(err,docs){
        if(err)res.send(err);
        else{
            res.send("Details Updated successfully");
        }

    });
})

module.exports=router;
