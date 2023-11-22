import { useTranslation } from "react-i18next";
import i18next from "../../i18n";
import ThemeMode from "../theme/Theme";
import { useAuth } from "../context/AuthContext";

export default function NavbarActive() {
  const { t } = useTranslation();
  const { user, logOut } = useAuth();
  const handleChange = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  const handleBurgerMenu = () => {
    const temp = document.getElementById("navbarSupportedContent");
    if (temp.style.display === "block") {
      temp.style.display = "none";
    } else {
      temp.style.display = "block";
    }
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div
          class="container-fluid"
          style={{ fontSize: "1.5rem", cursor: "pointer" }}
        >
          {t("welcome")}
          <span style={{ marginLeft: "1rem" }}>{user}</span>
          <button
            onClick={handleBurgerMenu}
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>

            <select
              class="form-select"
              aria-label="Default select example"
              style={{ width: "7rem", marginRight: "20px" }}
              value={i18next.language}
              onChange={handleChange}
            >
              <option value="en">English</option>
              <option value="ru">Russian</option>
            </select>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder={t("nav.input")}
                aria-label="Search"
                changeInputPlaceholder
              />
              <button
                class="btn btn-outline-success"
                type="submit"
                style={{ marginRight: "40px" }}
              >
                {t("nav.button")}
              </button>
            </form>
            <button
              type="button"
              class="btn btn-light"
              style={{ marginRight: "20px" }}
              onClick={logOut}
            >
              {t("logout")}
            </button>

            <ThemeMode />
          </div>
        </div>
      </nav>
    </>
  );
}
