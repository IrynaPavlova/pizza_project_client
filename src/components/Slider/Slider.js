import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

import slide1 from "../../assets/img/slides/sl1.png";
import slide2 from "../../assets/img/slides/sl2.png";
import slide3 from "../../assets/img/slides/sl3.png";
import slide4 from "../../assets/img/slides/sl4.png";
import slide5 from "../../assets/img/slides/sl5.png";

import styles from "./Slider.module.css";

export default class Slideview extends Component {
  render() {
    return (
      <Carousel controls={false}>
        <Carousel.Item>
          <div className={styles.sliderWrapper}>
            <img className="d-block w-100 h-100" src={slide1} alt="slideOne" />
            <div className={styles.sliderOverlay}>
              <div className={styles.sliderContent}>
                <p className={styles.sliderPromoDescription}>
                  любая пицца по фиксированной цене
                </p>
                <h2 className={styles.slidePromoName}>бесплатная доставка</h2>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.sliderWrapper}>
            <img className="d-block w-100 h-100" src={slide2} alt="slideTwo" />
            <div className={styles.sliderOverlay}>
              <div className={styles.sliderContent}>
                <p className={styles.sliderPromoDescription}>
                  13-я пицца за 50%
                </p>
                <h2 className={styles.slidePromoName}>
                  cверхъестественное везение
                </h2>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.sliderWrapper}>
            <img
              className="d-block w-100 h-100"
              src={slide3}
              alt="slideThree"
            />
            <div className={styles.sliderOverlay}>
              <div className={styles.sliderContent}>
                <p className={styles.sliderPromoDescription}>
                  скидка именнинику 25%
                </p>
                <h2 className={styles.slidePromoName}>ура! я родился!</h2>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.sliderWrapper}>
            <img className="d-block w-100 h-100" src={slide4} alt="slideFour" />
            <div className={styles.sliderOverlay}>
              <div className={styles.sliderContent}>
                <p className={styles.sliderPromoDescription}>
                  при заказе 3-х пицц L или XL 4-я в подарок
                </p>
                <h2 className={styles.slidePromoName}>большая компания</h2>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.sliderWrapper}>
            <img className="d-block w-100 h-100" src={slide5} alt="slideFive" />
            <div className={styles.sliderOverlay}>
              <div className={styles.sliderContent}>
                <p className={styles.sliderPromoDescription}>
                  собери сам свою пиццу
                </p>
                <h2 className={styles.slidePromoName}>пицца-конструктор</h2>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
}
