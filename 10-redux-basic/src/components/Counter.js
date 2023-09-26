import { connect, useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../store/modules/counter";

const Button = ({ text, click }) => {
  return <button onClick={click}>{text}</button>;
};
const Counter = () => {
  const counter = useSelector((state)=> state.counter.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Total clicks: {counter}</h1>
      <Button text="+1" click={()=> dispatch(increase())} />
      <Button text="-1" click={() => dispatch(decrease())} />
    </div>
  );
};


// connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
export default Counter;