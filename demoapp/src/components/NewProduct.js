import './NewProduct.css';
import ProductForm from './ProductForm';

function NewProduct(prob){
    function c(product){
        console.log("you are in newproduct");
        prob.ona(product);
    }
    return(<div className='new-product'>
        <ProductForm onb ={c}></ProductForm>
    </div>)
}

export default NewProduct;