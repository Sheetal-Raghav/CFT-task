const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const 
{
    postCategory,
    getCategory,
    updateCategory,
    deleteCategory

 } = require('../controllers/categoryController');

// POST category
router.post('/categories' , verifyToken ,postCategory);

// GET all categories
router.get('/categories',verifyToken,getCategory);

// PUT updatecategory
router.put('/categories/:categoryId',verifyToken,updateCategory);

// DELETE  category
router.delete('/categories/:categoryId',verifyToken,deleteCategory);

module.exports = router;
