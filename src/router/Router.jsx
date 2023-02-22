import React, { useState, Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import useEffectLocation from "../hooks/useEffectLocation";
import Services from "../views/Services/Services";
import Consultancy from "../views/Services/Consultancy";
import Design from "../views/Services/Design";
import ProjectManagement from "../views/Services/ProjectManagement";
import Implementation from "../views/Services/Implementation";
import SystemIntegration from "../views/Services/SystemIntegration";
import SystemMaintenance from "../views/Services/SystemMaintenance";
import { Certifications } from "../views/Cerification/Certifications";

import "./style.scss";
import Solutions from "../views/Solutions/Solutions";
import BlogDetailsPage from "../views/blog/BlogDetailsPage";

// const Certifications = React.lazy(
//   async () => await import("../views/Cerification/Certifications")
// );
const Scrollbar = React.lazy(() => import("smooth-scrollbar"));

const MainDemo = React.lazy(() => import("../views/home/MainDemo"));
const Demo2 = React.lazy(() => import("../views/home/Demo2"));
const Demo3 = React.lazy(() => import("../views/home/Demo3"));

const SliderOne = React.lazy(() => import("../views/slider/SliderOne"));
const SliderTow = React.lazy(() => import("../views/slider/SliderTow"));
const SliderThree = React.lazy(() => import("../views/slider/SliderThree"));

const Work = React.lazy(() => import("../views/Work"));
const WorkTow = React.lazy(() => import("../views/WorkTow"));
const ProjectDetails = React.lazy(() =>
  import("../views/portfolio/ProjectDetails")
);

const About = React.lazy(() => import("../views/About"));
const Contact = React.lazy(() => import("../views/Contact"));
const Blog = React.lazy(() => import("../views/blog/Blog"));

const Router = () => {
  const [transPage, setTransPage] = useState("in");
  const scrollbar: React.MutableRefObject<null | Scrollbar> = useSelector(
    (state) => state.scrollbar
  );

  const location = useEffectLocation((l) => {
    setTransPage("out");
  });

  const onAnimateEnd = () => {
    if (transPage !== "out") return;
    scrollbar.current?.scrollTo(0, 0, 0);
    window.scrollTo({ left: 0, top: 0 });
    setTransPage("in");
  };

  return (
    <div
      id="dsn-content"
      className={`dsn-transition-page dsn-animate-${transPage}`}
      onAnimationEnd={onAnimateEnd}
    >
      <Suspense fallback={<div className="background-main h-100-v" />}>
        <Routes location={location}>
          <Route path="/" element={<MainDemo />} />
          <Route path="/demo-2" element={<Demo2 />} />
          <Route path="/demo-3" element={<Demo3 />} />

          <Route path="/slider" element={<SliderOne />} />
          <Route path="/slider-2" element={<SliderTow />} />
          <Route path="/slider-3" element={<SliderThree />} />

          <Route exact path="/services" element={<Services />} />
          <Route exact path="/services/consultancy" element={<Consultancy />} />
          <Route exact path="/services/design" element={<Design />} />
          <Route exact path="/solutions" element={<Solutions />} />
          <Route exact path="/certifications" element={<Certifications />} />
          <Route
            exact
            path="/services/project-management"
            element={<ProjectManagement />}
          />
          <Route
            exact
            path="/services/implementation"
            element={<Implementation />}
          />
          <Route
            exact
            path="/services/system-integration"
            element={<SystemIntegration />}
          />

          <Route
            exact
            path="/services/system-maintenance"
            element={<SystemMaintenance />}
          />

          <Route exact path="/portfolio-2" element={<WorkTow />} />
          <Route exact path="/portfolio/:slug" element={<ProjectDetails />} />
          <Route exact path="/blog-details/:id" element={<BlogDetailsPage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/blog-details" element={<Blog />} />
          <Route exact path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default React.memo(Router);
