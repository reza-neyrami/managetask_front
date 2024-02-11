import { Button, TextField, TextareaAutosize } from "@mui/material";
import PropTypes from "prop-types";
import { memo, useEffect, useState } from "react";
import styled from "styled-components";

const CountingTextAreaWrapper = styled.div`
  text-align: left;
  margin: 0.5em;

  textarea {
    resize: vertical;
    width: 100%;
    border: 1px solid rgb(85, 85, 102);
    border-radius: 10px;
    font-family: fateme;
    height: 250px !important;
    overflow: auto !important;
    margin-left: 10px;
    margin-right: 10px;
    text-align: right;
    direction: ltr;
  }

  > .btn {
    border-radius: 15px;
    padding: 0.3em 0;
    margin: 0 0.2em;

    &.btn-ok:not(:disabled) {
      background: #05a3e8;
      color: #fff;

      :bold {
        opacity: 0.8;
      }
    }
  }

  > .textCounter {
    float: right;
    color: #444;
    font-size: 0.8em;
    padding-right: 0.8em;
  }
`;

function CountingTextArea({
  defaultValue,
  maxLength,
  cancelable,
  placeholder,
  onChange,
}) {
  const [value, setValue] = useState(defaultValue);
  const [remainLength, setRemainLength] = useState(maxLength);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    setRemainLength(maxLength - value.length);
  }, [value, maxLength]);

  function handleChange(e) {
    const newValue = e.target.value;
    if (newValue.length <= maxLength) {
      setValue(newValue);
    }
  }

  function handleOnOk() {
    onChange(value);
  }

  function handleOnCancel() {
    onChange(null);
  }

  const isButtonDisabled = !value || value.length > maxLength;

  return (
    <CountingTextAreaWrapper className="CountingTextArea">
      <TextareaAutosize
        rows={4}
        margin="normal"
        variant="outlined"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="textarea-a"
        // inputProps={{ maxLength }}
      />

      <span className="textCounter">
        {remainLength > -1
          ? `کاراکتر باقیمانده ${remainLength}`
          : "طول ورودی قابل قبول نیست"}
      </span>

      <Button
        disabled={isButtonDisabled}
        className="btn btn-ok"
        onClick={handleOnOk}
      >
        تایید
      </Button>

      {cancelable && (
        <Button className="btn" onClick={handleOnCancel}>
          انصراف
        </Button>
      )}
    </CountingTextAreaWrapper>
  );
}

CountingTextArea.propTypes = {
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number.isRequired,
  cancelable: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

CountingTextArea.defaultProps = {
  defaultValue: "",
  placeholder: "",
  cancelable: true,
  maxLength: 500,
};

export default memo(CountingTextArea);
