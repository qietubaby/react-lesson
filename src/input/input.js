import classes from '../helpers/classes';
import './input.scss';
const Input = (props) => {
    const {className, ...rest} = props;
    return (
        <input className={classes('fui-input', className)} 
            {...rest} />
    );
}
export default Input;