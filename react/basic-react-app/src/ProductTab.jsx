import Product from "./Product"
const ProductTab = () => {
  return (
    <>
    <div className="productLine">
      <Product idx={0} title="Logitech MX Master"/>
      <Product idx={1} title="Title2" />
      <Product idx={2} title="Title3" />
      <Product idx={3} title="Title4" />
    </div>
      
    </>
  )
}

export default ProductTab