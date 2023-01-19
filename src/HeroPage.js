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
            <h1 className="logo">laptopDAO </h1>
              <div className="links">
                <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer">  👾 </a>
                <a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer">  🐦  </a>
                <a href={DOCS_LINK} target="_blank" rel="noopener noreferrer">  📝  </a>
              </div>
        </div>
      </header>
      <container>
      <h2>Buy a laptop for a kid</h2>
      <p>Provide a grant for a laptop & be part of the chain of happiness </p>
      <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer">
      <button class="button-35" role="button">Join us ( ^_^)／</button>
      </a>
      <h3>↓</h3>
      <h3>What is laptopDAO?</h3> 
      <p> laptopDAO is a group of friends connecting curious kids who cannot afford a laptop to those who can get them one. </p>
          <br></br>
      <h3>How we do it?</h3> 
      <p>We do things manually. This is a young non-profit, structure is yet to be developed.  You can review our <a href={DOCS_LINK} target="_blank" rel="noopener noreferrer">documentation</a> for more info. </p>
      <h3> Donors </h3>
          <DonorsList/>
          <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer">
            <button class="button-36" role="button">Donate ｡^‿^｡</button>
          </a>

      <h3>FAQ</h3>
         <FAQ />
      <h2>
        <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer"> 👾 </a> 
        <a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer"> 🐦 </a>
        <a href={DOCS_LINK} target="_blank" rel="noopener noreferrer">  📝  </a>
      </h2>
      </container>
    </div>
    
  );
}

export default App;