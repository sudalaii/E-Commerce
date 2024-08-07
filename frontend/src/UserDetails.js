import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


function UserDetails() {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await axios.get("http://localhost:3001/user/list");
                console.log(response.data)
                setUserData(response.data);
            }
            catch (error) {
                console.log(error)
            }
        }
        getdata()
    }, [])

    const deletedata = (userid) => {
        try {
            const response = axios.delete(`http://localhost:3001/user/delete/${userid}`);
            console.log(response.data)
            setUserData(userData.filter(user =>
                user._id !== userid
            ))
        } catch (error) {
            console.log(error)
        }
    }

    


    return (
        <>


            <div>
                <table className="table" style={{ border: "1px solid black" }}>
                    <thead>
                        <tr >
                            <th scope="col">index</th>
                            <th scope="col">userid</th>
                            <th scope="col">username</th>
                            <th scope="col">email</th>
                            <th scope="col">phonenumber</th>
                            <th scope="col">password</th>
                            <th scope="col">delete</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user, index) => (
                            <tr key={user._id}>
                                <th scope="row" style={{ backgroundColor: index % 2 === 0 ? "yellow" : "green", color: index % 2 === 0 ? "black" : "white" }}>{index + 1}</th>
                                <td style={{ backgroundColor: index % 2 === 0 ? "yellow" : "green", color: index % 2 === 0 ? "black" : "white" }}>{user._id}</td>
                                <td style={{ backgroundColor: index % 2 === 0 ? "yellow" : "green", color: index % 2 === 0 ? "black" : "white" }}>{user.username}</td>
                                <td style={{ backgroundColor: index % 2 === 0 ? "yellow" : "green", color: index % 2 === 0 ? "black" : "white" }}>{user.email}</td>
                                <td style={{ backgroundColor: index % 2 === 0 ? "yellow" : "green", color: index % 2 === 0 ? "black" : "white" }}>{user.phonenumber}</td>
                                <td style={{ backgroundColor: index % 2 === 0 ? "yellow" : "green", color: index % 2 === 0 ? "black" : "white" }}>{user.password}</td>
                                <td style={{ backgroundColor: index % 2 === 0 ? "yellow" : "green", color: index % 2 === 0 ? "black" : "white" }}>
                                    <button onClick={() => deletedata(user._id)} style={{ background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}>delete</button>
                                </td>
                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </>
    )
}
export default UserDetails;