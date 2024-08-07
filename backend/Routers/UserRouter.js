const express=require("express")
const router=express.Router()
const UserController=require("../Controllers/UserController")
router.post("/user/insert",UserController.insert)
router.get("/user/list",UserController.list)
router.post("/user/login",UserController.login)
router.delete("/user/delete/:id",UserController.delete)
router.post("/user/update/:id",UserController.update)
router.post("/user/logout", UserController.logout);
router.get("/user/active-sessions", UserController.getActiveSessions); 
module.exports=router;