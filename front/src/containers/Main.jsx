import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'
import {isLogged} from '../redux/actions/userActions'
import {connect} from 'react-redux'

//CONTAINERS
import OrderContainer from './OrderContainer';
import Cart from './CartContainer'
import HeaderContainer from './HeaderContainer';
import ProductsContainer from './ProductsContainer'
import SingleProductsContainer from './SingleProductsContainer'
import ProductManagerContainer from './ProductManagerContainer';
import RegisterContainer from './RegisterContainer';
import CreateCategoryContainer from './CreateCategoryContainer';
import CreateProductContainer from './CreateProductContainer';
import CheckoutContainer from './CheckoutContainer';
import LoginContainer from './LoginContainer';
import CartContainer from './CartContainer'

//COMPONENTS
import PrivateProfile from '../components/PrivateProfile';

class Main extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
     this.props.isLogged()
    //  console.log(sessionStorage.getItem('cart'))
    }
    render(){
        return (        
            <div>
                <HeaderContainer/>
                <CartContainer />
                <div className="row">
                    <CartContainer />
                    <div className="col-xs-9 col-sm-9">
                    <Switch>
						            <Route exact path='/products/:id/edit' component= {ProductsContainer} />
                        <Route exact path="/products" component={ProductsContainer} />
                        {this.props.user.access ? 
                            <Route exact path='/user/admin/orders' component={OrderContainer}/>
                        : null}
                        {this.props.user.access ? 
                            <Route path='/user/admin' component= {ProductManagerContainer} />
                        : null}
                        {this.props.user.access ? 
                            <Route path='/products/newproduct' component= {CreateProductContainer} />
                        : null}
                        {this.props.user.access ? 
                            <Route path='/categories/newcategory' component={CreateCategoryContainer} />
                        : null}
                        <Route path="/register" component={RegisterContainer}/>
                        <Route path="/login" component={LoginContainer}/>
                        <Route path="/
                        " component={PrivateProfile}/>
                        <Route path="/products/:id" component={SingleProductsContainer} />
                        <Route path='/cart/checkout' component={CheckoutContainer} />
                        <Route path="/cart" component={Cart} />
                    </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
  
        
    


function mapStateToProps(state){
    //    console.log(state)
    return{ user: state.user,
    }
};
function mapDispatchToProps(dispatch){
    return{
        isLogged: function(){
            dispatch(isLogged())
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Main)
