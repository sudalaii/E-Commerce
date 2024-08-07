
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card'; 
import { CardTitle } from 'react-bootstrap';
import { LiaRupeeSignSolid } from "react-icons/lia";

import { IoMdStarHalf } from "react-icons/io";
import { MdStarRate } from "react-icons/md"
import Headphones from './Headphones';


const CardHeadphones = () => {
    const [productdata, setProductdata] = useState([]);
    const [cart] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/product/list");
                setProductdata(response.data); 
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        getData();
    }, []);


    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const shuffledProducts = shuffleArray(productdata).filter(product=>product. productbrand==="Headphones");
    const displayProducts = shuffledProducts.slice(0, 4);
    const addToCart = (product) => {
        if(sessionStorage.getItem("isUserLogged")){
        const newCart = [...cart];
        newCart.push(product);
        alert("product add sucessfull")
        localStorage.setItem("cartItems", JSON.stringify(newCart));
        console.log("Cart updated:", newCart);
        }else{
            alert("please login")
        }
    };

    return (
        <div style={{backgroundColor:"#E7F2F0"}}>
            <Headphones/>
        <div className='container-fluid'style={{textTransform:"capitalize"}}>
            <div className=' row m-2 '>
                {displayProducts.map((product, index) => (
                    <div key={index} className=' col-lg-3 col-sm-12 col-md-6 mb-3'>
                        <Card className="animi" style={{  borderRadius:"16px" }}>
                            <Card.Img variant='top' src={`http://localhost:3001/resources/uploads/${product.Image}`} style={{ image:"fluid" ,height:"350px"}} />
                            <Card.Body style={{backgroundColor:"#FAFAFA" ,borderRadius:"14px"}}>

                                <CardTitle style={{fontSize:"16px"}}>
                                    <div  style={{display:"flex",justifyContent:"space-between"}}>{product.productname}
                                        <div>
                                        <MdStarRate style={{ color: '#f39c12' }}  /><MdStarRate style={{ color: '#f39c12' }}  /><MdStarRate style={{ color: '#f39c12' }}  />
                                <IoMdStarHalf /></div>
                                </div>
                                </CardTitle>
                               
                                <div className='d-flex justify-content-start'>
                                    <span style={{ fontSize: "18px", color: "black" }}><bold ><LiaRupeeSignSolid />{product.productprice}</bold></span>
                                    <span className='p-1' style={{ fontSize: "15px", textDecoration: "line-through" }}><LiaRupeeSignSolid />{product.productdis}</span>
                                    <span className='py-1' style={{ fontSize: "15px", color: "#0E946A" }}>{product.productoff} off</span>
                                </div>
                                <button onClick={()=>{addToCart(product)}}style={{ width: "100%", height: "40px", backgroundColor: "black", color: "white", borderRadius: "10px", marginTop: "10px" }}>Add to cart</button>

                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default CardHeadphones;
