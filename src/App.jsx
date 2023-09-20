import Nav from "./Nav";
import Header from "./Header";
import ServicePlans from "./ServicePlans";
import "./App.css";
import Charts from "./Charts";
import Headline from "./Headline";

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
