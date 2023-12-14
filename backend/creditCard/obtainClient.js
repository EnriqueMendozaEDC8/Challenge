const obtainClient = (req, res) => {
  console.log(req);
  // if not is an id return 400 bad request
  const { id } = req.params;

  // TODO: if client not exist return 404

  res.send('ok')
};


module.exports = obtainClient;
