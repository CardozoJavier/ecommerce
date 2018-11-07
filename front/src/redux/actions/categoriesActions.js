import axios from 'axios'

const getCategories = (categories) => ({
  type : 'GET_CATEGORIES',
  categories
});

const postActionCategory= (category) => ({
	type : 'POST_CATEGORY',
	category
});

const deleteActionCategory= (category) => ({
	type : 'POST_CATEGORY',
	category
})

export const axiosCategories = () => (dispatch) => {   
  axios.get(`/api/categories`)
		.then (res => res.data)
		.then (data => dispatch(getCategories(data))) 
};

export const postCategory= (categoryName) => (dispatch) => {
	axios.post('/api/categories/newcategory', {
		name : 	categoryName
	})
		.then (res => res.data)
		.then (cat => dispatch(postActionCategory(cat)))
		.then (res => dispatch(axiosCategories()))
};

export const deleteCategory= (categoryId) => (dispatch) => {
	axios.get (`/api/categories/delete/${categoryId}`)
		.then (res => res.data)
		.then (data => dispatch(deleteActionCategory(data)))
}
