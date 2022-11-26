import InsertBook from "./InsertBook";
import RetrieveBooks from "./RetrieveBooks";

const Books = () => {
  return (
    <div>
      <div className="container px-5 py-5">
        <div className="row">
          <div className="col-sm-4">
            <InsertBook></InsertBook>
          </div>
          <div className="col-sm-8">
            <RetrieveBooks></RetrieveBooks>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
