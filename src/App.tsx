import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="m-4 text-lg">
      <Button
        className="w-[200px]"
        onClick={() => setCount((count) => count + 1)}
      >
        Далее
      </Button>
    </div>
  );
}

export default App;
