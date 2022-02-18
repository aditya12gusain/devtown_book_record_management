const { users } = require("../data/users.json");

exports.getAllUsers = (req, res) => {
  res.status(200).json({ success: true, data: users });
};

exports.getSingleUserById = (req, res) => {
  const { id } = req.params;
  // filter returns a array []
  const user = users.filter((each) => each.id === id);
  if (user.length === 0) {
    return res.status(404).json({ success: false, message: "User not found" });
  }
  res.status(200).json({ success: true, data: user });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  // returns a single element
  const user = users.find((each) => {
    return each.id === id;
  });
  // console.log(user);
  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }
  const index = users.indexOf(user);
  // console.log(index);
  // alphabet = ['a', 'b', 'c', 'd'];
  users.splice(index, 1);
  return res.status(200).json({ success: true, data: users });
};
