export default function App() {
  const call = () => {
    console.log("hello");
  };
  return (
    <div>
      <button onClick={() => call()}>call</button>
    </div>
  );
}
