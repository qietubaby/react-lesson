import classes from '../helpers/classes';
import './button.scss';

const Button = (props) => {
    const {className, children, level, ...rest} = props;
    return (
        <button className={classes('fui-button',`fui-button-${level}`, className)}
                {...rest}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    level: 'normal'
};

export default Button;