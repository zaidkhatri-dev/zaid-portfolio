import Container from "./components/utility/Container";
import Hero from "./components/sections/Hero";

const App = () => {
  return (
    <div className="text-pfg bg-pbg dark md:text-lg min-h-dvh min-w-screen">
      <Container>
        <Hero></Hero>
      </Container>
    </div>
  );
};

export default App;
