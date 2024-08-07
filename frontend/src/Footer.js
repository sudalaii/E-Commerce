import Image from 'react-bootstrap/Image';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className='container-fluid p-3 footer mb-3 ' style={{backgroundColor:"#E7F0F5"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4  mb-3 d-flex align-items-center align-items-md-center ">
                            <div>
                                <Image src="/images/navlogo4.png" style={{ width: "150px" }} fluid />
                                <h3>subscribe to our email alerts!</h3>
                                <input type="text" placeholder="enter your email address"></input></div>
                        </div>
                        <div className=" col-lg-4  mb-3 d-flex align-items-center ">
                            <div className='container  d-flex'>
                                <div className='container '>
                                    <h6>shop</h6>
                                    <p>true wireless earbuds</p>
                                    <p>wired headphones</p>
                                    <p>home audio</p>
                                    <p>smart watches</p>
                                </div>
                                <div className='container'>
                                    <p>wireless headphones</p>
                                    <p>wireless speakers</p>
                                    <p>mobile accessories</p>
                                    <p>trebel</p>
                                    <p>return & earn</p>
                                </div></div>
                        </div>
                        <div className="col-lg-2   mb-3 d-flex align-items-center">
                            <div >
                                <h5>help</h5>
                                <p>track your order</p>
                                <p>warrenty & support</p>
                                <p>return policy</p>
                                <p>service center</p>
                                <p>bulk orders</p>
                                <p>faqs</p>
                                <p>why buy direct</p></div>


                        </div>
                        <div className='col-lg-2  mb-3 d-flex align-items-center'>
                            <div >
                                <h5>company</h5>
                                <p>about boat</p>
                                <p>news</p>
                                <p>read our block</p>
                                <p>careers</p>
                                <p>security</p>
                                <p>investor relation</p>
                                <p>social responsibility</p>
                                <p>warrenty policy</p></div>
                        </div>

                    </div>
                </div>

                <div className='container d-flex justify-content-center'>
                    <h4 className='p-3'>lets get social </h4>
                    <div className='p-3 d-flex '>
                        <div className="p-1"><FaFacebook /></div>
                        <div className="p-1"><FaInstagramSquare /></div>
                        <div className="p-1"> <IoLogoYoutube /></div>
                        <div className="p-1"><FaLinkedin /></div>
                    </div>
                </div>
                <div className='d-flex justify-content-center '>
                    privacy policy. terms & conditions
                </div>
                <div className='d-flex justify-content-center '>
                    <p><FaRegCopyright /> 2024 . all rights reserved.</p>
                </div>
            </div>
        </>
    )
}
export default Footer