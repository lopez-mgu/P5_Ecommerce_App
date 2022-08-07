import React from "react";
import { Container, Carousel} from "react-bootstrap";
import './Home.css';

const Home = () => {

    return(
        <>
            <div className="main-section">
                <Container>
                    {/* <img width={1200} height={650} alt="900x500" src="Images/Principal.jpg" /> */}
                    <Carousel>
                        <Carousel.Item>
                            <div className="carousel-img">
                                <img width={1200} height={650} alt="900x500" src="https://img.etimg.com/thumb/msid-78533408,width-1200,height-900,imgsize-633970,resizemode-8,quality-100/industry/cons-products/fashion-/-cosmetics-/-jewellery/all-thanks-to-farmers-gold-jewellery-demand-picks-up-in-rural-india.jpg" />
                            </div>
                            <Carousel.Caption>
                            <h3>Conoce</h3>
                            <p>Conoce nuestro productos.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-img">
                                <img width={1200} height={650} alt="900x500" src="https://f.heart-in-diamond.com/img/home-page-ring-01.jpg" />
                            </div>
                            <Carousel.Caption>
                            <h3>Luce</h3>
                            <p>Luce tus mejores accesorios.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-img">
                                <img width={1200} height={650} alt="900x500" src="https://ae01.alicdn.com/kf/A8c4b5b23ad724e32b0454eaf787dcf88P.jpg" />
                            </div>
                            {/* <Carousel.Caption>
                            <h3>Diviértete</h3>
                            <p>Viendo cómo nuestros bartenders preparan tus bebidas.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    </Carousel>
                </Container>
                <Container className="d-flex main-section-content">
                    <div className="main-section-text">
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. In corrupti ipsam ea, consequatur cumque debitis!</h3>
                        <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum distinctio ipsam ipsum architecto reprehenderit dicta quidem dignissimos fugit expedita laboriosam?</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt debitis, nulla dolor asperiores doloribus facilis.</p>
                    </div>
                    <div className="main-section-box">
                        <div className="box-since">
                            <p>Desde</p>
                            <h5>2022</h5>       
                        </div>
                        <div className="box-location">
                            <p>Ubicación</p>
                            <h5>Ciudad Chihuahua</h5>       
                        </div>
                    </div>
                </Container>

            </div>
        </>
    )
}

export default Home;