import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

import styles from "./Slider.module.css";

export default class Slideview extends Component {
  render() {
    return (
      <Carousel controls={false}>
        {this.props.items.map(({ _id, images, title, description }) => {
          return (
            <Carousel.Item
              key={_id}
              images={images}
              title={title}
              description={description}
            >
              <div className={styles.sliderWrapper}>
                <img
                  className={styles.sliderImg + " " + "d-block w-100 h-100"}
                  src={images}
                  alt=""
                />
                <div className={styles.sliderOverlay}>
                  <div className={styles.sliderContent}>
                    <p className={styles.sliderPromoDescription}>
                      {description}
                    </p>
                    <h2 className={styles.slidePromoName}>{title}</h2>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}
