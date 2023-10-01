import { useState } from 'react';
import './ProductForm.css';

function ProductForm(props){

    const [NewTitle,setTitle] = useState('');
    const [NewDate,setDate] = useState('');

    function dateChangeHandler(event){
        setDate(event.target.value);
    }
    function titleChangeHandler(event){
        setTitle(event.target.value);
    }

    // const [fullProductInput,SetFullProductInput] = useState({
    //     title:'',
    //     date:''
    // })

    // function titleChangeHandler(event, prevState){
    //     let obj={...prevState, title:event.target.value};
    //     console.log(obj);
    //     return obj;
    //  }

    //  function dateChangeHandler(event){
    //     //     setDate(event.target.value);
    //  }


    
    function submitHndler(event){
        event.preventDefault();

        const productDate ={
            title:NewTitle,
            date:NewDate
        }

        // console.log(productDate);
        props.onb(productDate);
        console.log("you are in productform");
    }
    return (<form onSubmit={submitHndler}>

        <div className='sss'>
        <div className='new-product-title'>
            <label>Title</label>
            <input type='text' value={NewTitle} onChange={titleChangeHandler}></input>
        </div>

        <div className='new-product-date'>
            <label>Date</label>
            <input type='date' min='2023-01-01' max='2023-12-12'  value={NewDate} onChange={dateChangeHandler}></input>
        </div>
        
        <div className='new-product-button'>
            <button type='submit'>add Product</button>
        </div>
        </div>
        
    </form>)
}

export default ProductForm;