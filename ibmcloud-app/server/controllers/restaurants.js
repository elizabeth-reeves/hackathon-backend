const Restaurant = require('../models').Restaurant;
const Order = require('../models').Order;

module.exports = {
  create(req, res) {
    return Restaurant
      .create({
        name: req.body.name,
        hasFood: req.body.hasFood,
        foodPrice: req.body.foodPrice,
        hasCoffee: req.body.hasCoffee,
        coffeePrice: req.body.coffeePrice,
        hasDessert: req.body.hasDessert,
        dessertPrice: req.body.dessertPrice,
        address: req.body.address,
        zipcode: req.body.zipcode,
        cuisine: req.body.cuisine,
        restaurantImage: req.body.restaurantImage,
        restaurantId: req.body.restaurantId,
        foodAmount: req.body.foodAmount,
        coffeeAmount: req.body.coffeeAmount,
        dessertAmount: req.body.dessertAmount,
        donateTo: req.body.donateTo
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
  },
  update(req, res) {
    return Restaurant
      .update({
        name: req.body.name,
        hasFood: req.body.hasFood,
        foodPrice: req.body.foodPrice,
        hasCoffee: req.body.hasCoffee,
        coffeePrice: req.body.coffeePrice,
        hasDessert: req.body.hasDessert,
        dessertPrice: req.body.dessertPrice,
        address: req.body.address,
        zipcode: req.body.zipcode,
        cuisine: req.body.cuisine,
        restaurantImage: req.body.restaurantImage,
        foodAmount: req.body.foodAmount,
        coffeeAmount: req.body.coffeeAmount,
        dessertAmount: req.body.dessertAmount,
        donateTo: req.body.donateTo
      }, {
        where: {
          restaurantId: req.params.restaurantId
        }
      })
      .then(restaurant => res.status(201).send(restaurant))
      .catch(error => res.status(400).send(error));
  }
};
