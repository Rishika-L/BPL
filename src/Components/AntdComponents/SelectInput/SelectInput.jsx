import React from "react";
import { Select, Form } from "antd";
import "./SelectInput.css";

export default function SelectInput({
  label,
  name,
  options = [],
  placeholder = "Select",
  required = true,
  disabled = false,
  rules = [],
  mode, // e.g., "multiple" for multi-select
  ...rest
}) {
  return (
    <Form.Item
      name={name}
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
        <Select
          className="custom-select"
          placeholder={placeholder}
          disabled={disabled}
          mode={mode}
          options={options}
          {...rest}
        />
      </div>
    </Form.Item>
  );
}