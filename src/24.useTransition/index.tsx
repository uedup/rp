import React, {
  ChangeEvent,
  useDeferredValue,
  useState,
  useTransition,
} from "react";
import Product from "./components/product";
import { getProductData } from "./data";
import "./index.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [inPending, startTransition] = useTransition();
  const filterProducts = () => {
    if (!searchText) {
      return getProductData();
    } else {
      return getProductData().filter((product) =>
        product.name.includes(searchText)
      );
    }
  };
  const products = filterProducts();

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setSearchText(e.target.value);
    startTransition(() => {
      setSearchText(e.target.value);
    });
  };

  return (
    <div className="App">
      <div className="search">
        <input placeholder="输入产品名称" onChange={handleFilterChange} />
      </div>

      {inPending?<div>正在输入</div>:products.map((product, index) => {
        return <Product product={product} key={index} />;
      })}
    </div>
  );
}

export default App;
