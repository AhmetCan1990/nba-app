import appStyle from "./App.module.css";
import Header from "./components/header";
import CardContainer from "./components/cardContainer";
function App() {
  return (
    <div className={appStyle.mainContainer}>
      <Header />
      <CardContainer />
    </div>
  );
}

export default App;
