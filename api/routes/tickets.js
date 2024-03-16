const router = require("express").Router();
let Ticket = require("../models/Ticket");

router.route("/add").post((req,res)=>{
    const date = Number(req.body.date);
    const time = Number(req.body.time);

    const newTicket = new Ticket({

        date,
        time
    });

    newTicket.save().then(()=>{
        req.json("ticket added")
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/").get((req,res)=>{
    Ticket.find().then((Ticket)=>{
        res.json(tickets)
    }).catch((err)=>{
        console.log(err)
    });
});

router.route("/update/:TicketId").put(async(req,res)=>{
    let TicketId = req.params.TicketId;
    const{date,time} = req.body;

    const updateTicket = {
        date,
        time
    }
    const update = await Ticket.findByIdAndUpdate(TicketId, updateTicket).then(()=>{
        res.status(200).send({status:"user updated", user:update})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error with updating data",error:err.massage})

    });
    router.route("/delete/:TicketId").delete(async(req,res)=>{
       let TicketId = req.params.TicketId;

       await Ticket.findByIdAndDelete(TicketId)
       .then(()=>{
        res.status(200).send({status:"user deleted"});
       }).catch((err)=>{
        console.log(err.massage);
        res.status(500).send({status:"error with delete user",error:err.massage});
       });
    });

    router.route("/get/:TicketId").get(async(res,req)=>{
        let TicketId = req.params.TicketId;
        await Ticket.findById(userId)
        .then(()=>{
            res.status(200).send({status:"user fetched",user: user})
        }).catch(()=>{
            console.log(err.massage);
            res.status(500).send({status:"error with get user",error:err.massage});
        });
    });

    
    
});



module.exports = router;