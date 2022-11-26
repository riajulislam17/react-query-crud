import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetBook, useUpdateBook } from "../hooks/useBooks";

const UpdateBook = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [publishYear, setPublishYear] = useState("");

  const { data } = useGetBook(id);
  //   console.log(data.book);

  const { mutateAsync } = useUpdateBook();

  const handleUpdate = async () => {
    try {
      const body = {
        title,
        author,
        publisher,
        publishYear,
      };
      await mutateAsync(body);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-5 py-3">
      <div className="d-flex justify-content-start">
        <Link to="/">
          <button className="btn btn-outline-dark fw-bold m-1 btn-sm">
            Go Back
          </button>
        </Link>
      </div>
      <h1>UPDATE BOOK</h1>
      <div className="d-flex justify-content-center">
        <form className="text-start w-50">
          <div className="mb-3">
            <label className="form-label fw-semibold">Book Title</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
              value={data.book.title || ""}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Book Author</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setAuthor(e.target.value)}
              value={data.book.author || ""}
              placeholder="Enter Author"
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Book Publisher</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setPublisher(e.target.value)}
              value={data.book.publisher || ""}
              placeholder="Enter Publisher"
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Book Publish Year</label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => setPublishYear(e.target.value)}
              value={data.book.publishYear || ""}
              placeholder="Enter BookTitle"
            />
          </div>
          <button
            type="button"
            onClick={handleUpdate}
            className="btn btn-dark fw-bold w-100"
          >
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
