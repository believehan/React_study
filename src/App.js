import { Event1, Event2 } from "./subModule/Event1";

function App() {
  const style = {
    backgroundColor: 'red',
    color: 'white',
    fontSize: '3em',
    textDecoration: 'none',
  };

  return (
    <>
      <Event1 style={style} />
      <Event2 style={style} />
    </>
  );
}

export default App;