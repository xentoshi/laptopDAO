
const REALMS = "https://realms.today/dao/laptopDAO"
const PIKA = "https://media3.giphy.com/media/slVWEctHZKvWU/giphy.gif?cid=ecf05e47i3advtf7c6ui7u11afaqgxo3a95781220w42eve7&rid=giphy.gif&ct=g"
const FORM = "https://airtable.com/shrG4Ovb6HqQAZt19"
const DRCMDA = "https://github.com/drcmda"
const TWITTER_LINK = "https://twitter.com/laptopDAO"

export default function Example() {
  return (
    <div>
      <div className="main">
      <div className="logo">laptopDAO</div>
        <img src={PIKA} alt="pika" width="315px" />
        <div className="text">
          <div>
            <button className="signup-button">
              <a href={FORM} target="_blank" rel="noopener noreferrer"> 
              ⚡apply for laptop⚡
              </a>
              </button></div>
        <br></br>
         🌴 follow us on <a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer">twitter</a>
        <br></br>
        🏄‍♂️ coming soon on <a href={REALMS} target="_blank" rel="noopener noreferrer">solana</a>
        </div>
        <div className="footer"> model created in react three fiber by <a href={DRCMDA} target="_blank" rel="noopener noreferrer">@drcmda</a></div>
      </div>
  </div>
  )
}
