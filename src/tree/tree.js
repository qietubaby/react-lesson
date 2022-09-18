
import './tree.scss';
import Icon from '../Icon';

import RenderItem from './tree-item';




const Tree = (props) => {

  return (
    <div>
      {props.sourceData?.map((item) => {
        return RenderItem(item);
      })}
    </div>
  );
};

export default Tree;
