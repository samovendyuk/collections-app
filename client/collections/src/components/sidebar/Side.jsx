import { useNavigate } from "react-router-dom";
import styles from "./sidebar.module.css";
import { useTranslation } from "react-i18next";

export default function SideBar() {
  const { t } = useTranslation();
  const nav = useNavigate();

  return (
    <div className={styles.container}>
      <span onClick={() => nav("/home")}>{t("col.home")}</span>
      <span onClick={() => nav("/collection")}>{t("col.mycol")}</span>
      <span onClick={() => nav("/newpost")}>{t("col.create")}</span>
    </div>
  );
}
