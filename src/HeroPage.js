import DonatorsList from './Components/DonatorsList'
const DISCORD_INVITE = "https://discord.gg/YDQJXWzvC5"
const TWITTER_LINK = "https://twitter.com/laptopDAO"


function App() {

  return (
    <div>
      <header>
        <div>
        <h1 className="logo">laptopDAO</h1>
        <div className="links"><a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer">  👾 </a><a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer">  🐦  </a></div>
        </div>
      </header>
      <container>
      <h2>Buy a laptop for a kid</h2>
      <h3> ↓ <br></br>What is laptopDAO?</h3> 
      <p> laptopDAO is a group of friends connecting curious kids who cannot afford a laptop to those who can get them one. </p>
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
          <p>Magic can happen when there is someone believing in you. </p>
         </p>
      </container>

    </div>
    
  );
}

export default App;