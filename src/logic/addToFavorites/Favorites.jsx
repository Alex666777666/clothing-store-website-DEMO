import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrashCan, faHouse } from "@fortawesome/free-solid-svg-icons";

import { useSelect } from "../../hooks/useSelect";
import { useFavorites } from "../../hooks/useFavorites";

const Favorites = () => {
  const { handleRemoveFromFavorites, favoriteColors } = useFavorites();
  const { handleSelect } = useSelect();

  const favoriteItems = useSelector((state) => state.favorites.favoriteItems);

  return (
    <div className="favorites">
      <div className="favorites__container">
        <div className="chapter">Favorites</div>
        <div className="chapter__line"></div>
        <div className="favorites__body">
          {favoriteItems.length === 0 ? (
            <div className="message__container">
              <p className="message">
                Oops... you need to add here some nice stuff 💜
              </p>
              <li>
                <Link to="/" className="shop-house">
                  Back to home &nbsp;
                  <FontAwesomeIcon icon={faHouse} />
                </Link>
              </li>
            </div>
          ) : (
            favoriteItems.map((item, index) => (
              <div key={index}>
                <picture>
                  <div className="image-wrapper">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={() => handleSelect(item)}
                    >
                      <div
                        className="blur-load"
                        style={{ backgroundImage: `url(${item.blurImage})` }}
                      >
                        <img
                          href={item.link}
                          className="products__image"
                          src={item.image}
                          alt={`Product ${index + 1}`}
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
                    </Link>
                  </div>
                  <Link
                    to={`/product/${item.id}`}
                    onClick={() => handleSelect(item)}
                  >
                    <div className="products__info label">{item.name}</div>
                    <div className="products__info size">
                      {Array.isArray(item.size)
                        ? item.size.join(" ")
                        : item.size}
                    </div>
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
                  </Link>
                  <div
                    className={` heart `}
                    style={{ color: favoriteColors[item.id] || "grey" }}
                    onClick={() => handleRemoveFromFavorites(item)}
                  >
                    Remove from favorites &nbsp;
                    <FontAwesomeIcon icon={faTrashCan} />
                  </div>
                </picture>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
