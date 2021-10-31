import "./dialog.scss";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Icon from "../Icon/icon";
import { scopedClassMaker } from "../classes";

const scopedClass = scopedClassMaker("fui-dialog");
const sc = scopedClass;

const Dialog = (props) => {
  const onClickClose = (e) => {
    props.onClose(e);
  };

  const onClickMask = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e);
    }
  };

  const x = props.visible ? (
    <Fragment>
      <div className={sc("mask")} onClick={onClickMask}></div>
      <div className={sc()}>
        <div className={sc("close")} onClick={onClickClose}>
          <Icon name="close" />
        </div>
        <header className={sc("header")}>提示</header>
        <main className={sc("main")}>{props.children}</main>
        <footer className={sc("footer")}>
          {/* {props.buttons} */}
          {/* 给传过来的元素添加新的属性 key*/}
          {props.buttons && props.buttons.map((button, index) =>
            React.cloneElement(button, { key: index })
          )}
        </footer>
      </div>
    </Fragment>
  ) : null;

  return (
    // react 传送门
    ReactDOM.createPortal(x, document.body)
  )
};

Dialog.defaultProps = {
  closeOnClickMask: false,
};

/*
  创建alert组件，使用Dialog组件进行二次改造
    ① 声明一个组件
    ② 声明一个div
    ③ 把组件放在div里面
    ④ 把div放到body里面
  
  关闭组件：重新渲染组件，只不过把 visible 的属性变成false，
  unmountComponentAtNode React把组件从div身上移除，包括事件之类的，然后再移除div回复原状
*/

const alert = (content) => {
  const component = <Dialog visible={true} onClose={() => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }}>{content}</Dialog>
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
};


/*
  创建 confirm api，使用Dialog组件进行二次改造
*/

const confirm = (content, yes, no) => {
  const onYes = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div)
    div.remove();
    yes && yes();
  }
  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    no && no();
  }
  const component = (
    <Dialog 
      visible={true}
      onClose={onNo}
      buttons={[
        <button onClick={onYes}>yes</button>,
        <button onClick={onNo}>no</button>
      ]}
      >{content}
    </Dialog>)
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
}

export {alert, confirm};

export default Dialog;



