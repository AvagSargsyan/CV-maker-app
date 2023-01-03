import { useState } from 'react';
import MainInfoEdit from './components/MainInfoEdit';
import MainInfo from './components/MainInfo';
import EducationEdit from './components/EducationEdit';
import Education from './components/Education';
import ExperienceEdit from './components/ExperienceEdit';

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

  const [experienceState, setExperienceState] = useState([]);

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
  };

  const addExperienceUnit = (newUnit) => {
    setExperienceState((prevState) => [...prevState, newUnit]);
  };

  const deleteExperienceUnit = (id) => {
    const newState = experienceState.filter((unit) => unit.id !== id);

    setExperienceState(newState);
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
          <ExperienceEdit
            experienceState={experienceState}
            deleteExperienceUnit={deleteExperienceUnit}
            addExperienceUnit={addExperienceUnit}
          />
        </>
      ) : (
        <>
          <MainInfo mainInfoState={mainInfoState} />
          <Education educationState={educationState} />
        </>
      )}
    </div>
  );
}

export default App;
