import {useDispatch, useSelector} from "react-redux";
import {addTen, decrement, increment, reset} from "../../redux/action";
import "./Counter.css"

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        if (counter > 0) {
            dispatch(decrement());
        }

    };

    const handleReset = () => {
        dispatch(reset());
    };

    const handleAddTen = () => {
        dispatch(addTen())
    }

    return (
        <div className={"container"}>
            <h2>Counter: {counter}</h2>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleAddTen}>Add Ten</button>
        </div>
    );
};
export default Counter;