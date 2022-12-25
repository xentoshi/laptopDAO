const DISCORD_INVITE = "https://discord.gg/YDQJXWzvC5"
const TWITTER_LINK = "https://twitter.com/laptopDAO"


function App() {

  return (
    <div>
      <p className="logo">laptopDAO</p>
      <h3 className="links"><a href={DISCORD_INVITE}>  👾 </a><a href={TWITTER_LINK}>  🐦  </a></h3>
      <h2>Buy a laptop for a kid</h2>
          <h3> ⚡ 
          <br></br>
          What is laptopDAO?</h3>
          <p> laptopDAO is a group of friends connecting passionate kids who cannot afford a laptop to those who can get them one. </p>
          <br></br>
          <h3> 🎁 
          <br></br>
          Donate & become a member</h3>
          <p>We are inviting laptopDAO friends to sign up as ambassadors to help us with our logistics! 
          <br></br>
          Join us on <a href={DISCORD_INVITE}> discord</a> and <a href={TWITTER_LINK}> twitter</a> and let's talk there.  </p>
          <br></br>
          <h3>
             🧸 
            <br></br>Motivation</h3>
          <p> Random person bought laptop to me when I couldn’t afford one, that changed my life so I set on a mission to spread that philosophy further. 
          <br></br>
          <h3>Magic can happen when there is someone believing in you. </h3>
         </p>
    </div>
  );
}

export default App;