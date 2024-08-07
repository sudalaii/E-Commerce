import Image from 'react-bootstrap/Image';
import { FiArrowRightCircle } from "react-icons/fi";
import { LuIndianRupee } from "react-icons/lu";
function Speaker(){
    return(
        <>
          <div class="container">
                    <div class="row ">
                        <div class="col-sm-12 col-md-6 neckleft  d-flex align-items-center justify-content-center mb-1">
                            <div className='text-capitalize text-center'>
                                <h1 style={{ fontSize: "65px" }}>soundbars</h1>
                                <h3 >starting from<LuIndianRupee />1599*</h3>
                                <div><button style={{width: "60%", height: "40px", backgroundColor: "black", color: "white", borderRadius: "10px", marginTop: "10px"}}>shop products <FiArrowRightCircle /></button></div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <Image src="/images/soundbar.webp" fluid style={{ width: "490px" }} />
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Speaker;