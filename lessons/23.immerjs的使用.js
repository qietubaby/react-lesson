import React, {  useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import produce from 'immer'

// 如何记录App渲染了多少次
const App = () => {
    const [obj, setObj] = useState(()=>
         ({
            username: 'Jack',
            group: {
                userGroup: {
                    level: 3
                }
            }
        })
    )
    

    // 使用这样去更改嵌套对象数据太复杂了
    // const setGroup = () => {
    //     setObj({
    //         ...obj,
    //         group: {
    //             ...obj.group,
    //             userGroup: {
    //                 ...obj.group.userGroup,
    //                 level: 8
    //             }
    //         }

    //     })
    // }
    // let nextState = produce(obj, (draft) => {
    //     draft.group.userGroup.level = 8
    // })
    // console.log(nextState)
    const setGroup = () => {
        setObj(produce((draft) => {
            draft.group.userGroup.level = 8
        }))
    }

    return <>
        <p>{obj.group.userGroup.level}</p>
        <button onClick={setGroup}>改变用户的用户组</button>
    </>
}


ReactDOM.render(
    <App firstName="Frank" lastName="Fang" />,

    document.getElementById('root')
)
