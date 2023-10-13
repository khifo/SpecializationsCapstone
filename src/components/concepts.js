import React from 'react';
import Header from './Header';
import Footer from './Footer';

const FootballConcepts = () => {
  return (
    <div>
      <Header />
      <div className="concepts-container">
        <h1>Football Concepts</h1>
        <PassGame />
        <RunGame />
        <CoveragesOnDefense />
        <specialTeams />
      </div>
      <Footer />
    </div>
  );
};

function PassGame() {
  return (
    <div>
      <h2>Pass Game</h2>
      <p>Here are some common passing concepts at all levels</p>
      <ul>
           <li><strong>Mesh:</strong> The mesh concept involves crossing routes over the middle and is great against man coverage.</li>
            <img className="resize2" src="https://i0.wp.com/youthfootballonline.com/wp-content/uploads/2018/04/Mesh-Passing-Concept-1.png?fit=968%2C445&ssl=1" alt="Mesh Concept"/>
           <li><strong>Smash:</strong> The smash concept combines a corner route and a hitch route, effective against zone coverage.</li>
            <img className="resize2" src="https://youthfootballonline.com/wp-content/uploads/2017/08/Smash-Passing-Concept-1.png" alt="Smash Concept"/>
           <li><strong>Verticals:</strong> The verticals concept uses vertical routes to overload deep zones.</li>
            <img className="resize2" src="http://insider.afca.com/wp-content/uploads/2018/07/Babcocok-1.jpg" alt="Verticals Concept"/>
           <li><strong>Double Slant:</strong> In double slant, two receivers run a slant route on the same side, great against Cover 2 and man coverage.</li>
            <img className="resize2" src="https://www.footballoutsiders.com/images/Minicamps/slantflats4.jpg" alt="Double Slant Concept"/>
        </ul>
    </div>
  );
}

function RunGame() {
  return (
    <div>
      <h2>Run Game</h2>
      <p>Here are some common run concepts at all levels.</p>
        <ul>
           <li><strong>Power:</strong> Power is a gap scheme run where a backside lineman pulls to wrap through the hole. A fullback or tight end would kick out.</li>
            <img className="resize2" src="https://i0.wp.com/youthfootballonline.com/wp-content/uploads/2018/04/BS-Guard-Kicking-out-1.png?resize=750%2C326&ssl=1" alt="Power Concept"/>
           <li><strong>Counter:</strong> Counter is a gap scheme run where two linemen pull, similar to power.</li>
            <img className="resize2" src="https://i0.wp.com/youthfootballonline.com/wp-content/uploads/2019/02/G-Counter-Play-1.png?resize=750%2C331&ssl=1" alt="Counter Concept"/>
           <li><strong>Trap:</strong> Trap is a quick-hitting play that intentionally leaves an inside defensive lineman unblocked.</li>
            <img className="resize2" src="http://cdn.insidethepylon.com/wp-content/uploads/2016/07/Trap-Block-XO-IMG1.png" alt="Trap Concept"/>
           <li><strong>Toss:</strong> Toss is an outside run play where as many as three players can pull depending on the design.</li>
            <img className="resize2" src="https://i0.wp.com/youthfootballonline.com/wp-content/uploads/2015/06/Toss-Sweep-1.jpeg?w=2048&ssl=1" alt="Toss Concept"/>
        </ul>
      </div>
  );
}

function CoveragesOnDefense() {
  return (
    <div>
      <h2>Coverages on Defense</h2>
      <p>Football coverage is how a defense defends the pass. With the popularity of spread offense at all levels, it is important to know the coverages and how to scheme against it. The number in coverage indicates how many players defend deep.</p>
        <ul>
           <li><strong>Cover 0:</strong> Cover 0 has no player deep, usually tied with a heavy blitz package, and utilizes man coverage.</li>
            <img className="resize2" src="https://lh4.googleusercontent.com/3KriSw5Q3LrsHb56go-_x_N4b4tYUAT7yTwBJKvUmUZsgfIKaxzlB8sBc6fHu6_uExYD4RnPM3rfNy9q7RIggnppLfYgK2NhAMTHZwrX7oBVOX4Dr4S9uMuFfrq7pnuXnar1Tp8" alt="Cover 0"/>
          <li><strong>Cover 1:</strong> Cover 1 has 1 player deep in the middle of the field with man coverage underneath.</li>
            <img className="resize2" src="http://cdn.insidethepylon.com/wp-content/uploads/2015/12/Cover-1-Diagram.jpg" alt="Cover 1"/>
          <li><strong>Cover 2:</strong> Cover 2 has 2 players deep, each covering one half of the field with either zone or man coverage underneath.</li>
            <img className="resize2" src="http://cdn.insidethepylon.com/wp-content/uploads/2015/12/Cover-2-Diagram.jpg" alt="Cover 2"/>
          <li><strong>Cover 3:</strong> Cover 3 has 3 players deep, with each player covering 1/3 of the field.</li>
            <img className="resize2" src="https://www.liveabout.com/thmb/Pb9TLsxF63c4cvXq6UzY-uqM5QE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cover_3-56a3139b3df78cf7727bb27d.jpg" alt="Cover 3"/>
          <li><strong>Cover 4:</strong> Cover 4 has 4 players deep, with each player covering 1  </li>
        </ul>
    </div>

  );
}

function specialTeams () {
  return (
    <div>
    <h2>Special Teams</h2>
    <p>Special Teams is often overlooked because coaches and players don't think it is important as offense or defense. Special teams include Kickoff, Kickoff Return, Punt, Punt Return, Field Goal, and Field Goal block.</p>
    <ul>
      <li>Kickoff starts a drive where a kicker kicks the ball to the opposing team and the other players run down the field to make a tackle. </li>
      <li>Kickoff Return receives the kick to run the ball as far as they can get for the offensive possession</li>
      <li>Punt occurs at the end of an offensive drive when a team cannot convert a first down</li>
      <li>Punt Return occurs when a defense stops the offense from converting a first down </li>
      <li>Field Goal occurs when a touchdown is made or when not converting a first down to score points</li>
      <li>Field Goal block occurs when the defense blocks an attempted field goal</li>
    </ul>
    </div>

  )
}
export default FootballConcepts;
