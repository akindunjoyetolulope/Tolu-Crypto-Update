import React from "react";
import TableCard from "./components/TableCard";

function App() {

  return (
    <div className="app">
       Tolu crypto Update
       <TableCard 
       id={"bitcoin"}
       name={"Bitcoin"}
       imgUrl={"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"}
       coinPrice={"$ 1000000"}
       dipStatus={"- $70"}
       action={'Open'}
       onAction={() => console.log('open!!')} 
       url={"HAY"}
       />
    </div>
  );
}

export default App;
