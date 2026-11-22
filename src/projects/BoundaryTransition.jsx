import './ProjectSnapshot.css';

const transitionData = [
  { boundary1: 'Fast approvals', boundary2: 'Explainable decisions' },
  { boundary1: 'Hidden AI reasoning', boundary2: 'Rule + evidence visibility' },
  { boundary1: 'Limited audit support', boundary2: 'Full audit traceability' },
  { boundary1: 'Passive tracking', boundary2: 'Consent-based verification' },
];

export default function BoundaryTransition() {
  return (
    <section className="snapshot-container">
     <h2 className="boundary-scope-title">Boundary1 → Boundary2 Transition</h2>
      <h3 className="solution-feature-heading">System Evolution</h3>
      
      <div className="table-wrapper">
        <table className="snapshot-table">
          <thead>
            <tr>
              <th>Boundary1</th>
              <th>Boundary2</th>
            </tr>
          </thead>
          <tbody>
            {transitionData.map((row, index) => (
              <tr key={index}>
                <td className="area-cell">{row.boundary1}</td>
                <td className="details-cell">{row.boundary2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}