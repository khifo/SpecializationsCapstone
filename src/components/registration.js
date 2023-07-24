
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/'
const Registration = () => {
  return (
    <div>
      <Header />
      <h1>Registration</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" required />
        <label htmlFor="team">Team:</label>
        <select id="team" name="team">
          <option value="team-a">Team A</option>
          <option value="team-b">Team B</option>
          <option value="team-c">Team C</option>
        </select>
        <label htmlFor="position">Position:</label>
        <input type="text" id="position" name="position" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
        <input type="submit" value="Register" />
      </form>
      <button id="payButton">Pay Now</button>
      <Footer />
    </div>
  );
};

export default Registration;
