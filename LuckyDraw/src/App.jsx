import logo from "./assets/abp.png";
import firstPrize from "./assets/first-prize.svg";
import "./App.scss";
import DrawSection from "./DrawSection/DrawSection";
import { useEffect, useState } from "react";
import { createContext } from "react";
import luckyImg from "./assets/lucky-soxo-01.png";

export const AppContext = createContext();
function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [drawCount, increaseDrawCount] = useState(0);
  const [isSettingOpen, setSettingOpen] = useState(false);
  const [isShowLucky, setShowLucky] = useState(true);
  const [guestNumber, setGuest] = useState(31);
  useEffect(() => {
    if (!isRunning && drawCount > 0) {
      console.log("Start")
      setTimeout(() => {
        setShowLucky((prev) => !prev);
      },[1000])
    }
  }, [isRunning]);
  return (
    <div id="app">
      <div id="logo">
        <img src={logo} height={60}></img>
      </div>
      <div>
        <h1 className="title">Vòng quay may mắn</h1>
      </div>
      <>
        <AppContext.Provider value={{ isRunning }}>
          <div className="btn-wrapper">
            <button
              className="run-btn"
              onClick={() => {
                setIsRunning((prev) => !prev);
                increaseDrawCount(prev => prev + 1)
              }}
            >
              {!isRunning ? "Quay số" : "Chốt"}
            </button>
            {isShowLucky && drawCount > 1 && (
              <div className="lucky-img">
                <img
                  src={luckyImg}
                  onClick={() => {
                    setShowLucky((prev) => !prev);
                  }}
                ></img>
              </div>
            )}
          </div>
          <div style={{ paddingTop: 48 }}>
            <DrawSection maxNumber={guestNumber} />
          </div>
        </AppContext.Provider>
      </>
      <aside id="setting" onClick={() => setSettingOpen((prev) => !prev)}>
        <button>*</button>
      </aside>
      <div id="setting-menu" className={isSettingOpen ? "open-setting" : ""}>
        <p>Số khách mời</p>
        <input
          placeholder="Số khách mời"
          onChange={(e) => setGuest(() => e.target.value)}
          value={guestNumber}
        ></input>
      </div>
    </div>
  );
}

export default App;
