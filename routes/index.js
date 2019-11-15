module.exports = server => {
  server.get('/', (req, res) => {
    res.json({ok: true})
  });
}
