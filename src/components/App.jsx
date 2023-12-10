import Header from "./Header";
import IceCreamControl from "./IceCreamControl";

function App() {
  const styleBody = {
    margin: '5%',
  }
  return (
    <>
      <div style={styleBody}>
        <Header />
        <hr />
        <IceCreamControl />
      </div>
    </>
  )
}
export default App;