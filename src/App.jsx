import React, { useEffect, useState } from "react";
import { ColorMessage } from "./Components/ColorMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [view, viewSwitch] = useState(true);

  const countUp = () => {
    setNum(num + 1);
  };

  const switchView = () => {
    viewSwitch(!view);
  };

  useEffect(() => {
    if (num % 3 === 0 && num !== 0) {
      view || viewSwitch(true);
    } else {
      view && viewSwitch(false);
    }
  }, [num]);

  return (
    <>
      <button onClick={countUp}>カウントアップ</button>
      <button onClick={switchView}>顔面表示切り替え</button>

      <p>
        {num} {view && <span>😀</span>}
      </p>
    </>
  );
};

export default App;
