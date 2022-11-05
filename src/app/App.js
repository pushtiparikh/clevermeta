import { Routes, Route } from "react-router-dom";
import HomeV1 from "../pages/homeV1";
import Blogs from "../pages/blogs";
import BlogDetails from "../pages/blogDetails";
import ComingSoon from "../pages/comingSoon";
import AboutPage from "../pages/about";
import RoadmapPage from "../pages/roadmap";
import Collections from "../pages/collections";
import ContactPage from "../pages/contact";
import MintPageOne from "../pages/mint-1";
import FAQPage from "../pages/faq";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeV1 />} exact />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/post" element={<BlogDetails />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/roadmap" element={<RoadmapPage />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/mint-1" element={<MintPageOne />} />
    </Routes>
  );
}

export default App;
