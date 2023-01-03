export default function Education({ educationState }) {
  return (
    <div>
      <h2>Educational Experience</h2>
      {educationState.map((unit) => (
        <div className="education-unit-prev" key={unit.id}>
          <div>Institution: {unit.institution}</div>
          <div>From: {unit.from}</div>
          <div>To: {unit.to}</div>
          <div>Qualification: {unit.qualification}</div>
        </div>
      ))}
    </div>
  );
}
