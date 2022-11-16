import React from 'react'
import Slider from "react-slick"
import './feedback.css'

const Feedback = () => {
    const settings = {
        dots: true,
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false
    };
    return (
        /* Feedback Section */
        <section className="feedback section-padding section-bg">
            <div className="container">
                <div className="feedback__header text-center mb-3">
                    <h1 className="feedback__heading d-inline-block quote quote--right">What clients <br/>Feedback about me</h1>
                </div>
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <Slider {...settings} className="feedback__slider">
                            <div className="feedback__block quote quote--left text-center py-4 px-1">
                                <img src="./assets/images/feedback.png" alt="feedback" className="feedback__img rounded-circle d-inline-block img-fluid" />
                                <h5 className="feedback__client h6 text-uppercase mt-3">Allen Bell</h5>
                                <h6 className="feedback__role mb-4">Ux Designer</h6>
                                <p className="feedback__txt">Fleeing from the Cylon tyranny the last Battlestar - Galactica - eads a rag - tag fugitive fleet on a lonely quest - a shining planet known as Earth? Texas tea.Its mission - to explore strange new worlds to seek out new life and new civilizations to boldly go where no man has gone before. Doin' it our way.</p>
                            </div>
                            <div className="feedback__block quote quote--left text-center py-4 px-1">
                                <img src="./assets/images/feedback.png" alt="feedback" className="feedback__img rounded-circle d-inline-block img-fluid" />
                                <h5 className="feedback__client h6 text-uppercase mt-3">Allen Bell</h5>
                                <h6 className="feedback__role mb-4">Ux Designer</h6>
                                <p className="feedback__txt">Fleeing from the Cylon tyranny the last Battlestar - Galactica - eads a rag - tag fugitive fleet on a lonely quest - a shining planet known as Earth? Texas tea.Its mission - to explore strange new worlds to seek out new life and new civilizations to boldly go where no man has gone before. Doin' it our way.</p>
                            </div>
                            <div className="feedback__block quote quote--left text-center py-4 px-1">
                                <img src="./assets/images/feedback.png" alt="feedback" className="feedback__img rounded-circle d-inline-block img-fluid" />
                                <h5 className="feedback__client h6 text-uppercase mt-3">Allen Bell</h5>
                                <h6 className="feedback__role mb-4">Ux Designer</h6>
                                <p className="feedback__txt">Fleeing from the Cylon tyranny the last Battlestar - Galactica - eads a rag - tag fugitive fleet on a lonely quest - a shining planet known as Earth? Texas tea.Its mission - to explore strange new worlds to seek out new life and new civilizations to boldly go where no man has gone before. Doin' it our way.</p>
                            </div>
                            <div className="feedback__block quote quote--left text-center py-4 px-1">
                                <img src="./assets/images/feedback.png" alt="feedback" className="feedback__img rounded-circle d-inline-block img-fluid" />
                                <h5 className="feedback__client h6 text-uppercase mt-3">Allen Bell</h5>
                                <h6 className="feedback__role mb-4">Ux Designer</h6>
                                <p className="feedback__txt">Fleeing from the Cylon tyranny the last Battlestar - Galactica - eads a rag - tag fugitive fleet on a lonely quest - a shining planet known as Earth? Texas tea.Its mission - to explore strange new worlds to seek out new life and new civilizations to boldly go where no man has gone before. Doin' it our way.</p>
                            </div>
                            <div className="feedback__block quote quote--left text-center py-4 px-1">
                                <img src="./assets/images/feedback.png" alt="feedback" className="feedback__img rounded-circle d-inline-block img-fluid" />
                                <h5 className="feedback__client h6 text-uppercase mt-3">Allen Bell</h5>
                                <h6 className="feedback__role mb-4">Ux Designer</h6>
                                <p className="feedback__txt">Fleeing from the Cylon tyranny the last Battlestar - Galactica - eads a rag - tag fugitive fleet on a lonely quest - a shining planet known as Earth? Texas tea.Its mission - to explore strange new worlds to seek out new life and new civilizations to boldly go where no man has gone before. Doin' it our way.</p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feedback