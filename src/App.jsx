import FooterSection from "./components/FooterSection"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import { setupAxiosInterceptors } from "./service/interceptor"


function App() {
  setupAxiosInterceptors();
  return (
    <>
      <Header />
      <HomePage />
      <FooterSection />
    </>
  )
}

export default App
