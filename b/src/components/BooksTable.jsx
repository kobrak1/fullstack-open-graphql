import { useQuery } from "@apollo/client";
import { ALL_BOOKS_QUERY } from "../graphql/queries/booksQuery";

const BooksTable = ({ books }) => {
    const result = useQuery(ALL_BOOKS_QUERY); // data is fetched by the graphql query

    if (result.loading) {
      return <div>Loading...</div>;
    }

    console.log("Result:", result);

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
            {result.data.allBooksTable.map((book) => (
              <tr key={book.id} className="hover:bg-gray-100 transition">
                <td className="py-2 px-4 border-b">{book.title}</td>
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
  