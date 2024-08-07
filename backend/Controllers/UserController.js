const UserModel=require("../Models/UserModel")
const bcrypt=require("bcrypt")
exports.insert=[async (req,res)=>{
    const hashedpassword = await bcrypt.hash(req.body.password,10);
    const User=new UserModel({
        username:req.body.username,
        email:req.body.email,
        phonenumber:req.body.phonenumber,
        password:hashedpassword,
        cpassword:hashedpassword
    })
    
    User.save()
    .then((ele)=>{
          res.send(ele)
    })
    .catch((err)=>{
         res.send(err)
    })
}]
exports.list=[(req,res)=>{
    UserModel.find()
    .then((User)=>{
        res.send(User)
    })
    .catch((err)=>{
        res.send(err)
    })
}]
exports.delete=[(req,res)=>{
    UserModel.deleteOne( {_id:req.params.id})
    .then((data)=>{
       res.send(data)
    })
    .catch((err)=>{
          res.send(err)
    })
}
]
exports.update=[(req,res)=>{
    UserModel.updateOne({_id:req.params.id},{
        $set:{
            username:req.body.username,
            email:req.body.email,
            phonenumber:req.body.phonenumber,
            password:req.body.password,
            cpassword:req.body.cpassword
        }
    }

    )
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
       res.send(err)
    })
}]
exports.login=[ async (req,res)=>{
    const email=req.body.email
    const password=req.body.password
     UserModel.findOne({
            email:email,
        })
        .then(async (user)=>{
            if(user){
                const isFound = await bcrypt.compare(password, user.password)
                if(isFound){
                    res.send({
                        userFound: true,
                        message: "Login Success"
                    })
                }else{
                    res.send({
                        userFound: false,
                        message: "Password doesn't mathches"
                    })
                }
            }
            else{
                res.send({
                    userFound: false,
                    message: "Email not found"
                })
            }
        })
        .catch((err)=>{
           res.send(err)
        })
}]

exports.logout = [(req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send({
                success: false,
                message: 'Logout failed'
            });
        }
        res.send({
            success: true,
            message: 'Logout successful'
        });
    });
}];

const activeSessions = new Set(); // This is just for demonstration; not suitable for production

exports.getActiveSessions = [(req, res) => {
    res.send({
        activeSessions: Array.from(activeSessions) // Convert Set to Array
    });
}];