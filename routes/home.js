const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello, world! (Production)')
    .end();
});

module.exports = router;