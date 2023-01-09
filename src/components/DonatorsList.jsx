export default function DonatorsList () {

const data = [
    {
        name: "javitoshi", 
        twitter: "@javitoshi", 
        numberOfLaptops: "2",
    },
];

 return (
    <div>
        <table styleName>
        <tr>
          <th>Name</th>
          <th>Twitter</th>
          <th># of laptops donated</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.twitter}</td>
              <td>{val.numberOfLaptops}</td>
            </tr>
          )
        })}
      </table>
    </div>
 )
};