import React from 'react';
import './ProjectSnapshot.css';

const snapshotData = [
  { area: 'Role', details: 'Product Designer & Builder ' },
  { area: 'Status', details: 'MVP in Development' },
  { area: 'Scope', details: 'Product Strategy, UX, UI, Prototype & Development' },
];

export default function ProjectSnapshotVoiceops() {
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