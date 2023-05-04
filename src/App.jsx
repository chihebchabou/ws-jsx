export const fullName = 'John Doe';
export const age = 25;

function App() {
  const workshop = 'Workshpo JSX & Component';
  const isAuthenticated = false;
  if (isAuthenticated) {
    return (
      <>
        <h1>Welcome {fullName}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          nesciunt?
        </p>
      </>
    );
  }
  return (
    <>
      <h1>{workshop}</h1>
      <h3>
        {isAuthenticated === true ? `Welcome ${fullName}` : 'Guest profile'}
      </h3>
      <p>learn jsx</p>
      <p>{1 + 2}</p>
    </>
  );
}

export default App;
