import { useState } from 'react';

export default function ExperienceEdit({
  experienceState,
  deleteExperienceUnit,
  addExperienceUnit,
}) {
  const [addUnitMode, setAddUnitMode] = useState(false);
  const [unitFormData, setUnitFormData] = useState({
    id: Math.random(),
    companyName: '',
    title: '',
    tasks: '',
    yearExperience: 0,
  });

  const submitNewUnit = (e) => {
    e.preventDefault();
    setUnitFormData((prevState) => {
      return {
        ...prevState,
        id: Math.random(),
      };
    });
    addExperienceUnit(unitFormData);
    setUnitFormData({
      id: Math.random(),
      companyName: '',
      title: '',
      tasks: '',
      yearExperience: 0,
    });
    setAddUnitMode(false);
  };

  const toggleAddUnitMode = () => {
    setAddUnitMode((prevState) => !prevState);
  };

  return (
    <div className="experience-edit">
      <h2>Practical Experience</h2>
      {addUnitMode ? (
        <form onSubmit={(e) => submitNewUnit(e)}>
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            value={unitFormData.companyName}
            onChange={(e) =>
              setUnitFormData({
                ...unitFormData,
                companyName: e.target.value,
              })
            }
          />
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={unitFormData.title}
            onChange={(e) =>
              setUnitFormData({
                ...unitFormData,
                title: e.target.value,
              })
            }
          />
          <label htmlFor="tasks">Tasks:</label>
          <input
            type="text"
            id="tasks"
            value={unitFormData.tasks}
            onChange={(e) =>
              setUnitFormData({
                ...unitFormData,
                tasks: e.target.value,
              })
            }
          />
          <label htmlFor="yearExperience">Year Experience:</label>
          <input
            type="number"
            id="yearExperience"
            value={unitFormData.yearExperience}
            onChange={(e) =>
              setUnitFormData({
                ...unitFormData,
                yearExperience: e.target.value,
              })
            }
          />
          <button>Submit</button>
        </form>
      ) : (
        experienceState.map((unit) => (
          <div className="experience-unit" key={unit.id}>
            <div>Company Name: {unit.companyName}</div>
            <div>Title: {unit.title}</div>
            <div>Tasks: {unit.tasks}</div>
            <div>Experience (years): {unit.yearExperience}</div>
            <button onClick={() => deleteExperienceUnit(unit.id)}>
              Delete
            </button>
          </div>
        ))
      )}
      <button onClick={toggleAddUnitMode}>
        {addUnitMode ? 'Close' : 'Add'}
      </button>
    </div>
  );
}
