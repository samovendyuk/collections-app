import Personal from "../components/cards/MyCollections";
import NavbarActive from "../components/navbar/NavbarActive";
import SideBar from "../components/sidebar/Side";

function CollectionsPage() {
  return (
    <>
      <NavbarActive />
      <SideBar />
      <Personal />
    </>
  );
}

export default CollectionsPage;
