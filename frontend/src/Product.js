
import axios from "axios";
import { useState, useEffect } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";

function Product() {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/product/list");
                setProductData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const deleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:3001/product/delete/${productId}`);
            setProductData(productData.filter(product => product._id !== productId));
            console.log("Product deleted successfully!");
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <div>
            <h1 style={{textAlign:"center"}}>Product List</h1>
            <table className="table" style={{ border: "1px solid black" }}>
                <thead>
                    <tr>
                        <th scope="col">Index</th>
                        <th scope="col">Product ID</th>
                        <th scope="col">Image</th>
                        <th scope="col">Brand Name</th>
                        <th scope="col">Model Name</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Offer</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {productData.map((product, index) => (
                        <tr key={product._id}>
                            <td  style={{ backgroundColor: index % 2 === 0 ? "yellow" : "green", color: index % 2 === 0 ? "black" : "white" }}>{index + 1}</td>
                            <td  style={{ backgroundColor: index % 2 === 0 ? "yellow" : "green", color: index % 2 === 0 ? "black" : "white" }}>{product._id}</td>
                            <td  style={{ backgroundColor: index % 2 === 0 ? "yellow" : "green", color: index % 2 === 0 ? "black" : "white" }}><img src={`http://localhost:3001/resources/uploads/${product.Image}`} style={{ width: "50px", height: "50px" }} /></td>
                            <td  style={{ backgroundColor: index % 2 === 0 ? "yellow" : "green", color: index % 2 === 0 ? "black" : "white" }}>{product.productbrand}</td>
                            <td  style={{ backgroundColor: index % 2 === 0 ? "yellow" : "green", color: index % 2 === 0 ? "black" : "white" }}>{product.productname}</td>
                            <td  style={{ backgroundColor: index % 2 === 0 ? "yellow" : "green", color: index % 2 === 0 ? "black" : "white" }}>{product.productdis}</td>
                            <td  style={{ backgroundColor: index % 2 === 0 ? "yellow" : "green", color: index % 2 === 0 ? "black" : "white" }}>{product.productoff}</td>
                            <td  style={{ backgroundColor: index % 2 === 0 ? "yellow" : "green", color: index % 2 === 0 ? "black" : "white" }}> <LiaRupeeSignSolid />{product.productprice}</td>
                            <td  style={{ backgroundColor: index % 2 === 0 ? "yellow" : "green", color: index % 2 === 0 ? "black" : "white" }}>
                                <button onClick={() => deleteProduct(product._id)} style={{ background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}>Delete</button>
                            </td>
                           
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Product;
