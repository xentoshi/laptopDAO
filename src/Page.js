
const docs = "https://laptopdao.notion.site/laptopDAO-3c90d35d918f4172bebbd8d3034b312c"
//const form = "https://airtable.com/shrG4Ovb6HqQAZt19"
const drcmda = "https://github.com/drcmda"
const pika = "https://giphy.com/embed/67KsrjDg2bUWI5uyvB"
const discordInvite = "https://discord.gg/zrKz8t3p3j";

const twitterHandle = "laptopDAO";
const twitterLink = `https://twitter.com/${twitterHandle}`;

export default function Example() {
  return (
    <div>
      <div className="main">
        <div className="logo">laptopDAO	</div>
        <p className="hint">Buy a laptop for a kid ⚡  </p>
        <br></br>
              <a href={docs} target="_blank" rel="noopener noreferrer"> 
              <button className="signup-button">
              contribute
              </button>
              </a>
        </div>
            {/*Socials*/}
            <a href={twitterLink} target="_blank" rel="noreferrer">
            <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
            </a>
            <a href={discordInvite} target="_blank" rel="noreferrer">
            <img alt="Discord Logo" className="discord-logo" src="discord-logo.svg" />
            </a>
            <iframe title="pika" src={pika} width="140" height="140" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <div className="footer"> laptop model created by <a href={drcmda} target="_blank" rel="noopener noreferrer">@drcmda</a></div>
      </div>
  )
}
