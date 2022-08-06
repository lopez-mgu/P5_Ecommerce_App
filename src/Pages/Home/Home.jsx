import React from "react";
import { Container, Carousel} from "react-bootstrap";
import './Home.css';

const Home = () => {

    return(
        <>
            <div className="main-section">
                <Container>
                    <Carousel>
                        <Carousel.Item>
                            <div className="carousel-img">
                                <img width={1200} height={650} alt="900x500" src="Images/Principal.jpg" />
                            </div>
                            <Carousel.Caption>
                            <h3>Explora</h3>
                            <p>Con nuestros cocteles internacionales.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-img">
                                <img width={1200} height={650} alt="900x500" src="Images/Principal02.jpg" />
                            </div>
                            <Carousel.Caption>
                            <h3>Disfruta</h3>
                            <p>De los mejores y más exóticos sabores.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-img">
                                <img width={1200} height={650} alt="900x500" src="Images/Principal03.png" />
                            </div>
                            <Carousel.Caption>
                            <h3>Diviértete</h3>
                            <p>Viendo cómo nuestros bartenders preparan tus bebidas.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
                <Container className="d-flex main-section-content">
                    <div className="main-section-text">
                        <h3>En Cocktail Avenue Vive la Experiencia con tus Bebidas Favoritas.</h3>
                        <h5>nuestro menú y forma de preparalo te llevará a otro nivel de diverisón, donde no solo disfrutaras de tu bebida preferida, sino que verás a los mejores bartenders preparalas frente a ti.</h5>
                        <p>Somos una nueva versión de entretenimiento dónde encontrarás desde lo exotico a lo común de tus bebidas preferidas.</p>
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