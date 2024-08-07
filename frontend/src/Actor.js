import { FiArrowRightCircle } from "react-icons/fi";
import Card from 'react-bootstrap/Card';

function Actor(){
    return(
        <div className='container-fluid actor-container'>
            <h1 className='text-center'>Shop by Lifestyle</h1>
            <div className='row'>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <Card className="custom-card" style={{ border: "none"}}>
                        <Card.Img variant="top" src="/images/a1.webp" className="custom-card-img-top" />
                        <Card.Body >
                            <Card.Title className='text-center'>
                                <h2>For Fitness</h2>
                                <div className="d-flex justify-content-center align-items-center" style={{ fontSize: "15px", color: "#2F5B96" }}>
                                    <div>View All</div><span className='arrow-icon'><FiArrowRightCircle /></span>
                                </div>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <Card className="custom-card" style={{ border: "none" }}>
                        <Card.Img variant="top" src="/images/a2.webp" className="custom-card-img-top" />
                        <Card.Body >
                            <Card.Title className='text-center'>
                                <h2>For Parties</h2>
                                <div className="d-flex justify-content-center align-items-center" style={{ fontSize: "15px", color: "#2F5B96" }}>
                                    <div>View All</div><span className='arrow-icon'><FiArrowRightCircle /></span>
                                </div>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <Card className="custom-card" style={{ borderRadius: '15px', border: "none" }}>
                        <Card.Img variant="top" src="/images/a3.webp" className="custom-card-img-top" />
                        <Card.Body >
                            <Card.Title className='text-center'>
                                <h2>For Work</h2>
                                <div className="d-flex justify-content-center align-items-center" style={{ fontSize: "15px", color: "#2F5B96" }}>
                                    <div>View All</div><span className='arrow-icon'><FiArrowRightCircle /></span>
                                </div>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <Card className="custom-card" style={{ border: "none" }}>
                        <Card.Img variant="top" src="/images/a4.webp" className="custom-card-img-top" />
                        <Card.Body >
                            <Card.Title className='text-center'>
                                <h2>For Audiophiles</h2>
                                <div className="d-flex justify-content-center align-items-center" style={{ fontSize: "15px", color: "#2F5B96" }}>
                                    <div>View All</div><span className='arrow-icon'><FiArrowRightCircle /></span>
                                </div>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Actor;
