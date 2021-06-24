import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  var [cs, setTime] = React.useState(time);

  function getTime(currentTime) {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{cs}</h1>
    </div>
  );
}

export default App;
