import React, {useState} from "react";

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-[200px] flex flex-col justify-between items-center">
      <button onClick={() => setCount(count + 1)} className="h-[50px] w-[50px] border border-gray-500">
        +
      </button>
      <h1 className="font-bold text-teal-500">
        Count is <span className={count % 2 === 0 ? "text-green-500" : "text-red-500" }>{count}</span>
      </h1>
      <button onClick={() => setCount(count - 1)} className="h-[50px] w-[50px] border-gray-500">
        -
      </button>
    </div>
  );
}