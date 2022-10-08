import axios from "axios";

const URL = "https://633d4c8df2b0e623dc70a5c0.mockapi.io/v1/books";

const getBooks = async (cb) => {
  try {
    let books = await axios({
      method: "get",
      url: URL,
    });

    cb(books.data);
  } catch (err) {
    console.log(err);
  }
};

export { getBooks };
