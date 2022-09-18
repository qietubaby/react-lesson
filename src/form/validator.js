function isEmpty(value) {
  return value === undefined || value === null || value === "";
}

export function noError(errors) {
  return Object.keys(errors).length === 0;
}

const Validator = (formValue, rules, callback) => {
  let errors = {};
  const addError = (key, error) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(error);
  };
  rules.forEach((rule) => { // 把 map 改为了 forEach防止报警告
    const value = formValue[rule.key];
    if (rule.validator) {
      const promise = rule.validator.validate(value);
      addError(rule.key, {message: rule.validator.name, promise});
    }
    if (rule.required) {
      if (isEmpty(value)) {
        addError(rule.key, {message: 'required'});
      }
    }
    if (rule.minLength) {
      if (!isEmpty(value) && value.length < rule.minLength) {
        addError(rule.key, {message:  'minLength'});
      }
    }
    if (rule.maxLength) {
      if (!isEmpty(value) && value.length > rule.maxLength) {
        addError(rule.key, {message:  'maxLength'});
      }
    }
    if (rule.pattern) {
      if (!rule.pattern.test(value)) {
        addError(rule.key, {message: 'pattern'});
      }
    }
  });
  const promiseList = flat(Object.values(errors))
    .filter(item => item.promise)
    .map(item => item.promise)
  // callback(errors), callback(errors)
  const x = () => {
    const newErrors = fromEntries(Object.keys(errors).map(key => 
      [key, errors[key].map(item =>  item.message)]
    ));
    callback(newErrors)
  }
  // Promise.all(promiseList)
  //   .then(x,x)
  Promise.all(promiseList)
    .finally(x)
};

export default Validator;

function flat(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      result.push(...array[i]);
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

function fromEntries(array) {
  const result = {};
  for(let i = 0; i < array.length; i++) {
    result[array[i][0]] = array[i][1];
  }
  return result;
}
