module.exports = (req, res) => {
  const name = "Samba";
  const hello = `Hello, ${name}`;
  res.json({ "message": hello });
};
