import Form from "./form";
import Button from "../button/button";
import { useState } from "react";
import Validator, { noError } from "./validator";

const usernames = ["frank", "james"];
const checkUserName = (username, succeed, fail) => {
  setTimeout(() => {
    if (usernames.indexOf(username) >= 0) {
      succeed();
    } else {
      fail();
    }
  }, 1000);
};

const FormExample = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [fields] = useState([
    { name: "username", label: "用户名", input: { type: "text" } },
    { name: "password", label: "密码", input: { type: "password" } },
  ]);

  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    const rules = [
      { key: "username", required: true },
      { key: "username", minLength: 4, maxLength: 16 },
      {
        key: "username",
        validator: {
          name: "unique",
          validate(username) {
            return new Promise((resolve, reject) => {
              checkUserName(username, resolve, reject);
            });
          },
        },
      },
      { key: "username", pattern: /^[A-Za-z0-9]+$/ },
      { key: "password", required: true },
    ];
    Validator(formData, rules, (errors) => {
      setErrors(errors);
      if (noError(errors)) {
        // 没错
        console.log("没错");
      }
    });
  };

  const transformError = (message) => {
    const map = {
      unique: '用户名已存在',
    }
    return map[message]
  }

  return (
    <div>
      {JSON.stringify(formData)}
      <Form
        value={formData}
        fields={fields}
        buttons={
          <>
            <Button type="submit" level="important">
              提交
            </Button>
            <Button type="button">返回</Button>
          </>
        }
        errors={errors}
        transformError={transformError}
        onChange={(newValue) => setFormData(newValue)}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default FormExample;
