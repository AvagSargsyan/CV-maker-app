import { useState } from 'react';
import MainInfoEdit from './components/MainInfoEdit';
import MainInfo from './components/MainInfo';
import EducationEdit from './components/EducationEdit';

function App() {
  const [editMode, setEditMode] = useState(true);
  const [mainInfoState, setMainInfoState] = useState({
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phoneNumber: 'Phone Number',
  });

  const [educationState, setEducationState] = useState([
    // {
    //   id: Math.random(),
    //   institution: '',
    //   from: '',
    //   to: '',
    //   qualification: '',
    // },
  ]);

  const updateFieldValue = (fieldName, newText) => {
    setMainInfoState((prevState) => {
      return {
        ...prevState,
        [fieldName]: newText,
      };
    });
  };

  const deleteEducationUnit = (id) => {
    const newState = educationState.filter((unit) => unit.id !== id);

    setEducationState(newState);
  };

  const addEducationUnit = (newUnit) => {
    setEducationState((prevState) => [...prevState, newUnit]);
    console.log(newUnit);
    console.log(educationState);
  };

  return (
    <div className="App">
      <h1>CV Generator</h1>

      <button onClick={() => setEditMode((prevMode) => !prevMode)}>
        {editMode ? 'Preview' : 'Update CV'}
      </button>

      {editMode ? (
        <>
          <MainInfoEdit
            mainInfoState={mainInfoState}
            updateFieldValue={updateFieldValue}
          />
          <EducationEdit
            educationState={educationState}
            deleteEducationUnit={deleteEducationUnit}
            addEducationUnit={addEducationUnit}
          />
        </>
      ) : (
        <MainInfo mainInfoState={mainInfoState} />
      )}
    </div>
  );
}

export default App;
