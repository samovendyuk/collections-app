import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Cards() {
  const { t } = useTranslation();
  const [cards, setCards] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4200/users", { method: "GET" })
      .then((response) => response.json())
      .then((json) => setUsers(json));
    fetch("http://localhost:4200/posts", { method: "GET" })
      .then((response) => response.json())
      .then((json) => setCards(json));
  }, []);

  const sortedCards = cards
    .slice(cards.length - 5, cards.length)
    .sort((a, b) => a.created - b.created)
    .reverse();

  return (
    <>
      <h3 style={{ paddingLeft: "1rem" }}>{t("lastAdded")}</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingTop: "1rem",
          paddingLeft: "1rem",
          gap: "2rem",
        }}
      >
        {sortedCards
          ? sortedCards.map((card) => (
              <div
                key={card.id}
                class="card"
                style={{
                  width: "15rem",
                  boxShadow: " 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff",
                }}
              >
                <div class="card-body">
                  <h5 class="card-title">{users[card.avtor_id - 1].name}</h5>
                  <p class="card-text">{card.description}</p>
                  <button type="button" class="btn btn-primary">
                    See more...
                  </button>
                </div>
              </div>
            ))
          : "not cards"}
      </div>
    </>
  );
}
