import React from 'react'
import {Carousel} from "react-bootstrap";
import iphone13 from '../../assets/img/iphone13.webp'
import airPods from '../../assets/img/airpods.webp'
import macBook from '../../assets/img/macbook-pro-2021-.webp'
import iPad from '../../assets/img/Slide-iPad-.webp'
import watch from '../../assets/img/watches-pc-new.webp'
import cashback from '../../assets/img/cashabck-promotion.webp'
import './SliderHome.scss'
function SliderHome() {
    return (
        <Carousel fade indicators={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={airPods}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={cashback}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={iphone13}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={macBook}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={iPad}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={watch}
                    alt="Third slides"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default SliderHome