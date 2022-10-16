import { useDispatch, useSelector } from "react-redux";
import { increments, decrements } from "./redux/counter/counterAction";

function App() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const increment = (value) => {
    dispatch(increments(value));
  };
  const decrement = (value) => {
    dispatch(decrements(value));
  };

  return (
    <>
      <div className="bg-teal-500">
        <div className="flex justify-center">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm my-12">
            <h5 className="flex justify-center items-center text-gray-900 text-xl leading-tight font-medium mb-10">
              Count :
              <span id="counter" className="ml-4">
                {count}
              </span>
            </h5>
            <div className="flex justify-center items-center">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                id="decrement"
                onClick={() => decrement(2)}
              >
                Decrement
              </button>
              <span className="mx-2"></span>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                id="increment"
                onClick={() => increment(5)}
              >
                Increment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
