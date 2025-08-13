
const express = require('express');
const router = express.Router();

router.post('/ping.gif', (req, res) => {
  const key = req.headers['x-agent-auth'];
  if (key !== process.env.AGENT_KEY) return res.status(403).send("FORBIDDEN");

  console.log("Sonuç alındı:", req.body);
  res.sendStatus(200);
});

module.exports = router;
