const router = require('express').router()

router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = router