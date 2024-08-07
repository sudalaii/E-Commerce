import Image from 'react-bootstrap/Image';
import { FiArrowRightCircle } from "react-icons/fi";
import { LuIndianRupee } from "react-icons/lu";
function Headphones() {
    return (
        <><div className="container boomheadset">
            <div class="row ">
            <div class="col-sm-12 col-md-6 boomheadsetleft ">
                    <Image src="/images/headphonelogo1.webp" fluid />
                </div>
                <div className="col-sm-12 col-md-6 boomheadsetright  d-flex align-items-center justify-content-center ">
                    <div className='watchrightbox text-capitalize text-center'>
                        <div>
                            <strong><h1 style={{ fontSize: "60px" }}>headphones</h1></strong>
                            <h3 >starting from<LuIndianRupee />1199*</h3>
                            <div ><button style={{width: "60%", height: "40px", backgroundColor: "black", color: "white", borderRadius: "10px", marginTop: "10px"}}>shop products <FiArrowRightCircle /></button></div>
                        </div><br></br>
                    </div>
                </div>
               

            </div>
        </div>

        </>
    )
}
export default Headphones;