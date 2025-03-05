const BooksTable = ({ books }) => {
    return (
      <div className="overflow-x-auto min-w-[600px] w-full">
        <table className="w-full bg-white border border-gray-300 shadow-lg rounded-lg">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="text-left py-2 px-4 border-b">Books</th>
              <th className="text-left py-2 px-4 border-b">Author</th>
              <th className="text-left py-2 px-4 border-b">Published</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} className="hover:bg-gray-100 transition">
                <td className="py-2 px-4 border-b">{book.name}</td>
                <td className="py-2 px-4 border-b">{book.author}</td>
                <td className="py-2 px-4 border-b">{book.published}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default BooksTable;
  