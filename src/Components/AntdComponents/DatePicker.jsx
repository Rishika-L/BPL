import React from "react";
import { DatePicker, Form } from "antd";
export default function DatePickerInput({
  label,
  name,  // Make sure to accept name prop
  // Remove value and onChange - let Form handle these
  placeholder = "Select date",
  required = true,
  disabled = false,
  rules = [],
  ...rest
}) {
  return (
    <Form.Item
      name={name}  // This connects to the Form instance
      rules={[
        ...(required
          ? [{ required: true, message: `${label} is required` }]
          : []),
        ...rules,
      ]}
      colon={false}
      style={{ marginBottom: 16 }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        {label && (
          <span className="mb-1 text-primary-800 font-medium">
            {label}
            {required && <span className="text-error text-sm"> *</span>}
          </span>
        )}
        <DatePicker
          // Remove value and onChange props
          placeholder={placeholder}
          disabled={disabled}
          style={{ width: "100%" }}
          {...rest}
        />
      </div>
    </Form.Item>
  );
}