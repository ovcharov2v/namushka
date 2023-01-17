import React, {FC, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import BaseLayout from '../../layouts/BaseLayout'

interface IProps {
  title?: string
}

const NotFoundPage: FC<IProps> = ({title}) => {
  let counter: ReturnType<typeof setInterval>
  const [counterValue, setCounterValue] = useState(5)
  const navigate = useNavigate()

  const updateCounterValue = () => {
      counter = setInterval(() => {
        setCounterValue(counterValuePrev => counterValuePrev - 1)
      }, 1000)
  }

  useEffect(() => {
    updateCounterValue()
    return () => clearInterval(counter)
  }, [])

  useEffect(() => {
    if (counterValue === 0) {
      navigate('/')
    }
  }, [counterValue])

  return (
    <BaseLayout title={title}>
      <section className="not-found">
        <div className="not-found__top">
          <img className="not-found__image" src="./images/cat-404.svg" alt=""/>
          <h1 className="not-found__404">404</h1>
        </div>
        <div className="not-found__bottom">
          <p className="not-found__text">Страница не существует =(</p>
          <p className="not-found__counter">Переход на Главную через {counterValue}</p>
        </div>
      </section>
    </BaseLayout>
  )
}

export default NotFoundPage
