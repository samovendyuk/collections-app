import CreatePost from "../components/forms/FormForCreate";
import NavbarActive from "../components/navbar/NavbarActive";
import SideBar from "../components/sidebar/Side";

function CreateItem() {
  return (
    <>
      <NavbarActive />
      <SideBar />
      <CreatePost />
    </>
  );
}

export default CreateItem;
