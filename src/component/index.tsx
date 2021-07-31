import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../App";

const classStyle: string =
  "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500";

export const ClickerCom = observer(() => {
  const { click } = useContext(Context);
  return (
    <div>
      <p>{click.counter}</p>
      <p>Loading: {click.isLoading}</p>
      <button className={classStyle} onClick={() => click.inc()}>
        inc
      </button>
      <button className={classStyle} onClick={() => click.dec()}>
        dec
      </button>
      <button className={classStyle} onClick={() => click.asInc()}>
        as inc
      </button>
    </div>
  );
});
