import blurArmureScarf1 from '../../dist/products/accessories/scarfArmureExquise/blur/blurArmureScarf1.png'
import blurArmureScarf2 from '../../dist/products/accessories/scarfArmureExquise/blur/blurArmureScarf2.png'
import blurKrioTShirt from '../../dist/products/shirts/krio/blur/blurKrioTShirt.png'
import blurExiledTShirt1 from '../../dist/products/shirts/exiledKingdoms/blur/blurExiledTShirt1.png'
import blurFallenTShirt1 from '../../dist/products/shirts/fallenCentury/blur/blurFallenTShirt1.png'
import blurFreddyModel1 from '../../dist/products/shirts/freddyFazber/blur/blurFreddyModel1.png'
import blurFreddyModel2 from '../../dist/products/shirts/freddyFazber/blur/blurFreddyModel2.png'
import blurFreddyModel3 from '../../dist/products/shirts/freddyFazber/blur/blurFreddyModel3.png'
import blurFreddyModel4 from '../../dist/products/shirts/freddyFazber/blur/blurFreddyModel4.png'
import blurTankTShirt1 from '../../dist/products/shirts/knightTankTop/blur/blurTankTShirt1.png'
import blurCastleTShirt1 from '../../dist/products/shirts/whiteCastle/blur/blurCastleTShirt1.png'
import blurKnightTShirt1 from '../../dist/products/shirts/whiteKnight/blur/blurKnightTShirt1.png'

import armureScarf1 from '../../dist/products/accessories/scarfArmureExquise/armureScarf1.jpg'
import armureScarf2 from '../../dist/products/accessories/scarfArmureExquise/armureScarf2.jpg'
import krioTShirt from '../../dist/products/shirts/krio/krioTShirt.jpg'
import exiledTShirt1 from '../../dist/products/shirts/exiledKingdoms/exiledTShirt1.jpg'
import fallenTShirt1 from '../../dist/products/shirts/fallenCentury/fallenTShirt1.jpg'
import freddyModel1 from '../../dist/products/shirts/freddyFazber/freddyModel1.png'
import freddyModel2 from '../../dist/products/shirts/freddyFazber/freddyModel2.png'
import freddyModel3 from '../../dist/products/shirts/freddyFazber/freddyModel3.png'
import freddyModel4 from '../../dist/products/shirts/freddyFazber/freddyModel4.png'
import tankTShirt1 from '../../dist/products/shirts/knightTankTop/tankTShirt1.jpg'
import castleTShirt1 from '../../dist/products/shirts/whiteCastle/castleTShirt1.jpg'
import knightTShirt1 from '../../dist/products/shirts/whiteKnight/knightTShirt1.jpg'

type Product = {
  image: any
  blurImage: any
  additionalImage1?: any
  additionalImage2?: any
  additionalImage3?: any
  discounts: string
  limited: string
  new: string
  name: string
  size: string
  price: number
  discountedPrice?: number
  id: number
  material: string
  DetailsAndCut: string
  season?: string
  color: string
  care1: string
  care2: string
  care3: string
  accessories?: boolean
}

const products: Product[] = [
  {
    image: armureScarf1,
    blurImage: blurArmureScarf1,
    additionalImage1: armureScarf2,
    discounts: '',
    limited: 'limited',
    new: 'new',
    name: 'Scarf Armure Exquise',
    size: '180x18',
    price: 800,
    id: Math.floor(Math.random() * 100),
    material: 'Acrylic 100%',
    DetailsAndCut: 'Two-sided scarf with brand logo tag sewn into the seam.',
    season: 'Demi-season',
    color: 'Grey & Black',
    care1:
      'Washing in normal mode at a temperature not higher than 30°С, without spinning',
    care2: 'Bleaching is prohibited',
    care3: 'Dry in a suspended state, without using artificial drying',
    accessories: true,
  },
  {
    image: krioTShirt,
    blurImage: blurKrioTShirt,
    discounts: '-5%',
    limited: 'limited',
    new: 'new',
    name: 'Krio',
    size: 'XS S M L XL XXL',
    price: 1000,
    id: Math.floor(Math.random() * 100),
    material: 'Black polyester',
    DetailsAndCut: 'Slightly oversized cut',
    season: 'Year round',
    color: 'Black',
    care1:
      'Washing in normal mode at a temperature not higher than 30°С, without spinning',
    care2: 'Bleaching is prohibited',
    care3: 'Dry in a suspended state, without using artificial drying',
    accessories: false,
  },
  {
    image: exiledTShirt1,
    blurImage: blurExiledTShirt1,
    discounts: '',
    limited: '',
    new: '',
    name: 'Exiled Kingdoms',
    size: 'XS S M L XL XXL',
    price: 800,
    id: Math.floor(Math.random() * 100),
    material: 'White polyester',
    DetailsAndCut: 'Slightly oversized cut',
    season: 'Year round',
    color: 'White',
    care1:
      'Washing in normal mode at a temperature not higher than 30°С, without spinning',
    care2: 'Bleaching is prohibited',
    care3: 'Dry in a suspended state, without using artificial drying',
    accessories: false,
  },
  {
    image: fallenTShirt1,
    blurImage: blurFallenTShirt1,
    discounts: '-10%',
    limited: '',
    new: '',
    name: 'Fallen Century',
    size: 'XS S M L XL XXL',
    price: 800,
    id: Math.floor(Math.random() * 100),
    material: 'White polyester',
    DetailsAndCut: 'Slightly oversized cut',
    season: 'Year round',
    color: 'White',
    care1:
      'Washing in normal mode at a temperature not higher than 30°С, without spinning',
    care2: 'Bleaching is prohibited',
    care3: 'Dry in a suspended state, without using artificial drying',
    accessories: false,
  },
  {
    image: freddyModel3,
    blurImage: blurFreddyModel3,
    additionalImage1: freddyModel1,
    additionalImage2: freddyModel2,
    additionalImage3: freddyModel4,
    id: Math.floor(Math.random() * 100),
    discounts: '-10%',
    limited: '',
    new: '',
    name: 'Freddy Fazber',
    size: 'XS S M L XL XXL',
    price: 800,

    material: 'Black polyester',
    DetailsAndCut: 'Slightly oversized cut',
    season: 'Year round',
    color: 'Black',
    care1:
      'Washing in normal mode at a temperature not higher than 30°С, without spinning',
    care2: 'Bleaching is prohibited',
    care3: 'Dry in a suspended state, without using artificial drying',
    accessories: false,
  },
  {
    image: tankTShirt1,
    blurImage: blurTankTShirt1,
    discounts: '-15%',
    limited: '',
    new: '',
    name: 'Knight Tank Top',
    size: 'XS S M L XL XXL',
    price: 800,
    id: Math.floor(Math.random() * 100),
    material: 'White polyester',
    DetailsAndCut: 'Slightly oversized cut',
    season: 'Year round',
    color: 'White',
    care1:
      'Washing in normal mode at a temperature not higher than 30°С, without spinning',
    care2: 'Bleaching is prohibited',
    care3: 'Dry in a suspended state, without using artificial drying',
    accessories: false,
  },

  {
    image: castleTShirt1,
    blurImage: blurCastleTShirt1,
    discounts: '-5%',
    limited: '',
    new: '',
    name: 'White Castle',
    size: 'XS S M L XL XXL',
    price: 800,
    id: Math.floor(Math.random() * 100),
    material: 'White polyester',
    DetailsAndCut: 'Slightly oversized cut',
    season: 'Year round',
    color: 'White',
    care1:
      'Washing in normal mode at a temperature not higher than 30°С, without spinning',
    care2: 'Bleaching is prohibited',
    care3: 'Dry in a suspended state, without using artificial drying',
    accessories: false,
  },
  {
    image: knightTShirt1,
    blurImage: blurKnightTShirt1,
    discounts: '',
    limited: '',
    new: '',
    name: 'White Knight',
    size: 'XS S M L XL XXL',
    price: 800,
    id: Math.floor(Math.random() * 100),
    material: 'White polyester',
    DetailsAndCut: 'Slightly oversized cut',
    season: 'Year round',
    color: 'White',
    care1:
      'Washing in normal mode at a temperature not higher than 30°С, without spinning',
    care2: 'Bleaching is prohibited',
    care3: 'Dry in a suspended state, without using artificial drying',
    accessories: false,
  },
]

const newProducts = products.filter(product => product.new !== '')

const accessoriesProducts = products.filter(
  product => product.accessories === true
)

const clothesProducts = products.filter(
  product => product.accessories === false
)

const discountedProducts = products.filter(product => product.discounts !== '')

discountedProducts.forEach(product => {
  if (product.discounts) {
    const discount = parseInt(product.discounts.replace('%', ''))
    const discountedPrice = product.price + (product.price * discount) / 100

    product.discountedPrice = discountedPrice
  }
})

export {
  products,
  discountedProducts,
  newProducts,
  accessoriesProducts,
  clothesProducts,
}
