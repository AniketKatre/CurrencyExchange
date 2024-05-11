import React from "react";
import "./index.css";

import { CurrencyConvert } from "./component/CurrencyConvert";
import Headers from "./component/Headers";
import Footers from "./component/Footers";

const App = () => {
  return (
    <>
      <Headers />
      <main className="py-3">
        <CurrencyConvert />
      </main>
      <Footers />
    </>
  );
};

export default App;
