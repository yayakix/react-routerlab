import {Link} from 'react-router-dom'
import stonks from '../data';



function Dashboard(){
 
    return (
      <>
        {stonks.map((stoink, index) => {
          return(
          <Link data={stonks} key={index} to={`/info/${stoink.symbol}`}>
            <h2>{stoink.name}</h2>
          </Link>

        )
        })}
      </>
    );
}

export default Dashboard;