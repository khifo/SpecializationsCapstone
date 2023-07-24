import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Schedule = () => {
  const scheduleData = [
    {
      date: '2023-08-12',
      time: '10:00 AM',
      teamA: 'Youth Team A',
      teamB: 'Youth Team B',
      location: 'Community Stadium'
    },
    {
      date: '2023-08-19',
      time: '11:30 AM',
      teamA: 'Youth Team C',
      teamB: 'Youth Team D',
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
