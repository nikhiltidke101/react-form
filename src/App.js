import { useState } from "react";
import CustomerForm from "./pages/CustomerForm.js";
import BusinessForm from "./pages/BusinessForm.js";
import './App.css';
import data from "./country.json";

function App() {
  const [type, setType] = useState(1);

  return (
    <div>
      <div className="w-[90%] sm:w-[35%] md:w-[35%] flex flex-col items-center justify-center gap-5 border  border-blue-400 mx-auto my-10 rounded-md shadow-xl">
        <div className="flex m-5">
          <button onClick={() => setType(1)} className={type === 1 ? "px-7 py-2 border-b-2 border-blue-600" : "px-7 py-2 border-b-2 border-slate-200"}>Customer</button>
          <button onClick={() => setType(2)} className={type === 2 ? "px-7 py-2 border-b-2 border-blue-600" : "px-7 py-2 border-b-2 border-slate-200"}>Business</button>
        </div>
        {
          type === 1 && (
          <CustomerForm/>
        )}
        { type === 2 && (
          <BusinessForm/>
        )}
      </div>
    </div>
  );
}

export default App;
