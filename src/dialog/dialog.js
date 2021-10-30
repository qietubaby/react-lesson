import "./dialog.scss";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Icon from "../Icon";
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
          {props.buttons.map((button, index) =>
            React.cloneElement(button, { key: index })
          )}
        </footer>
      </div>
    </Fragment>
  ) : null;

  return (
    ReactDOM.createPortal(x, document.body)
  )
};

Dialog.defaultProps = {
  closeOnClickMask: false,
};

export default Dialog;
