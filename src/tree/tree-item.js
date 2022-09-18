import { useState } from 'react';
import { scopedClassMaker } from '../classes';
const scopedClass = scopedClassMaker('fui-tree');
const sc = scopedClass;
const RenderItem = (props) => {
    const {item, level} = props;
    const classes = {
      ['level-' + level]: true,
      item: true,
    };
    const checked = props.multiple
      ? props.selected.indexOf(item.value) >= 0
      : props.selected === item.value;

    const onChange = (e) => {
      if (props.multiple) {
        if (e.target.checked) {
          props.onChange([...props.selected, item.value]);
        } else {
          props.onChange(
            props.selected.filter((value) => value !== item.value)
          );
        }
      } else {
        props.onChange(item.value);
      }
    };
    const expand = () => {
      setExpanded(true);
    };
    const collapse = () => {
      setExpanded(false);
    };
    const [expanded, setExpanded] = useState(true);
    return (
      <div key={item.value} className={sc(classes)}>
        <div className={sc('text')}>
          <input type="checkbox" onChange={onChange} checked={checked} />
          {item.text}
          
          <span>
            {expanded ? (
              <span onClick={collapse}>-</span>
            ) : (
              <span onClick={expand}>+</span>
            )}
          </span>
        </div>
        <div className={sc({children: true, collapsed: !expanded})}>
          {item.children?.map((sub) => RenderItem(sub, level + 1))}
        </div>
      </div>
    );
  };

  export default RenderItem;