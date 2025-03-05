const Button = ({ text, onClick }) => {
  const customShadow = "shadow-[5px_5px_5px_rgba(0,0,0,0.3)]";

  return (
    <button
      className={`px-6 py-1 bg-gray-700 text-white font-regular 
                  active:shadow-sm hover:bg-gray-500 transition-[.1] ${customShadow}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;