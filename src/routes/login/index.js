import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Input, Button } from 'antd';
import styles from './index.less';

const FormItem = Form.Item;

class Login extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className={styles.form} size="large">
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
}

export default connect()(Form.create()(Login));
