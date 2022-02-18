const { books } = require("../data/books.json");
const { users } = require("../data/users.json");

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

exports.getAllIssuedBooks = (req, res) => {
  const user = users.filter((each) => {
    if (each.issuedBook) return each;
  });

  // console.log("List of users who issued some books", user);

  const issuedBooks = [];

  user.forEach((each) => {
    const book = books.find((book) => book.id === each.issuedBook);
    book.issuedBy = each.name;
    book.issuedDate = each.issuedDate;
    book.returnDate = each.returnDate;
    issuedBooks.push(book);
  });

  if (issuedBooks.length === 0) {
    return res
      .status(404)
      .json({ success: false, message: "No books issued yet" });
  }

  res.status(200).json({ success: true, data: issuedBooks });
};

exports.addNewBook = (req, res) => {
  // const { name, author, id } = req.body.data;
  const { data } = req.body;

  if (!data) {
    return res
      .status(400)
      .json({ success: false, message: "No data provided" });
  }

  // const allBooks = [books]
  // allBooks = [[{}, {}, {}, {}]]

  const allBooks = [...books, data];
  // allBooks = [{}, {}, {}, {}]

  return res.status(201).json({ success: true, data: allBooks });
};

exports.updateBookById = (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  const book = books.find((each) => each.id === id);

  if (!book) {
    return res.status(404).json({ succes: false, message: "Book not found" });
  }

  const updateData = books.map((each) => {
    if (each.id === id) {
      return { ...each, ...data };
    }
    return each;
  });

  return res.status(200).json({ success: true, data: updateData });
};
