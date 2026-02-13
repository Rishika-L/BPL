import React from 'react';
import { Input, Form } from 'antd';

export default function FormInput({
  label,
  id,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  required = false,
  disabled = false,
  rules = [],
  ...rest
}) {
  return (
    <Form.Item
      label={label}
      name={id}
      className='text-primary-800 font-medium'
      rules={[
        ...(required ? [{ required: true, message: `${label} is required` }] : []),
        ...rules,
      ]}
    >
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
    </Form.Item>
  );
}
