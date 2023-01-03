import '../styles/Education.scss';

export default function Education({ educationState }) {
  return (
    <>
      <h2>Educational Experience</h2>
      <div className="education-prev">
        {educationState.map((unit) => (
          <div className="education-unit-prev" key={unit.id}>
            <div>
              <span>Institution:</span> {unit.institution}
            </div>
            <div>
              <span>From:</span> {unit.from}
            </div>
            <div>
              <span>To:</span> {unit.to}
            </div>
            <div>
              <span>Qualification:</span> {unit.qualification}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
