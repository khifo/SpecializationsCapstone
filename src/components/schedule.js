import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Schedule () {
  const scheduleData = [
    {
      date: '2023-08-12',
      time: '9:00 AM',
      teamA: 'Pleasant Grove 3rd Grade',
      teamB: 'Westlake 3rd Grade',
      location: 'Community Stadium'
    },
    {
      date: '2023-08-12',
      time: '10:30 AM',
      teamA: 'Provo 4th Grade',
      teamB: 'Springville 4th Grade',
      location: 'Sports Park'
    },
    {
      date: '2023-08-12',
      time: '12:00 PM',
      teamA: 'Provo 5th Grade',
      teamB: 'Springville 5th Grade',
      location: 'Sports Park'
    },
    {
      date: '2023-08-12',
      time: '12:00 PM',
      teamA: 'Spanish Fork 6th Grade',
      teamB: 'Payson 6th Grade',
      location: 'Pioneer Park'
    },
    {
      date: '2023-08-12',
      time: '1:30 PM',
      teamA: 'Lone Peak 7th Grade',
      teamB: 'Lehi 7th Grade',
      location: 'Lehi Sports Park'
    },
    {
      date: '2023-08-12',
      time: '2:00 PM',
      teamA: 'American Fork 8th Grade',
      teamB: 'Skyridge 8th Grade',
      location: 'Memorial Park'
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
