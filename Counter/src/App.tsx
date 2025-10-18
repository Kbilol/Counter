
import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };

  const onClickMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className="bg-white text-gray-800 rounded-2xl shadow-xl p-8 text-center">
      <h2 className="text-2xl font-bold mb-2">Счётчик:</h2>
      <h1 className="text-5xl font-extrabold mb-6">{count}</h1>
      <div className="space-x-4">
        <button
          onClick={onClickMinus}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-transform active:scale-95"
        >
          – Минус
        </button>
        <button
          onClick={onClickPlus}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-transform active:scale-95"
        >
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
