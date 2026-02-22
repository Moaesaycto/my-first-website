import { useState } from "react";

function Counter({ setTotal }) {
    const [count, setCount] = useState(0);

    const onClick = () => {
        setTotal((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }

    return (
        <button className="border-2 m-2 hover:cursor-pointer" onClick={onClick}>
            Counter {count}
        </button>
    );
}

export default Counter;