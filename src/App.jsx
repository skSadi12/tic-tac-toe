import "./App.css";
import Game from "./components/Game";

function App() {
  return (
    <div
      className="
        flex 
        flex-col 
        md:flex-row
        items-center 
        justify-center 
        min-h-screen
        px-4
        text-xl 
        md:text-3xl 
        font-black
        bg-[url(./assets/bg.jpg)]
        bg-cover 
        bg-center
      "
    >
      <div className="w-full md:w-auto flex justify-center">
        <Game />
      </div>
    </div>
  );
}

export default App;
