import { useState } from "react";
import { useAddBook } from "../hooks/useBooks";

const InsertBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [publishYear, setPublishYear] = useState("");

  const { mutateAsync } = useAddBook();

  const handleSubmit = async () => {
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
    <div>
      <h1>ADD BOOK</h1>
      <form className="text-start">
        <div className="mb-3">
          <label className="form-label fw-semibold">Book Title</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter BookTitle"
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Book Author</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter Author"
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Book Publisher</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setPublisher(e.target.value)}
            placeholder="Enter Publisher"
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Book Publish Year</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setPublishYear(e.target.value)}
            placeholder="Enter BookTitle"
          />
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="btn btn-dark fw-bold w-100"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default InsertBook;
