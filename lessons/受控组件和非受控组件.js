import Form from './form';
import {useState} from 'react';

const FormExample = () => {
    const [name, setName] = useState('frank');
    const refInput = useRef(null);
    const x = () => {
        console.log(refInput.current.value);
    };
    return (
        <div>
            {/* 受控组件 受react控制的组件 */}
            <input value={name} onChange={(e) => setName(e.target.value)} />

            {/* 非受控组件 */}
            <input defaultValue="frank" ref={refInput} type="text" onBlur={x} />
        </div>
    )
}

const FormExample = () => {
    const [formData] = useState({
        username: '',
        password: ''
    })
    const [fields] = useState([
        {name: 'username', label: '用户名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}}
    ]);
    return (
        <Form value={formData} fields={fields} buttons={
            <>
              <button>提交</button>
              <button>返回</button>
            </>
        }/>
    )
}

export default FormExample;