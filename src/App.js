import "./styles.css";
import React from 'react'
import DebounceUtil from "./components/debounce-util";
import QrCode from "./components/qr-code"
export default function App() {

  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editingg to see some magic happen!</h2>
      </div>
      <DebounceUtil className="Center" />
      <QrCode />
    </>
  );
}
