import React, { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import ReactDropdownSelect from "react-dropdown-select";
import styles from "./SearchableSelect.module.css";

const SearchableSelect = forwardRef(
  (
    {
      label,
      labelExtra,
      id,
      options=[],
      placeholder,
      showStar = true,
      disabled = false,
      upper = false,
      register,
      validation = {},
      errors,
      setValue,
      marginClass,
      containerClass,
      defaultValue,
      defaultid,
      searchable = true,
      loading=false
    },
    ref
  ) => {
    const modifiedOptions = [
      { label: placeholder, value: "", disabled: true },
      ...options,
    ];

    const [selectedValue, setSelectedValue] = useState(defaultValue || "");

    useEffect(() => {
      if (defaultValue) {
        setValue(id, defaultValue);
        setSelectedValue(defaultValue);
      }
    }, [defaultValue, setValue, id]);

    const handleDropdownChange = (selected) => {
      let value = selected[0]?.value || "";
      if (upper) {
        value = value.toUpperCase();
      }
      setValue(id, value);
      setSelectedValue(value);
    };

    // Expose the clearAll function to the parent component via ref
    useImperativeHandle(ref, () => ({
      clearAll: () => {
        setValue(id, "");
        setSelectedValue("");
        
      },
    }));

    return (
      <div
        className={`${styles.inputContainer} my-2 w-full ${
          marginClass ?? "mb-3"
        } `}
      >
        {label && (
          <label
            htmlFor={id}
            className={`mb-0 ${styles.label} flex items-center`}
            style={{ paddingBottom: ".25rem" }}
          >
            <span>{label}</span>
            
            {showStar && <span className="text-error text-sm"> *</span>}
            {labelExtra &&
              labelExtra

            }
          </label>
        )}
        <div className="">
          <ReactDropdownSelect
            id={id}
            {...register(id, validation)}
            options={modifiedOptions}
            value={modifiedOptions[2] ||''}
            placeholder={placeholder}
            searchable={searchable}
            disabled={disabled || loading}            
            clearable={true}
            loading={loading}
            clearOnSelect
            className={`mt-1 ${styles.darkCardBg} ${
              styles["searchable-select"]
            } ${upper ? styles["uppercase-input"] : ""} w-full ${
              errors[id] ? styles.error : ""
            }`}
            style={{ borderColor: errors[id] ? "red" : "#dbdade" }}
            onChange={(value) => {
              if (!value) {
                // Clear selected value if clearable icon is clicked
                handleDropdownChange(null);
              } else {
                handleDropdownChange(value);
              }
            }}
            values={
              selectedValue
                ? [{ value: selectedValue, label: selectedValue }]
                : []
            }
          />
        </div>
        {errors[id] && showStar && (
          <p className={`text-error text-md`}>{errors[id]?.message} </p>
        )}
      </div>
    );
  }
);

export default SearchableSelect;