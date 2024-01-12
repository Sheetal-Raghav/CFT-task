const Service = require('../models/ServiceSchema');

const postService = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { serviceName, type, priceOptions } = req.body;
    const service = new Service({ categoryID: categoryId, serviceName, type, priceOptions });
    await service.save();
    res.json(service);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getService = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const services = await Service.find({ categoryID: categoryId });
    res.json(services);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const putService = async (req, res) => {
  try {
    const { categoryId, serviceId } = req.params;
    const { serviceName, type, priceOptions } = req.body;
    const service = await Service.findByIdAndUpdate(
      serviceId,
      { categoryID: categoryId, serviceName, type, priceOptions },
      { new: true }
    );
    res.json(service);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteService = async (req, res) => {
  try {
    const { serviceId } = req.params;
    await Service.findByIdAndDelete(serviceId);
    res.send('Service deleted successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  postService,
  getService,
  putService,
  deleteService,
};
