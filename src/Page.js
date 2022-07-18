
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
        <div className="logo">laptopDAO</div>
        <button className="signup-button">
              <a href={FORM} target="_blank" rel="noopener noreferrer"> 
              ⚡ apply ⚡
              </a>
        </button>
        <button className="signup-button">
              <a href={REALMS} target="_blank" rel="noopener noreferrer"> 
              🎁 dao 🎁
              </a>
        </button>
        </div>
            {/*Socials*/}
            <a href={twitterLink} target="_blank" rel="noreferrer">
            <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
            </a>
            <a href={discordInvite} target="_blank" rel="noreferrer">
            <img alt="Discord Logo" className="discord-logo" src="discord-logo.svg" />
            </a>

        <div className="footer"> laptop model created by <a href={DRCMDA} target="_blank" rel="noopener noreferrer">@drcmda</a></div>
      </div>
  )
}
