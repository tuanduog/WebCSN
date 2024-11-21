import { useState } from 'react';
import data_sach from './data/data_sach'; // Adjust the path to match your project structure
import data from './data/data';

const Test = () => {
  const [query, setQuery] = useState(''); // State for search query
  const { sach_data } = data_sach; // Destructure the sach_data array
  const { product_data } = data; // Destructure the data_pd array

  // Filter books and products based on the search query
  const filteredBooks = sach_data.filter((book) =>
    book.tensach.toLowerCase().includes(query.toLowerCase())
  );
  const filteredProducts = product_data.filter((product) =>
    product.tensp.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: '10px',
          width: '300px',
          fontSize: '16px',
          marginBottom: '20px',
          display: 'block',
        }}
      />

      {/* Show results only if query is not empty */}
      {query ? (
        <div>
          {/* Render Books Section */}
          <div>
            {filteredBooks.length > 0 ? (
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {filteredBooks.map((book) => (
                  <li
                    key={book.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '10px',
                    }}
                  >
                    <img
                      src={book.anhsach}
                      alt={book.tensach}
                      style={{ width: '50px', height: '50px', marginRight: '10px' }}
                    />
                    <div>
                      <h4 style={{ margin: 0, fontSize: '15px' }}>{book.tensach}</h4>
                      <p style={{ margin: 0, color: 'gray', fontSize: '10px' }}>
                        {book.tacgia}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No books found.</p>
            )}
          </div>

          {/* Render Products Section */}
          <div>
            {filteredProducts.length > 0 ? (
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {filteredProducts.map((product) => (
                  <li
                    key={product.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '10px',
                    }}
                  >
                    <img
                      src={product.anh}
                      alt={product.tensp}
                      style={{ width: '50px', height: '50px', marginRight: '10px' }}
                    />
                    <div>
                      <h4 style={{ margin: 0, fontSize: '15px' }}>{product.tensp}</h4>
                      <p style={{ margin: 0, color: 'gray', fontSize: '10px' }}>
                        {product.tengv}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      ) : (
        <div/>
      )}
    </div>
  );
};

export default Test;
