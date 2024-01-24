import React from "react";

import { Link } from "react-router-dom";

import { discountedProducts } from "../../logic/ProductsLogic/productsList.ts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { useFavorites } from "../../hooks/useFavorites.js";
import { useSelect } from "../../hooks/useSelect.js";

const Discounts = () => {
  const { favoriteColors, handleToFavorites, handleRemoveFromFavorites } =
    useFavorites();
  const { handleSelect } = useSelect();

  return (
    <>
      <div className="chapter">Discounts</div>
      <div className="chapter__line"></div>
      <div className="products__container">
        {discountedProducts.map((product, index) => (
          <div key={index}>
            <picture>
              <div className="image-wrapper">
                <Link
                  to={`/product/${product.id}`}
                  onClick={() => handleSelect(product)}
                >
                  <div
                    className="blur-load"
                    style={{ backgroundImage: `url(${product.blurImage})` }}
                  >
                    <img
                      className="products__image"
                      src={product.image}
                      alt={`Product ${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="products__info discounts">
                    {product.discounts}
                  </div>
                  <div className="products__info limited">
                    {product.limited}
                  </div>
                  <div className="products__info new">{product.new}</div>
                </Link>
              </div>
              <Link
                to={`/product/${product.id}`}
                onClick={() => handleSelect(product)}
              >
                <div className="products__info label">{product.name}</div>
                <div className="products__info size">
                  {Array.isArray(product.size)
                    ? product.size.join(" ")
                    : product.size}
                </div>
                <div className="products__info price">
                  {product.discounts ? (
                    <>
                      <span className={`products__info price-decrease`}>
                        {product.price} грн
                      </span>
                      <span className={`products__info price`}>
                        &nbsp; {product.discountedPrice} грн
                      </span>
                    </>
                  ) : (
                    `${product.price} грн`
                  )}
                </div>
              </Link>
              <div
                className={`heart`}
                style={{ color: favoriteColors[product.id] || "grey" }}
                onClick={() => {
                  if (favoriteColors[product.id] === "red") {
                    handleRemoveFromFavorites(product);
                  } else {
                    handleToFavorites(product);
                  }
                }}
              >
                {favoriteColors[product.id] === "red" ? (
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
              </div>
            </picture>
          </div>
        ))}
      </div>
    </>
  );
};

export default Discounts;
