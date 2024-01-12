const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const {
    postService,
    getService,
    putService,
    deleteService

} = require('../controllers/serviceController');

// Post  service
router.post('/category/:categoryId/service',verifyToken, postService);

// Get services
router.get('/category/:categoryId/services',verifyToken, getService);

// Update  service
router.put('/category/:categoryId/service/:serviceId',verifyToken, putService);

// Delete service
router.delete('/category/:categoryId/service/:serviceId',verifyToken, deleteService);

module.exports = router;
