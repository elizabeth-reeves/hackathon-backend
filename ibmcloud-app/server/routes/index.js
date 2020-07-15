const restaurantsController = require('../controllers').restaurants;
const ordersController = require('../controllers').orders;

module.exports = (app) => {
  app.get('/api', (req, res) => {
    return res.status(200).send({
      message: 'Welcome to the Restaurants API!',
    })
  });

  app.get('/api/restaurants', (req, res) => {
    restaurantsController.list(req, res)
  });
  app.get('/api/restaurants/:restaurantId', (req, res) => {
    restaurantsController.retrieve(req, res)
  });

  // These routes are not tested, as they exist solely to enable us to seed the database
  app.post('/api/restaurants', (req, res) => {
    restaurantsController.create(req, res)
  });
  app.post('/api/restaurants/:restaurantId/orders', (req, res) => {
    ordersController.create(req, res)
  });
};
