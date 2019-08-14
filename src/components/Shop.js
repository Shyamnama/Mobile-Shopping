import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';

class Shop extends React.Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    } 

    render() {
        
        let itemList = this.props.items.map(item => {
            return(
                <div className="card" key={item.id}>
                    <div className="cardImage">
                        <img src={item.img} alt={item.title}/>
                        <span className="cardTitle">{item.title}</span>
                        <button 
                        className="btnPlus" 
                        onClick={()=>{
                            this.handleClick(item.id)
                        }}
                        >Add to cart</button>
                    </div>

                    <div className="cardContent">
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}</b></p>
                    </div>
                </div>
            );
        })
        
        return ( 
            <div className="container">
                <h3 className="center">Our Items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
         );
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {dispatch(addToCart(id))}
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Shop);