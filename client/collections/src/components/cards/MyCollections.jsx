import { useEffect, useState } from "react";

export default function Personal() {
  const [col, setCol] = useState();
  const [current, setCurent] = useState();

  useEffect(() => {
    fetch("https://server-collections-app.onrender.com/allCol", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => setCol(json));
  }, []);

  //   const userActive = JSON.parse(localStorage.getItem("authData"));

  return (
    <>
      <div></div>
    </>
  );
}
