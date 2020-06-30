import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Carousel } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

import { routes } from "../../services/routes";
import styles from "./Slider.module.css";

export default function Slideview(props) {
  const local = useSelector((state) => state.local.lang);
  return (
    <Carousel controls={false}>
      {props.items.map(({ _id, images, title, description }) => {
        return (
          <Carousel.Item
            key={_id}
            images={images}
            title={title[local]}
            description={description[local]}
          >
            <NavLink to={routes.PROMO}>
              <div className={styles.sliderWrapper}>
                <LazyLoadImage
                  className={styles.sliderImg + " d-block w-100 h-100"}
                  src={images}
                  alt=""
                />
                <div className={styles.sliderOverlay}>
                  <div className={styles.sliderContent}>
                    <p className={styles.sliderPromoDescription}>
                      {description[local]}
                    </p>
                    <h2 className={styles.slidePromoName}>{title[local]}</h2>
                  </div>
                </div>
              </div>
            </NavLink>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
