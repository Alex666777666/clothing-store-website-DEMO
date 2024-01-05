import React from "react";
import { useSelector } from "react-redux";

import { useFavorites } from "../../hooks/useFavorites";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faTrashCan,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Selected = () => {
  const { favoriteColors, handleToFavorites, handleRemoveFromFavorites } =
    useFavorites();

  const selectedItem = useSelector((state) => state.selected.selectedItem);

  return (
    <div className="selected">
      <div className="selected__container">
        <div className="selected__body">
          {selectedItem.length === 0 ? (
            <p className="message">
              Oops... you need to add here some nice stuff 💜
            </p>
          ) : (
            selectedItem.map((item, index) => (
              <div key={index} className="selected__wrapper">
                <div className="carouselSelect__container">
                  <Carousel
                    showArrows={true}
                    emulateTouch={true}
                    showStatus={false}
                    showThumbs={true}
                    swipeable={true}
                    selectedItem={0}
                  >
                    {[
                      item.image,
                      item.additionalImage1,
                      item.additionalImage2,
                      item.additionalImage3,
                    ]
                      .filter((image) => image)
                      .map((image, idx) => (
                        <div key={idx}>
                          <div
                            className="blur-load"
                            style={{
                              backgroundImage: `url(${item.blurImage})`,
                            }}
                          >
                            <img
                              className="selected__image"
                              src={image}
                              alt={`Image ${idx + 1}`}
                              loading="lazy"
                            />
                          </div>
                          <div className="products__info discounts">
                            {item.discounts}
                          </div>
                          <div className="products__info limited">
                            {item.limited}
                          </div>
                          <div className="products__info new">{item.new}</div>
                        </div>
                      ))}
                  </Carousel>
                </div>
                <div className="selected__info">
                  <div className="products__info label">{item.name}</div>
                  <div className="products__info size">{item.size}</div>
                  <div className="products__info price">
                    {item.discounts ? (
                      <>
                        <span className={`products__info price-decrease`}>
                          {item.price} грн
                        </span>
                        <span className={`products__info price`}>
                          &nbsp; {item.discountedPrice} грн
                        </span>
                      </>
                    ) : (
                      `${item.price} грн`
                    )}
                  </div>
                  <div className="info__container ">
                    {item.material && (
                      <>
                        <h2 className="info__title">Material</h2>
                        <div className="info__product">{item.material}</div>
                      </>
                    )}
                    {item.DetailsAndCut && (
                      <>
                        <h2 className="info__title">Details & Cut</h2>
                        <div className="info__product">
                          {item.DetailsAndCut}
                        </div>
                      </>
                    )}
                    {item.description && (
                      <>
                        <h2 className="info__title">Description</h2>
                        <div className="info__product">{item.description}</div>
                      </>
                    )}
                    {item.season && (
                      <>
                        <h2 className="info__title">Season</h2>
                        <div className="info__product">{item.season}</div>
                      </>
                    )}
                    {item.color && (
                      <>
                        <h2 className="info__title">Color</h2>
                        <div className="info__product">{item.color}</div>
                      </>
                    )}
                    {item.care1 && item.care2 && item.care3 && (
                      <>
                        <h2 className="info__title">Care</h2>
                        <div className="care_container">
                          <div className="info__product">{item.care1}</div>
                          <div className="info__product">{item.care2}</div>
                          <div className="info__product">{item.care3}</div>
                        </div>
                      </>
                    )}
                    <div className="add_container-select">
                      <span
                        className={`selected__heart heart `}
                        style={{ color: favoriteColors[item.id] || "grey" }}
                        onClick={() => {
                          if (favoriteColors[item.id] === "red") {
                            handleRemoveFromFavorites(item);
                          } else {
                            handleToFavorites(item);
                          }
                        }}
                      >
                        {favoriteColors[item.id] === "red" ? (
                          <>
                            Remove from favorites &nbsp;
                            <FontAwesomeIcon icon={faTrashCan} />
                          </>
                        ) : (
                          <>
                            Add to favorites &nbsp;
                            <FontAwesomeIcon icon={faHeart} />
                          </>
                        )}
                      </span>

                      <span className="selected__cart cart">
                        Add to cart &nbsp;
                        <FontAwesomeIcon icon={faCartShopping} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Selected;
