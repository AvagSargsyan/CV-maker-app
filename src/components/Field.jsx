import { useState } from 'react';

export default function Field({ fieldName, fieldValue, updateFieldValue }) {
  const [fieldEditMode, setfieldEditMode] = useState(true);
  const [inputValue, setInputValue] = useState(fieldValue);

  const toggleEditMode = () => {
    setfieldEditMode((prevMode) => !prevMode);
  };

  return (
    <div className="field">
      {fieldEditMode ? (
        <>
          {fieldValue}
          <button onClick={() => toggleEditMode()}>Edit</button>
        </>
      ) : (
        <form
          className="field-edit"
          onSubmit={(e) => {
            e.preventDefault();
            if (inputValue) {
              updateFieldValue(fieldName, inputValue);
              toggleEditMode();
            }
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button>Save</button>
        </form>
      )}
    </div>
  );
}
