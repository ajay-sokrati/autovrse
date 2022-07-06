const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const server = app.listen(port, () => {
  console.log("Server started on port " + port + "...");
});

app.use(express.static('./client'));
app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: './client' });
})
