import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <TopBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
