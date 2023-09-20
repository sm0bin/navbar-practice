import Header from "./components/Header";
import ServicePlans from "./components/ServicePlans";
import "./App.css";
import Charts from "./components/Charts";
import Headline from "./components/Headline";

const App = () => {
  return (
    <>
      {/* <Nav></Nav> */}
      <Header></Header>
      <Headline headline={"Discover Our Flexible Service Plans"}></Headline>
      <ServicePlans></ServicePlans>
      <Headline headline={"Visualizing Website Performance"}></Headline>
      <Charts></Charts>
    </>
  );
};

export default App;
