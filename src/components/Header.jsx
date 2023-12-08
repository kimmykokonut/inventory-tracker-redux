function Header() {
  const styleHead = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
  return (
    <>
      <h1>Praline's Own Made Ice Cream</h1>
      <hr />
      <div style={styleHead}>
        <button id="navBtn">☰</button>
        <form id="keySearch" name="keySearch">
          <input type="text" name="keySearch" placeholder="What do you seek?"></input>
          <button id="searchBtn">🔍</button>
        </form>
        <button id="cart">🛒</button>
      </div>
    </>
  );
}
export default Header;