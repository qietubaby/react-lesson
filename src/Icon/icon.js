// import zan from '../icons/zan.svg'
import './importIcons';
import './icon.css';
import classes from '../helpers/classes';

// const Icon = (props) => {
//     return (
//         <span>
//             <svg className="fui-icon" onClick={props.onClick}>
//                 <use xlinkHref={`#${props.name}`}></use>
//             </svg>
//         </span>
//     )
// }

// 如果有onMouseover  onMouseEnter等等 总不能一个一个写吧，直接用{...props}

// 需要将用户传的className和组件自身的className拼起来

// const Icon = (props) => {
//     const {className, ...restProps} = props;
//     return (
//         <span>
//             <svg className={`fui-icon ${className ? className : ''}`} {...restProps}>
//                 <use xlinkHref={`#${props.name}`}></use>
//             </svg>
//         </span>
//     )
// }

// 使用classes 方法将 className拼接起来
const Icon = (props) => {
    const {className, name, ...restProps} = props;
    return (
        <span>
            <svg className={classes('fui-icon', className)}
                {...restProps}
            >
                <use xlinkHref={`#${name}`}></use>
            </svg>
        </span>
    )
}

export default Icon
