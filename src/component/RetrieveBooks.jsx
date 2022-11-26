import { Link } from "react-router-dom";
import { useGetAllBooks, useDeleteBook } from "../hooks/useBooks";

const RetrieveBooks = () => {
  const { data } = useGetAllBooks();
  const { mutateAsync } = useDeleteBook();

  const handleDelete = async (id) => {
    try {
      const proceed = window.confirm("Are you sure to delete?");
      if (proceed) {
        await mutateAsync(id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>ALL BOOKS</h1>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Publisher</th>
            <th scope="col">Publish Year</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {data.books.map((book) => (
          <tbody key={book._id}>
            <tr>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
              <td>{book.publishYear}</td>
              <td>
                <Link to={`/${book._id}`}>
                  <button
                    type="button"
                    className="btn text-warning text-opacity-75 btn-outline-dark fw-bold m-1 btn-sm"
                  >
                    Update
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(book._id)}
                  type="button"
                  className="btn text-danger text-opacity-75 btn-outline-dark fw-bold m-1 btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default RetrieveBooks;
