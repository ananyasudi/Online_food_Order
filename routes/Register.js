var express = require("express");
var router = express.Router();

const User = require("../models/Users");
const Vendor = require("../models/Vendors");

router.get("/", function (req, res) {
    res.send("register api working properly");
});

router.post("/vendor", (req, res) => {
    // res.send("hello");
    let f = 0;//no vendor present with given email
    const newVendor = new Vendor({
        vendor_name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        shop_name: req.body.shopname,
        password: req.body.password
        //need to add opening and closing time
    });
    // console.log(Vendor.findOne( {email:req.body.email}));
    // console.log(User.findOne( {email:req.body.email}));
    Vendor.findOne({ email: req.body.email }).then(vendor => {
        // Check if user email exists
        if (!vendor) { //that means it didnot find vendor]
            User.findOne({ email: req.body.email }).then(user => {
                if (!user) {
                    newVendor.save()
                        .then(vendor => {
                            res.status(200).json(vendor);
                        })
                        .catch(err => {
                            res.status(400).send(err);
                        });

                }
                else {
                    res.send("email already taken");
                }

            });
            
        }
        else {
            res.send("email already taken");
        }
    });

    // if(Vendor.findOne( {email:req.body.email})||User.findOne( {email:req.body.email} )){
    //     res.send("Email already taken");
    // }



});
router.post("/buyer", (req, res) => {
    // res.send("hello");
    const newBuyer = new User({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        batch: req.body.batch,
        age: req.body.age,
        password: req.body.password
    });
    Vendor.findOne({ email: req.body.email }).then(vendor => {
        // Check if user email exists
        if (!vendor) { //that means it didnot find vendor]
            User.findOne({ email: req.body.email }).then(user => {
                if (!user) {
                    newBuyer.save()
                        .then(user => {
                            res.status(200).json(user);
                        })
                        .catch(err => {
                            res.status(400).send(err);
                        });

                }
                else {
                    res.send("email already taken");
                }

            });
            
        }
        else {
            res.send("email already taken");
        }
    });



});


module.exports = router;