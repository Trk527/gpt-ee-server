
const express = require('express');
const router = express.Router();

let commandStore = {
  last_command: null,
  executed: true,
  response: null
};

router.get('/cache.log', (req, res) => {
  const key = req.headers['x-agent-auth'];
  if (key !== process.env.AGENT_KEY) return res.status(403).send("FORBIDDEN");
  res.json(commandStore);
});

module.exports = router;
