
import axios from "axios";
import React, { useState } from "react";
import"./Form.css"
import { useNavigate} from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function FormData() {
    const [formType, setFormType] = useState("login");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [lemail, setLemail] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [password, setPassword] = useState("");
    const [lpassword, setLpassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [errors, setErrors] = useState({});
   
      
    

    const handleFormToggle = (type) => {
        setFormType(type);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (formType === "signup") {
            let newErrors = {};
            if (!username) {
                newErrors.username = "Username is required";
            } else if (Number(username)) {
                newErrors.username = "Enter at alphapet"
            }
            if (!email) {
                newErrors.email = "Email is required";
            }
            if (!phonenumber) {
                newErrors.phonenumber = "PhoneNumber is required";
            } else if (!Number(phonenumber)) {
                newErrors.phonenumber = "Enter correct phoneNumber"
            }
            else if (phonenumber.length !== 10) {
                newErrors.phonenumber = "Enter the 10 digit number"
            }

            if (!password) {
                newErrors.password = "Password is required";
            }
            if (!cpassword) {
                newErrors.cpassword = "Confirm Password is required";
            }
            if (password !== cpassword) {
                newErrors.cpassword = "Passwords do not match";
            }
            console.log("username" + username, "password" + password, email, phonenumber, password, cpassword)
            setErrors(newErrors);
        }

        if (password == cpassword && (!Number(username)) && (Number(phonenumber)) && phonenumber.length == 10) {
            try {
                const response = await axios.post("http://localhost:3001/user/insert", {
                    username, email, phonenumber, password, cpassword
                })

                console.log(response.data)
                alert("form sumit sucessfull")
                setFormType("login");

            }
            catch (error) {
                console.log(error)
                alert("Failed to submit form. Please check details.");

            }
        }



    };
    const navigate = useNavigate();
     const handleSubmit2 = async (event) => {
        event.preventDefault();
        if (formType === "login") {
            let newErrors = {};
            if (!lemail) {
                newErrors.lemail = "Email is required";
            }
            if (!lpassword) {
                newErrors.lpassword = "Password is required";
            }
            console.log(email, password)
            setErrors(newErrors);
        }
        if (lemail && lpassword) {
            try {
                const response = await axios.post("http://localhost:3001/user/login", {
                    email:lemail, password:lpassword
                })
                console.log(response.data);
                if (response.data.userFound) {
                    sessionStorage.setItem("isUserLogged", true);
                    alert("Login successful")
                    navigate("/home")
                    
                    
                } else {
                    alert("Login failed");
                }
               
            } catch (error) {
                console.error("Error logging in:", error);
                alert("Login failed. ")
            }

        }
    }
   





    return (
        <div className="d-flex justify-content-center align-item-center bc">
            <div className="mt-3 boc" style={{  borderRadius: "30px",width:"500px",border:"2px solid #dadada", display:"flex",justifyContent:"center",alignItems:"center",height:"700px"}}>
                <div>
                    <div className="d-flex gap-2">
                        <button onClick={() => handleFormToggle("login")} style={{ padding: "5px", borderRadius: "10px", width: "150px",backgroundColor:"white",color:"black",border:"none" }}>Login</button>
                        <button onClick={() => handleFormToggle("signup")} style={{ padding: "5px", borderRadius: "10px", width: "150px" ,backgroundColor:"white",color:"black",border:"none"}}>Signup</button>
                    </div><br /><br />
                  

                    {formType === "login" && (
                        <form onSubmit={handleSubmit2}>
                            <input type="email" name="email" onChange={(e) => setLemail(e.target.value)} placeholder="Email" style={{ borderRadius: "30px", width: "300px", height: "35px",textAlign: "start", padding: "20px", border: errors.lemail ? "1px solid red" : "none" }} />
                            {<div style={{ color: "red", fontSize: "14px" }}>{errors.lemail}</div>}
                            <br /><br />
                            <input type="password" name="password" onChange={(e) => setLpassword(e.target.value)} placeholder="Password" style={{ borderRadius: "30px", width: "300px", height: "35px", textAlign: "start", padding: "20px", border: errors.lpassword ? "1px solid red" : "none" }} />
                            {<div style={{ color: "red", fontSize: "14px" }}>{errors.lpassword}</div>}
                            <br /><br />
                            <button type="submit" style={{ borderRadius: "30px", width: "300px", height: "35px", textAlign: "center",backgroundColor:"white",color:"black", border: "none" }}>Login</button>
                        </form>
                    )}

                    {formType === "signup" && (
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} placeholder="Username" style={{ borderRadius: "30px", width: "300px", height: "35px", textAlign: "start", padding: "20px", border: errors.username ? "1px solid red" : "none" }} />
                            {<div style={{ color: "red", fontSize: "14px" }}>{errors.username}</div>}
                            <br /><br />
                            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" style={{ borderRadius: "30px", width: "300px", height: "35px", textAlign: "start", padding: "20px", border: errors.email ? "1px solid red" : "none" }} />
                            {<div style={{ color: "red", fontSize: "14px" }}>{errors.email}</div>}
                            <br /><br />
                            <input type="contact" name="phonenumber" onChange={(e) => setPhonenumber(e.target.value)} placeholder="PhoneNumber" style={{ borderRadius: "30px", width: "300px", height: "35px", textAlign: "start", padding: "20px", border: errors.phonenumber ? "1px solid red" : "none" }} />
                            {<div style={{ color: "red", fontSize: "14px" }}>{errors.phonenumber}</div>}
                            <br /><br />
                            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{ borderRadius: "30px", width: "300px", height: "35px", textAlign: "start", padding: "20px", border: errors.password ? "1px solid red" : "none" }} />
                            {<div style={{ color: "red", fontSize: "14px" }}>{errors.password}</div>}
                            <br /><br />
                            <input type="password" name="cpassword" onChange={(e) => setCpassword(e.target.value)} placeholder="Confirm Password" style={{ borderRadius: "30px", width: "300px", height: "35px", textAlign: "start", padding: "20px" , border: errors.cpassword ? "1px solid red" : "none" }} />
                            {<div style={{ color: "red", fontSize: "14px" }}>{errors.cpassword}</div>}
                            <br /><br />
                            <button type="submit" style={{ borderRadius: "30px", width: "300px", height: "35px", textAlign: "center",backgroundColor:"white",color:"black", border: "none" }}>Create</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FormData;