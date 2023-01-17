import React, {useState} from 'react'
import {nanoid} from "nanoid";

import './index.scss'
import Product from '../Product'

function ProductList() {
  const initialValue = [
    {
      id: nanoid(),
      isDisabled: false,
      subTitle: 'с фуа-гра',
      textList: [
        <>
          <strong className="text-bold">10</strong> порций
        </>,
        'мышь в подарок',
      ],
      weight: '0,5',
      afterText: 'Печень утки разварная с артишоками.',
    },
    {
      id: nanoid(),
      isDisabled: false,
      subTitle: 'с рыбой',
      textList: [
        <>
          <strong className="text-bold">40</strong> порций
        </>,
        '2 мыши в подарок',
      ],
      weight: '2',
      afterText: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    },
    {
      id: nanoid(),
      isDisabled: true,
      subTitle: 'с курой',
      textList: [
        <>
          <strong className="text-bold">100</strong> порций
        </>,
        <>
          <strong className="text-bold">5</strong> мышей в подарок
        </>,
        'заказчик доволен',
      ],
      weight: '5',
      afterText: 'Филе из цыплят с трюфелями в бульоне.',
    },
  ]

  const [productList] = useState(initialValue)

  return (
    <div className="product-list">
      <div className="product-list__row">
        {productList.map((product) => (
          <div className="product-list__col" key={product.id}>
            <Product {...product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
