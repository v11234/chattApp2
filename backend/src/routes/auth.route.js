import express from "express";

const router=express.Router();

router.get("/signup",(req,res)=>{
    res.send("signup here")
}
)
router.get("/login",(req,res)=>{
    res.send("login here")
}
)


router.get("/logout",(req,res)=>{
    res.send("logout here")
}
)
export default router;