
const TWITTER_HANDLE = "https://twitter.com/xentoshi";
const BUILDSPACE = "https://buildspace.so/";

export default function Example() {
  return (
    <div className="main">
      <p> 私は <a href={TWITTER_HANDLE}>@xentoshi</a>です!</p>I'm hacker at <a href="https://buildspace.so/nights-weekends">N&W S1 program</a> by <a href={BUILDSPACE}>buildspace</a>
    </div>
  )
}
