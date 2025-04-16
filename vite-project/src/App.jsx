import AboutPage from "./About";


function MyButton() {
  return (
    <button className="bg-[#ff9800] py-[2px] px-[6px] text-[#fff] rounded-[5px] hover:bg-orange-500 hover:-translate-y-1 transition-all duration-200 ">I'm a button</button>
  );
}


function Text() {
  return <h1 className="text-3xl font-extrabold text-blue-700 ">Welcome to my app</h1>;
 
}

function App() {
  return (
    <div className="bg-neutral-400 h-screen flex items-center justify-center flex-col gap-2">
      <Text/>
      <MyButton />
      {/* <AboutPage/> */}
    </div>
  );
}

export default App
