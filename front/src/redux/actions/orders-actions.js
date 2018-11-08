import axios from 'axios';
const receiveOrders = (orders) => ({
    type: 'RECEIVE_ORDERS',
    orders
  });

export const fetchOrders = (orderSearch = '') => (dispatch) => {    
    axios.get('/api/user/admin/orders/',{
        params: {
            state:orderSearch
            }
        })
    .then(res => res.data)
    .then(orders => dispatch(receiveOrders(orders)))
    // .then(()=>axios.get('/api/checkout/email'))    
}

export const createOrder = (params,id,items) => (dispatch)=>{
    var array=[];
    items.map(item=>{
        for (let i = 0; i < item.quantity; i++) {array.push(item.product.id); }
        })
    axios.post('/api/checkout',{
        id:id,
        firstName: params.firstName.value,
        lastName: params.lastName.value,
        address: params.address.value,
        city: params.city.value,
        province: params.province.value,
        email: params.email.value,
        cellphone: params.cellphone.value,
        products:array,
    })
    .then(res=>res.data)
    .then(order=>{
        axios.post('/api/checkout/email',{orden:order})
    })
}
export const changeOrder = (param,id) => (dispatch) =>{
    axios.put('/api/checkout/update',{
        estado: param,
        id:id
    })
    .then(order=>{
        axios.post('/api/checkout/email',{orden:order.data})
    })
}
export const getOrdersUser = (id) => (dispatch) => {
    axios.get('/api/user/admin/orders/prueba',{  
        params: {
            id:id
        }
    })
    .then(res => res.data)
    .then(orders => {   
        console.log('holaaaaaaa',orders)
    dispatch(receiveOrders(orders))
    })
}
// export const getProductsOrders = (orders) => (dispatch) => {
//     orders.map(order => {
//         order.products.map
//     })
// }