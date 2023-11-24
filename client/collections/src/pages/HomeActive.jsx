import Cards from "../components/cards/Cards";
import NavbarActive from "../components/navbar/NavbarActive";
import SideBar from "../components/sidebar/Side";

function HomeActive() {
  return (
    <>
      <NavbarActive />
      <SideBar />
      <Cards />
    </>
  );
}

export default HomeActive;
