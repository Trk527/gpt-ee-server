
const express = require('express');
const app = express();
const meta = require('./routes/meta');
const track = require('./routes/track');

app.use(express.json());

app.use('/meta', meta);   // GET komut
app.use('/track', track); // POST sonuç

app.get('/', (req, res) => {
  res.send('OK');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server aktif: ${PORT}`));
