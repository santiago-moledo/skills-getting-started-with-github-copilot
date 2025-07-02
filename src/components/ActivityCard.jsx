```javascript
import React from 'react';
import './ActivityCard.css';

const ActivityCard = ({ activity }) => {
  return (
    <div className="activity-card">
      {/* Existing code for activity details */}

      {/* Participants Section */}
      <div className="participants-section" style={{
        marginTop: '1.5rem',
        padding: '1rem',
        background: '#f9fafb',
        borderRadius: '8px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
      }}>
        <h4 style={{ marginBottom: '0.5rem', color: '#2563eb' }}>Participantes</h4>
        {activity.participants && activity.participants.length > 0 ? (
          <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
            {activity.participants.map((p, idx) => (
              <li key={idx} style={{ marginBottom: '0.25rem', fontWeight: 500, color: '#374151' }}>
                {p}
              </li>
            ))}
          </ul>
        ) : (
          <span style={{ color: '#6b7280', fontStyle: 'italic' }}>Aún no hay participantes.</span>
        )}
      </div>
    </div>
  );
};

export default ActivityCard;
```