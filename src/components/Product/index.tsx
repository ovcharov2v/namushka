import React, {ReactElement, useState} from 'react'
import classnames from 'classnames'

import './index.scss'

interface IProps {
  id: string
  isDisabled: boolean
  subTitle: string
  textList: (string | ReactElement)[]
  weight: string
  afterText: string
}

function Product({isDisabled, subTitle, textList, weight, afterText}: IProps) {
  const [productState, setProductState] = useState({
    isDisabled,
    isSelected: false,
    isHovered: false,
    isSelectedHovered: false,
  })

  const handleSelect = () => {
    if (isDisabled) return
    setProductState({
      ...productState,
      isSelected: !productState.isSelected,
      isHovered: false,
      isSelectedHovered: false
    })
  }

  const handleMouseEnter = () => {
    if (isDisabled) return
    const hoverState = productState.isSelected ? {isSelectedHovered: true} : {isHovered: true}
    setProductState({...productState, ...hoverState})
  }

  const handleMouseLeave = () => {
    if (isDisabled) return
    const hoverState = {isHovered: false, isSelectedHovered: false}
    setProductState({...productState, ...hoverState})
  }

  const productClassList = classnames(
    'product',
    {'product--disabled': isDisabled},
    {'product--selected': (productState.isSelected && !isDisabled)},
    {'product--hovered': productState.isHovered},
    {'product--selected-hovered': productState.isSelectedHovered},
  )

  return (
    <article
      className={productClassList}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="product__card" onClick={handleSelect} role="presentation">
        <div className="product__card-content">
          {!(productState.isSelected && productState.isSelectedHovered) && (
            <p className="product__top-text">Сказочное заморское яство</p>
          )}
          {(productState.isSelected && productState.isSelectedHovered) && (
            <p className="product__top-text product__top-text--red">Котэ не одобряет?</p>
          )}
          <h2 className="product__title">Нямушка</h2>
          <p className="product__sub-title">{subTitle}</p>
          <ul className="product__text-list">
            {textList.map((text, index) => {
              return <li className="product__text" key={index}>{text}</li>
            })}
          </ul>
          <picture>
            <source
              srcSet="./images/cat@1x.webp 1x, ./images/cat@2x.webp 2x"
              type="image/webp"
            />
            <img
              src="./images/cat@1x.png"
              srcSet="./images/cat@2x.png 2x"
              alt="Питомец"
              className="product__image"
            />
          </picture>
          <p className="product__weight-box">
            {weight}
            <small className="product__weight-unit">кг</small>
          </p>
        </div>
      </div>
      <p className="product__after-text">
        {productState.isDisabled && (<>Печалька, {subTitle} закончился.</>)}
        {!productState.isDisabled && productState.isSelected && (afterText)}
        {!productState.isDisabled && !productState.isSelected && (
          <>
            Чего сидишь? Порадуй котэ,
            <button
              className="product__after-action"
              onClick={handleSelect}
            >
              купи.
            </button>
          </>
        )}
      </p>
    </article>
  )
}

export default Product
