const Games = require('./models');

module.exports = routes => {
    routes.post('/api/games', addGame);
    routes.get('/api/games', getGames);
}

const addGame = async  (req, res) => {
    const game = req.body
    if(!game.title || !game.genre){
        res.status(422).json({
            message: ` one or more params missing`
        })
    } else {
        try {
            const id = await Games.add(game);
            res.status(201).json(id);
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    }
}

const getGames = async (req, res) => {
    try {
        const games = await Games.getAll()
        res.status(200).json(games)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error
        })
    }
}