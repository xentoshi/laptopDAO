
const docs = "https://laptopdao.notion.site/laptopDAO-3c90d35d918f4172bebbd8d3034b312c"
const nation = "https://nation.io/a/laptopdao"
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
        <br/>
              <a href={nation} target="_blank" rel="noopener noreferrer"> 
              <button className="signup-button">
              join
              </button>
              </a>
        </div>
        <iframe title="pika" src={pika} width="100" height="100" frameBorder="0" class="pika" allowFullScreen></iframe>
        <div className="socials">
            {/*Socials*/}
            <a href={twitterLink} className="twitter" target="_blank" rel="noopener noreferrer">🐦</a>
            <a href={discordInvite} className="discord" target="_blank" rel="noopener noreferrer">👾</a>
            <a href={docs} className="docs" target="_blank" rel="noopener noreferrer">📚</a>
            </div>
        <div className="footer"> laptop model created by <a href={drcmda} target="_blank" rel="noopener noreferrer">@drcmda</a></div>
      </div>
  )
}
