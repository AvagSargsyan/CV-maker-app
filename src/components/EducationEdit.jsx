import { useState } from 'react';
import '../styles/EducationEdit.scss';

export default function EducationEdit({
  educationState,
  deleteEducationUnit,
  addEducationUnit,
}) {
  const [addUnitMode, setAddUnitMode] = useState(false);
  const [unitFormData, setUnitFormData] = useState({
    id: Math.random(),
    institution: '',
    from: '',
    to: '',
    qualification: '',
  });

  const submitNewUnit = (e) => {
    e.preventDefault();
    setUnitFormData((prevState) => {
      return {
        ...prevState,
        id: Math.random(),
      };
    });
    addEducationUnit(unitFormData);
    setUnitFormData({
      id: Math.random(),
      institution: '',
      from: '',
      to: '',
      qualification: '',
    });
    setAddUnitMode(false);
  };

  const toggleAddUnitMode = () => {
    setAddUnitMode((prevState) => !prevState);
  };

  return (
    <div className="education-edit">
      <h2>Educational Experience</h2>
      {addUnitMode ? (
        <form onSubmit={(e) => submitNewUnit(e)}>
          <div>
            <label htmlFor="school">School:</label>
            <input
              type="text"
              id="school"
              value={unitFormData.institution}
              onChange={(e) =>
                setUnitFormData({
                  ...unitFormData,
                  institution: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label htmlFor="from">From:</label>
            <input
              type="date"
              id="from"
              value={unitFormData.from}
              onChange={(e) =>
                setUnitFormData({
                  ...unitFormData,
                  from: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label htmlFor="to">To:</label>
            <input
              type="date"
              id="to"
              value={unitFormData.to}
              onChange={(e) => {
                setUnitFormData({
                  ...unitFormData,
                  to: e.target.value,
                });
                console.log(unitFormData);
              }}
            />
          </div>
          <div>
            <label htmlFor="qualification">Qualification:</label>
            <input
              type="text"
              id="qualification"
              value={unitFormData.qualification}
              onChange={(e) =>
                setUnitFormData({
                  ...unitFormData,
                  qualification: e.target.value,
                })
              }
            />
          </div>
          <button>Submit</button>
        </form>
      ) : (
        educationState.map((unit) => (
          <div className="education-unit" key={unit.id}>
            <div className="education-unit-text">
              <div>Institution: {unit.institution}</div>
              <div>From: {unit.from}</div>
              <div>To: {unit.to}</div>
              <div>Qualification: {unit.qualification}</div>
            </div>
            <button onClick={() => deleteEducationUnit(unit.id)}>X</button>
          </div>
        ))
      )}
      <button onClick={toggleAddUnitMode}>
        {addUnitMode ? 'Close' : 'Add'}
      </button>
    </div>
  );
}
