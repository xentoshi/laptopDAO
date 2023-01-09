import DonatorsList from "./components/DonatorsList";
const DISCORD_INVITE = "https://discord.gg/YDQJXWzvC5"
const TWITTER_LINK = "https://twitter.com/laptopDAO"


function App() {

  return (
    <div>
      <p className="logo">💻 laptopDAO</p>
      <h3 className="links"><a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer">  👾 </a><a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer">  🐦  </a></h3>
      <h2>Buy a laptop for a kid</h2>
          <h3> ⚡ 
          <br></br>
          What is laptopDAO?</h3>
          <p> laptopDAO is a group of friends connecting passionate kids who cannot afford a laptop to those who can get them one. </p>
          <br></br>
          <h3> 🎁 
          <br></br>
          Donators </h3>
          <DonatorsList/>
          <p>Join us on <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer"> discord</a> and <a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer"> twitter</a> and let's talk there.  </p>
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