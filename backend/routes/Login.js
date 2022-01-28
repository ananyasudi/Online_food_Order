var express = require("express");
var router = express.Router();

const User = require("../models/Users");
const Vendor = require("../models/Vendors");

router.post("/", function (req, res) {
    const email = req.body.email;
    const pass = req.body.password;
    var f = 0; //0 means email not exists
    Vendor.findOne({ email: req.body.email }).then(ven => {
        if (!ven) {
            //check in users
            User.findOne({ email: req.body.email }).then(us => {
                if (!us) { //it didnot find any email
                    res.send("Email not found");
                }
                else{ //email found in users we need to check if email+password is there or not
                    User.findOne({ email: req.body.email, password: req.body.password }).then(user => {
                        if (!user) { //email is there but email+password not there
                            res.send("Invalid credentials");
                        }
                        else {//it found right email+password
                            const u = { role: "buyer", elem: user }
                            res.send(u);
                        }
                    });

                }
            })
        }
        else {
                    Vendor.findOne({ email: req.body.email, password: req.body.password }).then(vendor => {
                        // Check if user email+password exists
                        if (!vendor) { //that means credentials are not right]
                            res.send("Invalid Credentials");
                        }
                        else { //it found right email+password
                            const u = { role: "vendor", elem: vendor }
                            res.send(u);
                        }
                    });

                }

    })

});
module.exports = router;
// Vendor.findOne({ email: req.body.email, password: req.body.password }).then(vendor => {
//     // Check if user email exists
//     if (!vendor) { //that means it didnot find vendor]
//         User.findOne({ email: req.body.email, password: req.body.password }).then(user => {
//             if (!user) {
//                 res.send("email doesn't exist");
//             }
//             else {
//                 const u = { role: "buyer", elem: user }
//                 res.send(u);
//             }

//         });

//     }
//     else {
//         const u = { role: "vendor", elem: vendor }
//         res.send(u);
//     }
// });