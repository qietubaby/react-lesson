import classes from '../helpers/classes';
import Input from '../input/input';
import './form.scss';
const Form = (props) => {
  const formData = props.value;
  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };
  const onInputChange = (name, value) => {
    const newFormValue = { ...formData, [name]: value };
    props.onChange(newFormValue);
  };

  const transformError = (message) => {
    const map = {
      required: '必填',
      minLength: '太短',
      maxLength: '太长'
    }
    return props.transformError && (props.transformError(message) || map[message] || '未知错误');
  };

  return (
    <form onSubmit={onSubmit}>
      <table class="fui-form-table">
        {props.fields.map((f) => (
          <tr className={classes('fui-form-tr')} key={f.name}>
            <td className="fui-form-td">
              <span className="fui-form-label">{f.label}</span>
            </td>
            <td className="fui-form-td">
              <Input
                className="fui-form-input"
                type={f.input.text}
                value={formData[f.name]}
                onChange={(e) => onInputChange(f.name, e.target.value)}
                // onChange={onInputChange.bind(null, f.name)}
              />
              <div class="fui-form-error">
                {props.errors[f.name] ? 
                  (props.errorsDisplayMode === 'first' ?
                  transformError(props.errors[f.name][0]) : props.errors[f.name].map(transformError).join('，')) :
                  <span>&nbsp;</span>}
              </div>
            </td>
          </tr>
        ))}
        <tr className="fui-form-tr">
          <td className="fui-form-td"></td>
          <td className="fui-form-td">{props.buttons}</td>
        </tr>
      </table>
    </form>
  );
};
Form.defaultProps = {
  errorsDisplayMode: 'all',
}

export default Form;
