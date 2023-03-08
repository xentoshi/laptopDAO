export default function DonorsList () {

    const data = [
        {
        name: "heyayushh", 
        twitter: <a href="https://twitter.com/heyayushh" target="_blank" rel="noopener noreferrer" >@heyayushh</a>,
        numberOfLaptops: "3",
       },
        {
            name: "smol coders", 
            twitter: <a href="https://twitter.com/smolcoders" target="_blank" rel="noopener noreferrer" >@smolcoders</a>, 
            numberOfLaptops: "2",
        },
        {
          name: "aryan", 
          twitter: <a href="https://twitter.com/_0xaryan" target="_blank" rel="noopener noreferrer" >@_0xaryan</a>, 
          numberOfLaptops: "1",
        },
        {
          name: "kratijain", 
          twitter: <a href="https://twitter.com/@kratijain" target="_blank" rel="noopener noreferrer" >@kratijain</a>, 
          numberOfLaptops: "1",
        },
        {
          name: "wilder", 
          twitter: "wilder", 
          numberOfLaptops: "1",
        },
    ];
    
     return (
        <div>
            <table>
            <tr>
              <th>Twitter</th>
              <th># of laptops</th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.twitter}</td>
                  <td>{val.numberOfLaptops}</td>
                </tr>
              )
            })}
          </table>
        </div>
     )
    };