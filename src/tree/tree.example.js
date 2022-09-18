import Tree from './tree';
import { useState } from 'react';
const TreeExample = () => {
  const [array, setArray] = useState([
    {
      text: '1',
      value: '1',
      children: [
        {
          text: '1.1',
          value: '1.1',
          children: [
            { text: '1.1.1', value: '1.1.1' },
            { text: '1.1.2', value: '1.1.2' },
          ],
        },
        { text: '1.2', value: '1.2' },
      ],
    },
    {
      text: '2',
      value: '2',
      children: [
        { text: '2.1', value: '2.1' },
        { text: '2.2', value: '2.2' },
      ],
    },
  ]);
  // const [selectedValues, setSelectedValues] = useState(['1.1.1', '1.1.2']); // 多选
  const [selectedValue, setSelectedValue] = useState('1.1'); // 单选
  return (
    <div style={{ width: 200 }}>
      <Tree
        onChange={(selected) => {
          setSelectedValue(selected);
        }}
        sourceData={array}
        selected={selectedValue}
        multiple={false}
      />
    </div>
  );
};

export default TreeExample;
