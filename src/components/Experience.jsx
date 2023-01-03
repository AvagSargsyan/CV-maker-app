export default function Experience({ experienceState }) {
  return (
    <div>
      <h2>Practical Experience</h2>
      {experienceState.map((unit) => (
        <div className="education-unit-prev" key={unit.id}>
          <div>Company Name: {unit.companyName}</div>
          <div>Title: {unit.title}</div>
          <div>Tasks: {unit.tasks}</div>
          <div>Experience (years): {unit.yearExperience}</div>
        </div>
      ))}
    </div>
  );
}
