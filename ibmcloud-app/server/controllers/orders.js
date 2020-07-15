const Order = require('../models').Order;

module.exports = {
  create(req, res) {
    return Order
      .create({
        numMeals: req.query.numMeals,
        numCoffees: req.query.numCoffees,
        numDesserts: req.query.numDesserts,
        orderPrice: req.query.orderPrice,
        restaurantId: req.params.restaurantId,
        hospitalId: req.params.hospitalId
      })
      .then(order => res.status(201).send(order))
      .catch(error => res.status(400).send(error));
  },
};
