import React from "react";
import Navbar, { Nav } from "../../nav/Navbar";
import Brand from "../../brand/Brand";
import MenuContent from "./MenuContent";

const menuContent = [
  { name: "Home", to: "/" },

  {
    name: "Services",

    dropdownMenu: [
      { name: "What We Do", to: "/services" },
      { name: "Consultancy", to: "/services/consultancy" },
      { name: "Design", to: "/services/design" },
      { name: "Project Management", to: "/services/project-management" },
      { name: "Implementation", to: "/services/implementation" },
      { name: "System Integarion", to: "/services/system-integration" },
      { name: "System Maintenance", to: "/services/system-maintenance" },
    ],

    // {
    //   name: "Grids",
    //   dropdownMenu: [
    //     { name: "Grid 2 Columns", to: "/portfolio" },
    //     { name: "Grid 3 Columns", to: "/portfolio-2" },
    //   ],
    // },
  },
  { name: "Solutions", to: "/solutions" },
  { name: "Certifications", to: "/certifications" },
  { name: "Blogs", to: "/blog-details" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

const TransitMenu = ({ hamburger }) => {
  let $key = 0;
  const getSubMenu = (items) => {
    $key++;
    if (items.dropdownMenu) {
      return (
        <Nav.Dropdown name={items.name} key={$key}>
          {items.dropdownMenu.map((item) => getSubMenu(item))}
        </Nav.Dropdown>
      );
    }
    return (
      <Nav.Link to={items.to} key={$key}>
        {items.name}
      </Nav.Link>
    );
  };

  return (
    <Navbar hamburger={hamburger}>
      <Navbar.Brand to={"/"}>
        <Brand height="65px" width="190px" />
      </Navbar.Brand>

      <Navbar.Collapse cover="Menu">
        <Nav>{menuContent.map((item) => getSubMenu(item))}</Nav>
        <MenuContent className="section-margin" />
      </Navbar.Collapse>
    </Navbar>
  );
};

TransitMenu.defaultProps = {
  hamburger: false,
};

export default TransitMenu;
