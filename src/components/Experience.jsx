import '../styles/Experience.scss';

export default function Experience({ experienceState }) {
  return (
    <div className="experience-prev">
      <h2>Practical Experience</h2>
      {experienceState.map((unit) => (
        <div className="experience-unit-prev" key={unit.id}>
          <div>
            <span>Company Name: </span>
            {unit.companyName}
          </div>
          <div>
            <span>Title: </span>
            {unit.title}
          </div>
          <div>
            <span>Tasks: </span>
            {unit.tasks}
          </div>
          <div>
            <span>Experience (years): </span>
            {unit.yearExperience}
          </div>
        </div>
      ))}
    </div>
  );
}
