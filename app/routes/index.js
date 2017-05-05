const beerRoutes = require('./beer_routes');

module.exports = function(app) {
  beerRoutes(app);
};