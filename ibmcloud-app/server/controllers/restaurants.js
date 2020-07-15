const Restaurant = require('../models').Restaurant;
const Order = require('../models').Order;

module.exports = {
  create(req, res) {
    return Restaurant
      .create({
        name: req.body.name,
        //TODO fill in othe fields
        restaurantId: req.body.restaurantId,
      })
      .then(restaurant => res.status(201).send(restaurant))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Restaurant
      .findAll()
      .then(restaurants => res.status(200).send(restaurants))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Restaurant
      .findById(req.params.restaurantId, {})
      .then(restaurant => {
        if (!restaurant) {
          return res.status(404).send({
            message: 'restaurant not found',
          });
        }
        res.status(200).send(restaurant);
      })
      .catch(error => res.status(400).send(error));
  }
};
