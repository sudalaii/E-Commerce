import Image from 'react-bootstrap/Image';
import { FiArrowRightCircle } from "react-icons/fi";
import { LuIndianRupee } from "react-icons/lu";
function Watch() {
    return (<>
        <div class="container watch">
            <div class="row ">
                <div class="col-sm-12 col-md-6 watchleft">
                    <Image src="/images/logo15.webp" fluid />
                </div>
                <div className="col-sm-12 col-md-6 watchright  d-flex align-items-center justify-content-center ">
                    <div className='watchrightbox text-capitalize text-center'>
                        <div>
                            <h1 style={{fontSize:"55px"}}>smart watch</h1>
                            <h3>starting from<LuIndianRupee />1699*</h3>
                            <div ><button style={{width: "60%", height: "40px", backgroundColor: "black", color: "white", borderRadius: "10px", marginTop: "10px"}}>shop products <FiArrowRightCircle /></button></div>
                        </div><br></br>
                    </div>
                </div>

            </div>
        </div>
    </>)
}
export default Watch;