const Category = require("../models/CategoryModel");
const Service=require("../models/ServiceSchema")

// Post category
const postCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;
    const category = new Category({ categoryName });
    await category.save();
    res.json(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get all categories
const getCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Update a category
const updateCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { categoryName } = req.body;
    const category = await Category.findByIdAndUpdate(
      categoryId,
      { categoryName },
      { new: true }
    );
    res.json(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Delete a category
const deleteCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const servicesCount = await Service.countDocuments({ categoryID: categoryId });
    if (servicesCount === 0) {
      await Category.findByIdAndDelete(categoryId);
      res.send("Category deleted successfully");
    } else {
      res.status(400).send("Cannot delete non-empty category");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};


module.exports = {
  postCategory,
  getCategory,
  updateCategory,
  deleteCategory
};
