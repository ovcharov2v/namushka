import React, {FC} from 'react'
import BaseLayout from "../../layouts/BaseLayout"
import ProductList from "../../components/ProductList"

interface IProps {
  title?: string
}

const HomePage: FC<IProps> = ({title}) => {
  return (
    <BaseLayout title={title}>
      <section className="section">
        <h1 className="heading section__title">Ты сегодня покормил кота?</h1>
        <ProductList/>
      </section>
    </BaseLayout>
  )
}

export default HomePage
