import { useState } from 'react';
import Dialog from './dialog';
export default function () {
    const [x, setX] = useState(false);
    return (
        <div style={{border:'1px solid red'}}>
            <button onClick={() => setX(!x)}>click</button>
            <Dialog visible={x} closeOnClickMask={true} buttons={
                [
                    <button onClick={ () => {setX(false)} }>1</button>,
                    <button>2</button>
                ]
            } onClose={() => {setX(false)}}>
                <strong>hi</strong>
            </Dialog>
        </div>
    )
}