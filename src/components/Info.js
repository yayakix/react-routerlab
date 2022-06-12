import stonks from "../data";

const Info = props => {
  const symbol = props.match.params.symbol;
  // console.log(props);
  const stonk = stonks.filter(data => data.symbol === symbol)[0]
  // const stonk = stonks.filter(number => number === 4);

  return (
    <>
      {stonk.name}
      {stonk.symbol}
      {stonk.name}
    </>
  );

}




export default Info;
