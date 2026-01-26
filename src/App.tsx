import Container from "./components/utility/Container";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";

const App = () => {
  return (
    <div className="text-pfg bg-pbg dark md:text-lg">
      <Container>
        <Hero></Hero>
        <Projects></Projects>
      </Container>
    </div>
  );
};

export default App;
