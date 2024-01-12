const mongoose= require("mongoose")

const servicePriceOptionsSchema = new mongoose.Schema({
    serviceID: mongoose.Schema.Types.ObjectId,
    duration: String,
    price: Number,
    type: String,
  });

  const serviceSchema = new mongoose.Schema({
    categoryID: mongoose.Schema.Types.ObjectId,
    serviceName: String,
    type: String,
    priceOptions: [servicePriceOptionsSchema],
  });
  
  const Service = mongoose.model('Service', serviceSchema);
  module.exports=Service;
  