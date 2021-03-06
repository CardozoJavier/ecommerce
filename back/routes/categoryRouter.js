const express= require ('express');
const router= express();
const Category = require('../db/models/Category')
const Product =require('../db/models/Product')

router.get ('/', (req,res) => {
	Category.findAll({})
	.then(response=>{
		res.send(response)
	})
})
router.get ('/delete/:id', (req,res) => {
	Category.findOne({ where : {id : req.params.id} })
		.then (cat => cat.destroy())
})

router.get ('/:id', (req,res) => {
	// const id = req.params.id;
	// Category.findOne({where:{id}})
	// .then(prod=>res.send(prod))
	// .catch(err=>res.send(err))
	

	const category=req.params.id
	Category.findAll({where:{id:category}, include:[Product]})
	.then(prod=>res.send(prod[0].products))
	
})

router.get ('/', (req,res) => {
	Category.findAll({})
	.then(response=>{
		res.send(response)
	})
})

router.post ('/newcategory', (req, res) => {
	Category.create({
		name : req.body.name
	})
	.then(response=>res.send(response))
})

router.get ('/:id/products', (req,res) => {
	const category=req.params.id
	product.findAll({where:{id:category}, include:[Product]})
	.then(prod=> console.log(prod, "para el front"))
})

module.exports= router;