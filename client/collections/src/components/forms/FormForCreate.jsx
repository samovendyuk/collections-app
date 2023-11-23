import { useTranslation } from "react-i18next";
import { useState } from "react";
import styles from "./loginForm.module.css";

const CreatePost = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  const [theme, setTheme] = useState("");

  const createPost = async () => {
    const response = await fetch(
      "https://server-collections-app.onrender.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          name: name,
          description: description,
          theme: theme,
          photos: "http",
          avtor_id: 2,
        }),
      }
    );
    console.log(theme, name);
    if (!response.ok) {
      console.log("Oops");
    }
  };

  return (
    <div className={styles.create}>
      <h1>{t("post.create")}</h1>
      <form onSubmit={createPost}>
        <div class=" mb-3">
          <input
            name="name"
            type="text"
            class="form-control"
            placeholder={t("post.name")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <input
            name="theme"
            type="text"
            class="form-control"
            placeholder={t("post.theme")}
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <textarea
            class="form-control"
            name="description"
            placeholder={t("post.description")}
            id="floatingTextarea2"
            value={description}
            style={{ height: "5rem" }}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div class="mb-3">
          <input
            name="file"
            type="file"
            class="form-control"
            placeholder={t("post.file")}
            value={file}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button type="submit" class="btn btn-primary btn-lg">
          {t("post.submit")}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
