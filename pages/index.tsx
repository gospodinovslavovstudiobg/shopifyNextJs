import type { NextPage } from 'next'
import {getProductsInCollection} from "../lib/shopify"
import ProductList from "../components/ProductList"

const Home: NextPage = ({ products }) => {
 
  return (
    <div>
      <ProductList products={products} />
    </div>
  )
}

export default Home

export async function getStaticProps() {

  const products = await getProductsInCollection()
  
  return {
    props:{products}
  }
}
