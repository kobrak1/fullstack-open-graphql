import { useState } from 'react';
import AuthorsTable from './components/AuthorsTable';
import BooksTable from './components/BooksTable';
import Button from './components/shared/Button';

export default function App() {
  const [authors, setAuthors] = useState([]);
  const [books, setBooks] = useState([]);
  const [isShowBooks, setIsShowBooks] = useState(false);

  const customShadow = "shadow-[5px_5px_5px_rgba(0,0,0,0.3)]";
  return (
    <>
      <div className={`flex justify-center text-xl bg-gray-500 text-white p-4 w-[600px] mx-auto mt-4 ${customShadow}`}>
        GraphQL and React Sample Project
      </div>
      <div className="flex gap-4 mt-4 mx-auto w-[600px]">
        <Button text="Author" onClick={() => setIsShowBooks(false)} />
        <Button text="Books" onClick={() => setIsShowBooks(true)} />
      </div>
      <div className={`flex w-[600px] mx-auto mt-4 min-h-[400px] bg-gray-300 ${customShadow}`}>
        {isShowBooks 
          ? <BooksTable books={books} /> 
          : <AuthorsTable authors={authors} />
        }
      </div>
    </>
  );
}