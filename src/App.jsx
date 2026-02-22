import Counter from "./Counter";
import { useState } from "react";


// Simple component with a global counter
function App() {
  const [totalCount, setTotalCount] = useState(0);
  
  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="bg-red-200 w-full">
        My Awesome Website
      </header>
      <main className="flex-1 flex flex-col">
        This is the main section of my website! You have clicked a total of {totalCount}
        <Counter setTotal={setTotalCount} />
        <Counter setTotal={setTotalCount} />
      </main>
      <footer className="bg-green-200 w-full">
        Copyright me {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
