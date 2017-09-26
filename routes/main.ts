import {IRouter, Router} from "express";


let router: Router = Router();


router.get("/get/jsonData", (req, res) => {

    res.set("Content-Type", "application/json");

    res.send({
        result: 0, data: {
            name : "shadi",
            gender : "female"
        }
    })

});


router.post("/post/jonData", (req, res) => {

    res.set("Content-Type", "application/json");

    var params = req.body;

    if(params.type == "user"){
        res.send({
            result: 0, data: {
                name : "shadi",
                gender : "female"
            }
        })
    }else{
        res.send({
            result : -1,
            message : "you should send data"
        })
    }



});

export = router;