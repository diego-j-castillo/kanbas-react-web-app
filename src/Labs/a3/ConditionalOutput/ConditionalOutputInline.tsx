const CondtionalOutputInline = () => {
  const loggedIn = false;
  return (
    <>
      { loggedIn && <h2>Welcome If Else</h2> }
      { !loggedIn && <h2>Please login If Else</h2> }
    </>
  );
}
export default CondtionalOutputInline;