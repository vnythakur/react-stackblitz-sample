import { useState } from 'react';

import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={reactLogo} alt="" />
        <p className="read-the-docs">{count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>&nbsp;
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      </div>
    </>
  );
}

export default App;
