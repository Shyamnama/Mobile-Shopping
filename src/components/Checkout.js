import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component{

    
   handleChecked = (e)=>{
       if(e.target.checked){
           this.props.addShipping();
       }
       else{
           this.props.substractShipping();
       }
   }

   render(){
 
       return(
           <div className="container">
               <div className="collection">
                       <li className="collection-item"><b>Total: {this.props.total} INR</b></li>
                   </div>
                   <div className="checkout">
                       <button className="btn">Checkout</button>
                   </div>
                </div>
       )
   }
}

const mapStateToProps = (state)=>{
   return{
       addedItems: state.addedItems,
       total: state.total
   }
}

const mapDispatchToProps = (dispatch)=>{
   return{
       addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
       substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);