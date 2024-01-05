import { v4 as uuidv4 } from "uuid";

import blur4knights1 from "../../dist/products/accessories/4knights/blur/blur4knights1.png";
import blurChainmailScarf1 from "../../dist/products/accessories/chainmailScarf/blur/blurChainmailScarf1.png";
import blurKrioTShirt from "../../dist/products/shirts/krio/blur/blurKrioTShirt.png";
import blurExiledTShirt1 from "../../dist/products/shirts/exiledKingdoms/blur/blurExiledTShirt1.png";
import blurFallenTShirt1 from "../../dist/products/shirts/fallenCentury/blur/blurFallenTShirt1.png";
import blurTeddyModel3 from "../../dist/products/shirts/obscureTeddy/blur/blurTeddyModel3.png";
import blurTankTShirt1 from "../../dist/products/shirts/knightTankTop/blur/blurTankTShirt1.png";
import blurCastleTShirt1 from "../../dist/products/shirts/whiteCastle/blur/blurCastleTShirt1.png";
import blurKnightTShirt1 from "../../dist/products/shirts/whiteKnight/blur/blurKnightTShirt1.png";

import image4knights1 from "../../dist/products/accessories/4knights/4knights1.jpg";
import image4knights2 from "../../dist/products/accessories/4knights/4knights2.jpg";
import image4knights3 from "../../dist/products/accessories/4knights/4knights3.jpg";
import image4knights4 from "../../dist/products/accessories/4knights/4knights4.jpg";
import image4knights5 from "../../dist/products/accessories/4knights/4knights5.jpg";

import chainmailScarf1 from "../../dist/products/accessories/chainmailScarf/chainmailScarf1.jpg";
import chainmailScarf2 from "../../dist/products/accessories/chainmailScarf/chainmailScarf2.jpg";
import krioTShirt from "../../dist/products/shirts/krio/krioTShirt.jpg";
import exiledTShirt1 from "../../dist/products/shirts/exiledKingdoms/exiledTShirt1.jpg";
import fallenTShirt1 from "../../dist/products/shirts/fallenCentury/fallenTShirt1.jpg";
import teddyModel1 from "../../dist/products/shirts/obscureTeddy/teddyModel1.png";
import teddyModel2 from "../../dist/products/shirts/obscureTeddy/teddyModel2.png";
import teddyModel3 from "../../dist/products/shirts/obscureTeddy/teddyModel3.png";
import teddyModel4 from "../../dist/products/shirts/obscureTeddy/teddyModel4.png";
import tankTShirt1 from "../../dist/products/shirts/knightTankTop/tankTShirt1.jpg";
import castleTShirt1 from "../../dist/products/shirts/whiteCastle/castleTShirt1.jpg";
import knightTShirt1 from "../../dist/products/shirts/whiteKnight/knightTShirt1.jpg";

type Product = {
  image: any;
  blurImage: any;
  additionalImage1?: any;
  additionalImage2?: any;
  additionalImage3?: any;
  additionalImage4?: any;
  discounts: string;
  limited: string;
  new: string;
  name: string;
  size: string;
  price: number;
  discountedPrice?: number;
  id: number;
  material?: string;
  DetailsAndCut?: string;
  season?: string;
  color?: string;
  care1?: string;
  care2?: string;
  care3?: string;
  accessories?: boolean;
  description?: string;
};

const products: Product[] = [
  {
    image: image4knights1,
    blurImage: blur4knights1,
    additionalImage1: image4knights2,
    additionalImage2: image4knights3,
    additionalImage3: image4knights4,
    additionalImage4: image4knights5,
    discounts: "",
    limited: "",
    new: "new",
    name: `Sticker pack '4knights'`,
    size: "6x6cm",
    price: 100,
    id: uuidv4(),
    description: "4 different silver chromatic stickers",

    color: "",
    care1: "",
    care2: "",
    care3: "",
    accessories: true,
  },
  {
    image: chainmailScarf1,
    blurImage: blurChainmailScarf1,
    additionalImage1: chainmailScarf2,
    discounts: "",
    limited: "limited",
    new: "new",
    name: "Chainmail scarf",
    size: "180x18",
    price: 800,
    id: uuidv4(),
    material: "Acrylic 100%",
    DetailsAndCut: "Two-sided scarf with brand logo tag sewn into the seam.",
    season: "Demi-season",
    color: "Grey & Black",
    care1:
      "Washing in normal mode at a temperature not higher than 30°С, without spinning",
    care2: "Bleaching is prohibited",
    care3: "Dry in a suspended state, without using artificial drying",
    accessories: true,
  },
  {
    image: krioTShirt,
    blurImage: blurKrioTShirt,
    discounts: "-5%",
    limited: "limited",
    new: "new",
    name: "Krio",
    size: "XS S M L XL XXL",
    price: 1000,
    id: uuidv4(),
    material: "Black polyester",
    DetailsAndCut: "Slightly oversized cut",
    season: "Year round",
    color: "Black",
    care1:
      "Washing in normal mode at a temperature not higher than 30°С, without spinning",
    care2: "Bleaching is prohibited",
    care3: "Dry in a suspended state, without using artificial drying",
    accessories: false,
  },
  {
    image: exiledTShirt1,
    blurImage: blurExiledTShirt1,
    discounts: "",
    limited: "",
    new: "",
    name: "Exiled Kingdoms",
    size: "XS S M L XL XXL",
    price: 800,
    id: uuidv4(),
    material: "White polyester",
    DetailsAndCut: "Slightly oversized cut",
    season: "Year round",
    color: "White",
    care1:
      "Washing in normal mode at a temperature not higher than 30°С, without spinning",
    care2: "Bleaching is prohibited",
    care3: "Dry in a suspended state, without using artificial drying",
    accessories: false,
  },
  {
    image: fallenTShirt1,
    blurImage: blurFallenTShirt1,
    discounts: "-10%",
    limited: "",
    new: "",
    name: "Fallen Century",
    size: "XS S M L XL XXL",
    price: 800,
    id: uuidv4(),
    material: "White polyester",
    DetailsAndCut: "Slightly oversized cut",
    season: "Year round",
    color: "White",
    care1:
      "Washing in normal mode at a temperature not higher than 30°С, without spinning",
    care2: "Bleaching is prohibited",
    care3: "Dry in a suspended state, without using artificial drying",
    accessories: false,
  },
  {
    image: teddyModel3,
    blurImage: blurTeddyModel3,
    additionalImage1: teddyModel1,
    additionalImage2: teddyModel2,
    additionalImage3: teddyModel4,
    id: uuidv4(),
    discounts: "",
    limited: "",
    new: "",
    name: "Obscure Teddy",
    size: "XS S M L XL XXL",
    price: 900,

    material: "Black polyester",
    DetailsAndCut: "Slightly oversized cut",
    season: "Year round",
    color: "Black",
    care1:
      "Washing in normal mode at a temperature not higher than 30°С, without spinning",
    care2: "Bleaching is prohibited",
    care3: "Dry in a suspended state, without using artificial drying",
    accessories: false,
  },
  {
    image: tankTShirt1,
    blurImage: blurTankTShirt1,
    discounts: "-15%",
    limited: "",
    new: "",
    name: "Knight Tank Top",
    size: "XS S M L XL XXL",
    price: 800,
    id: uuidv4(),
    material: "White polyester",
    DetailsAndCut: "Slightly oversized cut",
    season: "Year round",
    color: "White",
    care1:
      "Washing in normal mode at a temperature not higher than 30°С, without spinning",
    care2: "Bleaching is prohibited",
    care3: "Dry in a suspended state, without using artificial drying",
    accessories: false,
  },

  {
    image: castleTShirt1,
    blurImage: blurCastleTShirt1,
    discounts: "-5%",
    limited: "",
    new: "",
    name: "White Castle",
    size: "XS S M L XL XXL",
    price: 800,
    id: uuidv4(),
    material: "White polyester",
    DetailsAndCut: "Slightly oversized cut",
    season: "Year round",
    color: "White",
    care1:
      "Washing in normal mode at a temperature not higher than 30°С, without spinning",
    care2: "Bleaching is prohibited",
    care3: "Dry in a suspended state, without using artificial drying",
    accessories: false,
  },
  {
    image: knightTShirt1,
    blurImage: blurKnightTShirt1,
    discounts: "",
    limited: "",
    new: "",
    name: "White Knight",
    size: "XS S M L XL XXL",
    price: 800,
    id: uuidv4(),
    material: "White polyester",
    DetailsAndCut: "Slightly oversized cut",
    season: "Year round",
    color: "White",
    care1:
      "Washing in normal mode at a temperature not higher than 30°С, without spinning",
    care2: "Bleaching is prohibited",
    care3: "Dry in a suspended state, without using artificial drying",
    accessories: false,
  },
];

const newProducts = products.filter((product) => product.new !== "");

const accessoriesProducts = products.filter(
  (product) => product.accessories === true
);

const clothesProducts = products.filter(
  (product) => product.accessories === false
);

const discountedProducts = products.filter(
  (product) => product.discounts !== ""
);

discountedProducts.forEach((product) => {
  if (product.discounts) {
    const discount = parseInt(product.discounts.replace("%", ""));
    const discountedPrice = product.price + (product.price * discount) / 100;

    product.discountedPrice = discountedPrice;
  }
});

export {
  products,
  discountedProducts,
  newProducts,
  accessoriesProducts,
  clothesProducts,
};
