import './ExpenseItem.css'

export function ExpenseItem({name, price, img}){

    return (
        <div className="container">
            <div> 
                <p className='productName'>{name}</p>
                <p className='price'>{price}</p>
                </div>
            <img src={img} alt="This is a cool image"/>
        </div>
    )
}