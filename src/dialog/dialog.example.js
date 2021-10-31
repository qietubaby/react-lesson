import { useState } from "react";
import Dialog, {alert, confirm, modal} from "./dialog";

const DialogExample = () => {
  const [x, setX] = useState(false);

  const openModal = () => {
    // modal 返回了一个 关闭弹窗的方法 close() 调用的就是这个方法
    const close = modal(<h1>你好
      <button onClick={() => {close()}}>close</button>
    </h1>)
  }

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
          return confirm('confirm Demo', () => {
            console.log('你点击了yes');
          }, () => {
            console.log('你点击了no')
          })
        }}>confirm</button>
  
      </div>




      <div style={{ border: "1px solid red" }}>
        <button onClick={openModal}>model</button>
  
      </div>
    </div>
  );
}

export default DialogExample