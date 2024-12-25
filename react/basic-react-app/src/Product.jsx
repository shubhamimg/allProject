import './assets/css/product.css'
import Price from './Price'
const Product = ({title, idx}) => {
  let oldPrice = ["1200", "63535", "6252", "9272"];
  let newPrice = ["2628", "2727", "262662", "82828"];
  let description = ["descrption1", "descrption2", "descrption3", "descrption4"]
  let doSomething = () =>{
    console.log("Button Was Clicked");
    
  }
  return (
    <>
      <div className="card">
        <h3 className='productCard'>
         {title}
        </h3>
        <p>{description[idx]}</p>
        <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        <button onClick={doSomething}>Purchase</button>
      </div>
    </>
  )
}

export default Product