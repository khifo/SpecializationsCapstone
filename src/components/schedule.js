import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Schedule () {
  const scheduleData = [
    {
      date: '2023-08-12',
      time: '10:00 AM',
      teamA: 'Pleasant Grove 5th Grade',
      teamB: 'Westlake 5th Grade',
      location: 'Community Stadium'
    },
    {
      date: '2023-08-19',
      time: '11:30 AM',
      teamA: 'Provo 6th Grade',
      teamB: 'Springville 6th Grade',
      location: 'Sports Park'
    },
  ];

  return (
    <div>
      <Header />
      <div className="schedule-container">
        <h1>Upcoming Matches</h1>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Match</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.teamA} vs. {item.teamB}</td>
                <td>{item.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Schedule;
