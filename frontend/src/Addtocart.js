// // import { useEffect, useState } from "react";

// // function Addtocart() {

// //     const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cartItems")))
// //     const [count ,setCount]=useState(1)
// //     const countincrement=()=>{
// //         setCount(count+1)
       
// //     }
// //     const decrement=()=>{
// //         if(count=="1"){
// //             setCount(1)
// //         }else{
// //             setCount(count-1)
// //         }
        
// //     }

// //     return (
// //         <>
// //             <h1>Cart Items</h1>
// //             {
// //                 cart &&
// //                 <>
// //                     {
// //                         cart.map((e) => {
// //                             return <>
// //                                 <div >
// //                                     <div>
// //                                         <img src={"http://localhost:3001/resources/uploads/" + e.Image} />
// //                                         <p>Brand    : {e.productbrand}</p>
// //                                         <p>Modelname: {e.productname}</p>
// //                                         <p>Price    : {e.productprice}</p>
// //                                     </div>
// //                                     <div style={{ display: "flex", alignItems: "center", gap: "10px"    }}>
                                  
// //                                         <span>Quantity:</span>
// //                                         <button onClick={decrement}style={{ padding: "5px 10px", fontSize: "16px", border: "1px solid ", borderRadius: "5px",  backgroundColor: "#f0f0f0",cursor: "pointer" }} >
// //                                             -
// //                                         </button>
// //                                         <p style={{ margin: "0",fontSize: "16px", fontWeight: "bold"  }}>   {count} </p>
                                       
                                        
// //                                         <button onClick={countincrement}
// //                                             style={{ padding: "5px 10px",fontSize: "16px", border: "1px solid #ddd", borderRadius: "5px", backgroundColor: "#f0f0f0", cursor: "pointer"  }}
// //                                             >     +
// //                                         </button>
// //                                     </div>

// //                                     <div>
// //                                         <button>buynow</button>
// //                                     </div>
// //                                 </div>
// //                             </>
// //                         })
// //                     }
// //                 </>
// //             }

// //         </>
// //     )
// // }
// // export default Addtocart;


import { useState, useEffect } from "react";

function Addtocart() {
    // Initialize the cart state from localStorage or default to an empty array
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cartItems");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Update localStorage whenever the cart changes
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cart));
    }, [cart]);

    // Handle changes in quantity of items
    const handleQuantityChange = (index, delta) => {
        setCart(prevCart => {
            const updatedCart = [...prevCart];
            // Update the quantity correctly
            updatedCart[index] = {
                ...updatedCart[index],
                quantity: Math.max((updatedCart[index].quantity || 1) + delta, 1)
            };
            return updatedCart;
        });
    };

    // Handle removing an item from the cart
    const handleRemoveItem = (index) => {
        setCart(prevCart => prevCart.filter((_, i) => i !== index));
    };

    // Handle placing an order
    const placeOrderHandler = () => {
      
            setCart([]);
            localStorage.removeItem("cartItems");
            alert("Order Success!");
       
    };

    // Calculate subtotal and total price
    const subtotal = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    const totalPrice = cart.reduce((acc, item) => acc + (item.productprice * (item.quantity || 1)), 0).toFixed(2);

    return (
        <>
            <h1>Cart Items</h1>
            {cart.length > 0 ? (
                cart.map((item, index) => {
                    const quantity = item.quantity || 1;
                    const totalPriceForItem = (item.productprice * quantity).toFixed(2);

                    return (
                        <div key={index} style={{ display: "flex", alignItems: "center", border: "1px solid #ddd", padding: "10px", marginBottom: "10px", boxSizing: "border-box", justifyContent: "space-between" }}>
                            <img
                                src={`http://localhost:3001/resources/uploads/${item.Image}`}
                                alt={item.productname}
                                style={{ width: "300px", height: "300px", objectFit: "cover", marginRight: "20px", borderRadius: "10px" }}
                            />
                            <div>
                                <p>Brand: {item.productbrand}</p>
                                <p>Model: {item.productname}</p>
                                <p>Price: ₹{item.productprice.toFixed(2)}</p>
                                <p>Total Price: ₹{totalPriceForItem}</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "20px" }}>
                                <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                                    <button
                                        onClick={() => handleQuantityChange(index, -1)}
                                        disabled={quantity <= 1}
                                        style={{ marginRight: "5px" }}
                                    >
                                        -
                                    </button>
                                    <p>{quantity}</p>
                                    <button
                                        onClick={() => handleQuantityChange(index, 1)}
                                        style={{ marginLeft: "5px" }}
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={() => handleRemoveItem(index)}
                                    style={{ padding: "10px 20px", backgroundColor: "#dc3545", color: "#fff", border: "none", borderRadius: "5px" }}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p>Your cart is empty</p>
            )}
            {cart.length > 0 && (
                <div id="order_summary" style={{ marginTop: "20px" }}>
                    <h4>Order Summary</h4>
                    <hr />
                    <p>Subtotal: <span>{subtotal} (Units)</span></p>
                    <p>Est. Total: <span>₹{totalPrice}</span></p>
                    <hr />
                    <button
                        onClick={placeOrderHandler}
                        style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: "5px" }}
                    >
                        Place Order
                    </button>
                </div>
            )}
        </>
    );
}

export default Addtocart;




