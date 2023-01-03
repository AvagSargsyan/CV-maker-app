import { useState } from 'react';
import MainInfoEdit from './components/MainInfoEdit';
import MainInfo from './components/MainInfo';

function App() {
  const [editMode, setEditMode] = useState(true);
  const [mainInfoState, setMainInfoState] = useState({
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phoneNumber: 'Phone Number',
  });
  const updateFieldValue = (fieldName, newText) => {
    setMainInfoState((prevState) => {
      return {
        ...prevState,
        [fieldName]: newText,
      };
    });
  };

  return (
    <div className="App">
      <h1>CV Generator</h1>

      <button onClick={() => setEditMode((prevMode) => !prevMode)}>
        {editMode ? 'Preview' : 'Update CV'}
      </button>

      {editMode ? (
        <MainInfoEdit
          mainInfoState={mainInfoState}
          updateFieldValue={updateFieldValue}
        />
      ) : (
        <MainInfo mainInfoState={mainInfoState} />
      )}
    </div>
  );
}

export default App;
