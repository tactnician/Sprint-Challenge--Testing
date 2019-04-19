const db = require('../data/dbConfig');

module.exports = {
    add : async (game) => {
        const [id] = await db('games').insert(game)
        return db('games')
            .where({id})
            .first()
    },

    getAll: async () => {
        return db('games')
    }
}