const { books } = require("../data/books.json");

exports.getAllBooks = (req, res) => {
  res.status(200).json({ success: true, data: books });
};

exports.getSingleBookById = (req, res) => {
  const { id } = req.params;
  const book = books.find((each) => each.id === id);
  if (!book) {
    return res.status(404).json({ success: false, message: "Book not found" });
  }
  res.status(200).json({
    success: true,
    data: book,
  });
};
