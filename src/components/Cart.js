import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions';
import Checkout from './Checkout';


class Cart extends React.Component {

    handleRemove = (id)=>{
        this.props.removeItem(id);
    }

    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }

    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    // handleCheckout=(price) =>{
    //    alert (`Thank you for Shopping`);
    // }

    render() { 

        let addedItems = this.props.items.length ? 
        (
            this.props.items.map(item=>{
                return(

                    <li className="collection-item" key={item.id}>
                        <div className="item-img">
                            <img src={item.img} alt={item.img}/>
                        </div>

                        <div className="item-desc">
                            <span className="title">{item.title}</span>
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}</b></p>
                            <p><b>Quantity: {item.quantity}</b></p>

                            <div className="add-remove">
                                <Link to="/cart" className="plus" onClick={()=>{this.handleAddQuantity(item.id)}}>
                                    <button className="add" >+</button>
                                </Link>
                                <Link to="/cart" className="minus" onClick={()=>{this.handleSubtractQuantity(item.id)}}>
                                    <button className="sub">-</button>
                                </Link>
                            </div>
                            <button className="btn" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                            {/* <button className="btn" onClick={()=>{this.handleCheckout()}}>CheckOut</button> */}
                        </div>
                    </li>
                );
            })
        ): 

        (
            <h3>Nothing.</h3>
        )

        return ( 
            <div className="container">
                <div className="cart">
                    <h3>You have ordered :</h3>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>
                <Checkout />
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return{
        items: state.addedItems
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Cart);