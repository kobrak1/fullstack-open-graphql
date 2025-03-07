import { useState } from 'react';
import AuthorsTable from './components/AuthorsTable';
import BooksTable from './components/BooksTable';
import Button from './components/shared/Button';
import AddBookForm from './components/AddBookForm';

export default function App() {
  const [activeSection, setActiveSection] = useState("authors");

  const customShadow = "shadow-[5px_5px_5px_rgba(0,0,0,0.3)]";
  return (
    <>
      <div className={`flex justify-center text-xl bg-gray-500 text-white p-4 w-[600px] mx-auto mt-4 ${customShadow}`}>
        GraphQL and React Sample Project
      </div>
      <div className="flex gap-4 mt-4 mx-auto w-[600px]">
        <Button text="Author" onClick={() => setActiveSection("authors")} />
        <Button text="Books" onClick={() => setActiveSection("books")} />
        <Button text="Add Book" onClick={() => setActiveSection("add-book")} />
      </div>
      <div className={`flex w-[600px] mx-auto mt-4 min-h-[400px] bg-gray-300 ${customShadow}`}>
        {activeSection === "authors" && <AuthorsTable />}
        {activeSection === "books" && <BooksTable />}
        {activeSection === "add-book" && <AddBookForm />}
      </div>
    </>
  );
}