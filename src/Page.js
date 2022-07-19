
const REALMS = "https://realms.today/dao/laptopDAO"
const FORM = "https://airtable.com/shrG4Ovb6HqQAZt19"
const DRCMDA = "https://github.com/drcmda"
const discordInvite = "https://discord.gg/yGkzajsC";



const twitterHandle = "laptopDAO";
const twitterLink = `https://twitter.com/${twitterHandle}`;

export default function Example() {
  return (
    <div>
      <div className="main">
        <div className="logo">(o˘◡˘o)	</div>
              <a href={FORM} target="_blank" rel="noopener noreferrer"> 
              <button className="signup-button">
              ⚡ apply ⚡
              </button>
              </a>
              <a href={REALMS} target="_blank" rel="noopener noreferrer"> 
              <button className="signup-button">
              🎁 dao 🎁
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
            <iframe title="pika" src="https://giphy.com/embed/67KsrjDg2bUWI5uyvB" width="140" height="140" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <div className="footer"> laptop model created by <a href={DRCMDA} target="_blank" rel="noopener noreferrer">@drcmda</a></div>
      </div>
  )
}
