import React, { useState } from "react";
import { Alert } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useMutation } from "@apollo/client";
import { ADD_BOOK } from "../graphql/mutations/booksMutation";

const AddBookForm = () => {
  const [createBook] = useMutation(ADD_BOOK);

  const [book, setBook] = useState({
    title: "",
    author: "",
    published: 0,
    genres: [""]
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      if (book.title === "" || book.author === "" || book.published === 0 || book.genres.length === 0) {
        console.error("All fields are required");
      };

      createBook(
        {
          variables: {
            ...book,
            published: parseInt(book.published, 10)
          }
        }
      );

      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Book added successfully
      </Alert>

      setBook({
        title: "",
        author: "",
        published: 0,
        genres: []
      });
    } catch (error) {
      console.log("Error creating book", error);
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Error creating book
      </Alert>
    }
  }
  return (
    <form className="flex flex-col mx-auto mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={book.title}
        onChange={handleChange}
        placeholder="Title"
        className="mb-3 px-1 bg-gray-200 border-1"
      />
      <input
        type="text"
        name="author"
        value={book.author}
        onChange={handleChange}
        placeholder="Author"
        className="mb-3 px-1 bg-gray-200 border-1"
      />
      <input
        type="number"
        name="published"
        value={book.published}
        onChange={handleChange}
        placeholder="Published"
        className="mb-3 px-1 bg-gray-200 border-1"
      />
      <input
        type="text"
        name="genres"
        value={book.genres}
        onChange={handleChange}
        placeholder="genres"
        className="mb-4 px-1 bg-gray-200 border-1"
      />
      <button className="cursor-pointer border-1 hover:bg-gray-200 active:bg-gray-400" type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm;