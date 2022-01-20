const router = require('express').Router()

router.use('*', (req, res) => {
    res.json({api: 'running'})
})

router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'oops',
        message: err.message,
        stack: err.stack,
    })
})
module.exports = router