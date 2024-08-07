import { useState } from "react";
import "./Form.css"
import axios from "axios";
function Admin() {
    const [productbrand, setProductBrand] = useState("");
    const [productname, setProductName] = useState("");
    const [productdis, setProductDis] = useState("");
    const [productoff, setProductOff] = useState("");
    const [productprice, setProductPrice] = useState("");
    const [image, setImage] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("productbrand", productbrand);
            formData.append("productname", productname);
            formData.append("productdis", productdis);
            formData.append("productoff", productoff);
            formData.append("productprice", productprice);
            formData.append("image", image);

            const response = await axios.post("http://localhost:3001/product/insert", formData )

            console.log(response.data)
            alert("form sumit sucessfull")
            
            

        }
        catch (error) {
            console.log(error)
            alert("Failed to submit form. Please check details.");

        }
    }
    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (<>
        <div className="d-flex justify-content-center align-items-center backim ">
            <form onSubmit={handleSubmit}>
                <div className="mt-5" style={{ border: "1px solid", height: "600px", width: "500px", display: "flex", justifyContent: "center", alignItems: "center", borderColor: "white" }} >
                    <div>
                        <input type="text" name="productbrand" onChange={(e) => setProductBrand(e.target.value)} placeholder="brandname" style={{ width: "300px", height: "35px", textAlign: "start", padding: "20px" }} /><br></br><br></br>
                        <input type="text" name="productname" onChange={(e) => setProductName(e.target.value)} placeholder="productname" style={{ width: "300px", height: "35px", textAlign: "start", padding: "20px" }} /><br></br><br></br>
                        <input type="text" name="productdis" onChange={(e) => setProductDis(e.target.value)} placeholder="discount" style={{ width: "300px", height: "35px", textAlign: "start", padding: "20px" }} /><br></br><br></br>
                        <input type="text" name="productoff" onChange={(e) => setProductOff(e.target.value)} placeholder="offer" style={{ width: "300px", height: "35px", textAlign: "start", padding: "20px" }} /><br></br><br></br>
                        <input type="text" name="productprice" onChange={(e) => setProductPrice(e.target.value)} placeholder="Price" style={{ width: "300px", height: "35px", textAlign: "start", padding: "20px" }} /><br></br><br></br>
                        <input type="file" name="image" onChange={handleFileChange} placeholder="image" style={{ color: "white" }} />  <br></br><br></br>
                        <button type="submit" style={{ borderRadius: "30px", width: "300px", height: "35px", textAlign: "center", backgroundColor: "white", color: "black", border: "none" }}>submit</button>
                    </div>

                </div></form>
        </div>
    </>)
}
export default Admin;