const Games = require('./models');

module.exports = routes => {
    routes.post('/api/games');
    routes.get('/api/games');
}