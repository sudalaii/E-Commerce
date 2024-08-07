import Carousel from 'react-bootstrap/Carousel';

function CaroselNew() {
    return (<>
    <div >
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100" 
                    src="./images/carosel2.webp" 
                    
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/carosel5.webp"
                   
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/caroselnew.webp"
                   
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/caroselnew2.webp"
                   
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/carosel4.webp"
                    
                />
            </Carousel.Item>
        </Carousel>
        </div><br></br>



    </>)
}
export default CaroselNew;