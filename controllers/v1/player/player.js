const util = require('util');

const getPlayer = (req, res) => {
  const name = "Samba";
  const hello = util.format('Hello, %s!', name);
  res.json({ "message": hello });
};

module.exports = {
  getPlayer
};
