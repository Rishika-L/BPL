import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  useImperativeHandle,
} from "react";
import ReactDropdownSelect from "react-dropdown-select";
import styles from "./SearchableSelect.module.css";

const MultiSearchableSelect = (
  {
    label,
    id,
    options = [],
    placeholder,
    showStar = true,
    disabled = false,
    upper = false,
    register,
    validation = {},
    errors,
    setValue,
    marginClass,
    defaultValue = [],
    searchable = true,
    multiple = false,
    loading = false,
    labelExtra
  },
  ref
) => {
  const modifiedOptions = useMemo(
    () => [{ label: placeholder, value: "", disabled: true }, ...options],
    [options, placeholder]
  );

  const initialValues = useMemo(() => {
    try {
      return JSON.parse(defaultValue) || [];
    } catch {
      return Array.isArray(defaultValue) ? defaultValue : [];
    }
  }, [defaultValue]);

  const [selectedValues, setSelectedValues] = useState(initialValues);

  useEffect(() => {
    if (initialValues.length > 0) {
      setValue(id, initialValues);
      setSelectedValues(initialValues);
    }
  }, [initialValues, setValue, id]);

  const handleDropdownChange = useCallback(
    (selected) => {
      if (
        selected.length > 0 &&
        selected[selected.length - 1].value === "select-all"
      ) {
        const allValues = options.map((option) => option.value);
        let values = upper
          ? allValues.map((value) => value.toUpperCase())
          : allValues;
        setSelectedValues(values);
        setValue(id, values);
        return;
      }

      let values = selected.map((option) => option.value);
      if (upper) values = values.map((value) => value.toUpperCase());

      setSelectedValues(values);
      setValue(id, values);
    },
    [setValue, id, upper, options]
  );

  const selectedOptions = useMemo(
    () =>
      selectedValues.map((value) => ({
        value,
        label: options.find((opt) => opt.value === value)?.label || "",
      })),
    [selectedValues, options]
  );

  // Custom content renderer to show total count
  const contentRenderer = useCallback(({ props, state }) => {

    if (state.values.length === 0) {
      return <div className={styles.placeholder}>{props.placeholder}</div>;
    }

    return (
      <div className={styles.selectedCount}>{state.values.length} selected</div>
    );
  }, []);
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");

  useImperativeHandle(ref, () => ({
    clearAll: () => {
     setValue(id, []);
    setSelectedValues([]);
    },
  }));

  return (
    <div
      className={`${styles.inputContainer} my-2 w-full ${
        marginClass ?? "mb-3"
      }`}
    >
      {label && (
        <label
          htmlFor={id}
          className={`mb-0 ${styles.label}`}
          style={{ paddingBottom: ".25rem" }}
        >
          <span>{label}</span>
          {showStar && <span className="text-error text-sm"> *</span>}
           {labelExtra &&
              labelExtra
            }
        </label>
      )}
      <div>
        <ReactDropdownSelect
          id={id}
          {...register(id, validation)}
          options={modifiedOptions}
          value={selectedOptions}
          values={selectedOptions}
          defaultValue={selectedOptions}
          placeholder={placeholder}
          searchable={searchable}
          disabled={disabled || loading}
          clearable={selectedValues.length > 0}
          selectAll={true}
          loading={loading}
          selectAllLabel="Select all"
          clearOnSelect
          multi={multiple}
          contentRenderer={contentRenderer} // Add this prop
          className={`mt-1 ${styles.darkCardBg} ${
            styles["searchable-select"]
          } ${upper ? styles["uppercase-input"] : ""} w-full ${
            errors[id] ? styles.error : ""
          }`}
          style={{ borderColor: errors[id] ? "red" : "#dbdade" }}
          onChange={handleDropdownChange}
        />
      </div>
      {errors[id] && showStar && (
        <p className="text-error text-md">{errors[id]?.message}</p>
      )}
    </div>
  );
};

export default React.forwardRef(MultiSearchableSelect);
