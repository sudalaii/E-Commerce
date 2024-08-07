import Image from 'react-bootstrap/Image';
import Footer from './Footer';
function Home2() {
    return (
        <>
            <div>
                <Image src="/images/g1.webp" fluid />
            </div>
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 '>
                            <Image src="/images/g2.webp" fluid />
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 '>
                            <Image src="/images/g3.webp" fluid />
                        </div>

                    </div>

                </div>
            </div>
            <div>
                <Image src="/images/g4.webp" fluid />
            </div>
            <div className='container'>
                <Image src="/images/g6.webp" fluid />
            </div>
            <div>
                <Image src="/images/g7.webp" fluid />
            </div>
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 '>
                            <Image src="/images/g9.webp" fluid />
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 '>
                            <Image src="/images/g8.webp" fluid />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Image src="/images/g10.webp" fluid />
            </div>
            <div>
                <Image src="/images/g11.webp" fluid />
            </div>
            <Footer/>
        </>
    )
}
export default Home2