import { useState } from "react";
import Dialog, {alert} from "./dialog";

const DialogExample = () => {
  const [x, setX] = useState(false);
  return (
    <div>
      <div style={{ border: "1px solid red" }}>
        <button onClick={() => setX(!x)}>弹出Dialog</button>
        <Dialog
          visible={x}
          closeOnClickMask={true}
          buttons={[
            <button
              onClick={() => {
                setX(false);
              }}
            >
              1
            </button>,
            <button>2</button>,
          ]}
          onClose={() => {
            setX(false);
          }}
        >
          <strong>hi</strong>
        </Dialog>
      </div>
      <div style={{ border: "1px solid red" }}>
        <button onClick={() => {
          return alert('1')
        }}>直接调用的组件alert</button>
  
      </div>
      <div style={{ border: "1px solid red" }}>
        <button onClick={() => {
          return alert('1')
        }}>confirm</button>
  
      </div>
    </div>
  );
}

export default DialogExample