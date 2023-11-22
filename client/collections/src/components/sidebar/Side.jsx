import styles from "./sidebar.module.css";
import { useTranslation } from "react-i18next";

export default function SideBar() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <span>{t("col.mycol")}</span>
      <span>{t("col.create")}</span>
    </div>
  );
}
