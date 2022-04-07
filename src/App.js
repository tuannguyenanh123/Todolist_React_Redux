import { Skeleton } from "antd";
import { useEffect, useState } from "react";
import { Pagination } from "antd";

import "./App.css";
import Header from "./Layout/Header";
import Body from "./Layout/Body";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(timing);
    };
  }, []);
  return (
    <>
      {/* <Modal /> */}
      <div className="App">
        {loading && <Skeleton paragraph={{ rows: 8 }} />}
        {!loading && (
          <>
            <Header />
            <Body />
          </>
        )}
      </div>
    </>
  );
}

export default App;
