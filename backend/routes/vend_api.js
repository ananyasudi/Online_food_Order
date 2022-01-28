var express = require("express");
var router = express.Router();

const Vendor=require("../models/Vendors");
const Item=require("../models/Items");

router.post("/",function(req,res){
    const _id=req.body.ID;
    Vendor.findOne({ _id }).then(vendor => {
        if (!vendor) {
            res.send("ERROR!!user not found");
        }
        else{
            res.send(vendor);
        }
    });
});
router.post("/edit",function(req,res){
    const _id=req.body.id;
    Vendor.findByIdAndUpdate({_id:req.body.id},{
        vendor_name:req.body.name,
        contact:req.body.contact,
        shop_name:req.body.shop_name,
        // need to add shop_open,shop_close
    },function(err,docs){
        if(err)res.send(err);
        else{
            res.send("details updated successfully");
        }

    });
})

router.post("/:id/items",function(req,res){
    Item.find({vendorid:req.body.vendorid},function(err,items){
        if(err){
            console.log(err);
        }
        else{
            res.json(items);
        }
    })
});
router.post("/:id/items/add",function(req,res){
    // res.send("api working properly");
    const newFood=new Item({
        name:req.body.name,
        price:req.body.price,
        rating:req.body.rating,
        kind:req.body.kind,
        vendorid:req.body.vendorid
    });
    Item.findOne({name:req.body.name,vendorid:req.body.vendorid}).then(item=>{
        if(!item){
            newFood.save()
                .then(item=>{
                    res.status(200).json(item);
                })
                .catch(err=>{
                    res.status(400).send(err);
                })
        }
        else{
            res.send("Item already exists");
        }
    })
});
module.exports = router;
