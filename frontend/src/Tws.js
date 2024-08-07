import Image from 'react-bootstrap/Image';
import { FiArrowRightCircle } from "react-icons/fi";
import { LuIndianRupee } from "react-icons/lu";

function Tws() {
    return (
        <>
            <div class="container-fluid tws" >
                <div class="row ">
                    <div className="col-sm-12 col-md-6 twsleft  d-flex align-items-center justify-content-center ">
                        <div className='twsbox m-3 text-center text-capitalize' >
                            <div>
                                <strong ><h1>true wireless earbuds</h1></strong>
                                <h3 >starting from<LuIndianRupee />999*</h3>
                                <div ><button style={{width: "60%", height: "40px", backgroundColor: "black", color: "white", borderRadius: "10px", marginTop: "10px"}}>shop products <FiArrowRightCircle /></button></div>
                            </div>`
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <Image src="/images/tws.webp" fluid />
                    </div>
                </div>
            </div>
        </>
    )

}
export default Tws;