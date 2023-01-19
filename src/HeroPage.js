import DonorsList from './Components/DonorsList'
import FAQ from './Components/FAQ';
const DISCORD_INVITE = "https://discord.gg/YDQJXWzvC5"
const TWITTER_LINK = "https://twitter.com/laptopDAO"
const DOCS_LINK = "https://laptopdao.notion.site/laptopDAO-3c90d35d918f4172bebbd8d3034b312c"



function App() {

  return (
    <div>
      <header>
        <div>
            <h1 className="logo">laptopDAO</h1>
              <div className="links">
                <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer">  👾 </a>
                <a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer">  🐦  </a>
                <a href={DOCS_LINK} target="_blank" rel="noopener noreferrer">  📝  </a>
              </div>
        </div>
      </header>
      <container>
      <h2>Buy a laptop for a kid</h2>
      <h3> ↓ <br></br>What is laptopDAO?</h3> 
      <p> laptopDAO is a group of friends connecting curious kids who cannot afford a laptop to those who can get them one. </p>
          <br></br>
          <h3> 🎁 
          <br></br>
          Donors </h3>
          <DonorsList/>
          <p>Join us on <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer"> discord</a> and <a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer"> twitter</a> and let's talk there.  </p>
          <br></br>
          <h3>
             🧸 
            <br></br>Motivation</h3>
          <p> Random person bought laptop to me when I couldn’t afford one, that changed my life so I set on a mission to spread that philosophy further. </p>
          <p>Magic can happen when there is someone believing in you. </p>
          <h3>💞</h3>
         <FAQ />
         <h3>🍀</h3>
      </container>
    </div>
    
  );
}

export default App;