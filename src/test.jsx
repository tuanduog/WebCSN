import { useLocation } from "react-router-dom";

function Test() {
  const location = useLocation();
  const { chosenBooks } = location.state || { chosenBooks: [] };

  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {chosenBooks.map((book) => (
          <li key={book.sachid}>
            {book.tensach} - {Intl.NumberFormat("de-DE").format(book.gia)} VNĐ
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
