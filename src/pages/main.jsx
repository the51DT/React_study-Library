
import useStore from '../hooks/store';

export default function Page() {
  const { bears, increasePopulation, removeAllBears } = useStore( state => state)

  return (
    <>
      <div className='main'>
        <h1>{ bears } around here ...</h1>
        <button onClick = { increasePopulation }> up </button>
        <button onClick= { removeAllBears }>remove</button>
        {/* <button onClick= { setActiveTheme }>Active set</button> */}
      </div>
    </>
  );
}
