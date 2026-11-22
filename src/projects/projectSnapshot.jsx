import React from 'react';
import './ProjectSnapshot.css';

const snapshotData = [
  { area: 'Type', details: 'Concept project, tested prototype' },
  { area: 'Role', details: 'Concept project, tested prototype' },
  { area: 'Users', details: 'Compliance reviewers, Finance Ops, employees submitting expenses' },
  { area: 'Platforms', details: 'Web for compliance operations, mobile for employees' },
  { area: 'Validation', details: '4 moderated prototype sessions, 4 SME reviews, 3 major iterations' },
];

export default function ProjectSnapshot() {
  return (
    <section className="snapshot-container">
      <h2 className="snapshot-title">Project Snapshot</h2>
      <div className="table-wrapper">
        <table className="snapshot-table">
          <thead>
            <tr>
              <th>Area</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {snapshotData.map((row, index) => (
              <tr key={index}>
                <td className="area-cell">{row.area}</td>
                <td className="details-cell">{row.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}