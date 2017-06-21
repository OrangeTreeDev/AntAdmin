import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Input, Button } from 'antd';
import styles from './index.less';

const FormItem = Form.Item;

const LoginPage = ({ dispatch, form:{
  getFieldDecorator,
  validateFields,
} }) => {
  function handleSubmit() {
    validateFields((err, values) => {
      if (!err) {
        console.log(values);
        dispatch({ type: '', playload: values });
      }
    });
  }
  return (
    <Form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.logo}>
        <img alt="logo" src="/avatar.jpg" />
        <span>嘉树</span>
      </div>
      <FormItem>
        {
          getFieldDecorator('username', {
            rules: [{
              required: true, message: 'please input your name',
            }],
          })(
            <Input placeholder="username" />
          )
        }
      </FormItem>
      <FormItem>
        {
          getFieldDecorator('password', {
            rules: [{ required: true, message: 'please input password' }],
          })(
            <Input type="password" placeholder="password" />
          )
        }
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>Sign in</Button>
      </FormItem>
    </Form>
  );

}

export default connect()(Form.create()(LoginPage));
