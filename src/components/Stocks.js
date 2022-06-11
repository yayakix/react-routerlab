import {Link} from 'react-router-dom'
import stonks from '../data';



function Stocks(){

    return (
      <>
      {stonks.map((stoink, index) => (
        <Link key={index} to={`/stonks/${stoink.symbol}`}>
          <h2>{stoink.name}</h2>
        </Link>
      ))}
      </>
    );
}

export default Stocks;