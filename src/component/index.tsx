import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../App";

export const ClickerCom = observer(() => {
  const { click } = useContext(Context);
  return (
    <div>
      <p>{click.counter}</p>
      <p>Loading: {click.isLoading}</p>
      <button onClick={() => click.inc()}>inc</button>
      <button onClick={() => click.dec()}>dec</button>
      <button onClick={() => click.asInc()}>as inc</button>
    </div>
  );
});
