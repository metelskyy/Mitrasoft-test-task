import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Posts, AboutMe, Profile } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Posts />} />
          <Route path="profile" element={<Profile />} />
          <Route path="about-me" element={<AboutMe />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
