import {
	LIST_PRODUCTS, 
	SINGLE_PRODUCT, 
	FILTER_BY_CATEGORY, 
	EDIT_PRODUCT, 
	HANDLE_EDIT, 
	INCLUDE_CATEGORIES, 
	EDITED_PRODUCT
} from '../constants/productsConstants'

const initialSate =[];

export default (state = initialSate, action)=>{
    switch (action.type) {
        
				case EDITED_PRODUCT:
					return Object.assign({}, state, {editedProduct : action.editedProduct});
				
				case LIST_PRODUCTS:   
         	return Object.assign({},state,{ allProducts: action.products });

				case INCLUDE_CATEGORIES:
					return Object.assign ({}, state, { filteredCategories : action.filteredCategories })

				case EDIT_PRODUCT:
					return Object.assign({}, state, { product : action.prod }); 

				case HANDLE_EDIT:
					return Object.assign({}, state, { product : action.prod});
       
			  case 'NEW_PRODUCT':
          return Object.assign({},state,{newProduct:action.newProduct})        
       
			  case 'SEARCH':
          return Object.assign({}, state, {search : action.search})
        
				case SINGLE_PRODUCT:
        	return Object.assign({}, state, {oneProduct : action.oneProduct})
        
				case FILTER_BY_CATEGORY:
        	return Object.assign({}, state, {categories : action.oneProduct})
        
				default:
          return state;

    }
}

