import { Outlet } from "react-router-dom";
import TopBarWide from "./components/TopBarWide";
import TopBarNarrow from "./components/TopBarNarrow";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <TopBarWide />
      <TopBarNarrow />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
