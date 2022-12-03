import './ExpenseItem.css'
import {useRef, useEffect} from 'react';


export function ExpenseItem({name, price, img}){

    // cartList = {}

    function buttonClicked(){
        alert("Button clicked")
        // cartItem = {
        //     "amount":"3", 
        //     "name":"ProductName",
        //     "price":"20",
        //     "imgUrl":"This is a dummy url"
        // }
    }

    return (

        <div className="container">
            <div> 
                <p className='productName'>{name}</p>
                <p className='price'>{price}</p>
                <button class= "cartbtn" onClick={buttonClicked} >Add to cart</button>
                </div>
            <img src={img} alt="This is a cool image"/>
            
        </div>
    )
}