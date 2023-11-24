import { useTranslation } from "react-i18next";
import i18next from "./i18n";

function Welcome() {
  const { t } = useTranslation();

  const handleChange = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  return (
    <div>
      <div>
        <label>Set language</label>
        <select value={i18next.language} onChange={handleChange}>
          <option value="en">English</option>
          <option value="ru">Russian</option>
        </select>
      </div>
      <h1>{t("welcome")}</h1>
      <p>{t("language")}</p>
    </div>
  );
}

export default Welcome;
