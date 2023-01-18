export default function DonorsList () {

    const data = [
        {
        name: "heyayushh", 
        twitter: <a href="https://twitter.com/heyayushh" target="_blank" rel="noopener noreferrer" >@heyayushh</a>,
        numberOfLaptops: "3",
       },
        {
            name: "javitoshi", 
            twitter: <a href="https://twitter.com/javitoshi" target="_blank" rel="noopener noreferrer" >@javitoshi</a>, 
            numberOfLaptops: "2",
        },
    ];
    
     return (
        <div>
            <table styleName>
            <tr>
              <th>Name</th>
              <th>Twitter</th>
              <th># of laptops</th>
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