import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Welcome 2024"]);
  const particleInit = async (engine) => {
    await loadFireworksPreset(engine);
  };

  function timeLeft() {
    const newYearDate = new Date("January 1 2025 00:00:00").getTime();
    const newDate = new Date().getTime();
    const remainingTime = newYearDate - newDate;
    return remainingTime
  }

  return (

    <>
      <Particles
        init={particleInit}
        options={{ preset: "fireworks" }}

      />

      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-5xl font-bold px-4 z-40">
          <Typewriter words={newYearMessage} loop={false} cursorStyle="_" cursor />
        </span>
        <div className="text-white font-bold text-3xl z-50 text-center">
          <Countdown date={Date.now() + timeLeft()} onComplete={() => setNewYearMessage(["YEAYYYY...", "Welcome 2025"])} />
        </div>
      </div>
    </>
  );
}

export default App;
