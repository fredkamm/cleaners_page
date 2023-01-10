import Header from "./components/header";
import CleanerLandingPage from "./components/hero";
// import AboutMe from "./components/about"; 
import Contact from "./components/contact";
import Services from "./components/services";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <CleanerLandingPage />
      {/* <AboutMe /> */}
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
