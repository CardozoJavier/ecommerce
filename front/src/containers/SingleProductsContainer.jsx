import React from 'react'

import {connect} from 'react-redux'

import SingleProduct from '../components/SingleProduct'
import {singleProduct} from '../redux/actions/products-actions'
import {addToCart} from '../redux/actions/CartActions'
import ReviewsContainer from './ReviewsContainer'

class SingleProductContainer extends React.Component{
    constructor(props){
        super(props);     
    }
    componentDidMount(){
         
       this.props.singleProduct(this.props.match.params.id)
    }
    render(){
    
    return (
        <div>

            
            <SingleProduct 
             product={this.props.oneProduct}
             addToCart={this.props.addCart}
             /> 
             <ReviewsContainer idProduct={this.props.match.params.id} user={this.props.user} product={this.props.oneProduct}/>
             
        </div>
            
    )
}
}

function mapStateToProps(state){
   
    return({
    oneProduct: state.product.oneProduct,
    user: state.user,
    })
}
function mapDispatchToProps(dispatch){
    return({
        singleProduct:function(id){
            dispatch(singleProduct(id)
            )
        },
        addCart : function(product){
            dispatch(addToCart(product))
        }
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(SingleProductContainer)