import { useQuery } from "@apollo/client";
import { allAuthorsQuery } from "../graphql/queries/authorsQuery";

const AuthorsTable = ({ authors }) => {
  const result = useQuery(allAuthorsQuery);

  if (result.loading) {
    return <div>Loading...</div>;
  }

  console.log("Result:", result);

  return (
    <div className="overflow-x-auto min-w-[600px] w-full">
      <table className="w-full bg-white border border-gray-300 shadow-lg rounded-lg">
        <thead className="bg-gray-700 text-white">
          <tr>
            <th className="text-left py-2 px-4 border-b">Authors</th>
            <th className="text-left py-2 px-4 border-b">Born</th>
            <th className="text-left py-2 px-4 border-b">Books</th>
          </tr>
        </thead>
        <tbody>
          {result.data.allAuthors.map((author) => (
            <tr key={author.id} className="hover:bg-gray-100 transition">
              <td className="py-2 px-4 border-b">{author.name}</td>
              <td className="py-2 px-4 border-b">{author.born}</td>
              <td className="py-2 px-4 border-b">{author.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorsTable;