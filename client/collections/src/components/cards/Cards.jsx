import { useState, useEffect } from "react";

export default function Cards() {
  const [cards, setCards] = useState([]);
  // const [test, setTest] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4200/posts", { method: "GET" })
      .then((response) => response.json())
      .then((json) => setCards(json));
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:4200/allCol", { method: "GET" })
  //     .then((response) => response.json())
  //     .then((json) => setTest(json));
  // }, []);

  // console.log(test[0].UsersCollections[0].avtor_id);

  const sortedCards = cards
    .slice(cards.length - 5, cards.length)
    .sort((a, b) => a.created - b.created)
    .reverse();

  return (
    <>
      <h3 style={{ paddingLeft: "1rem" }}>Last 5 added collections</h3>
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
                  <h5 class="card-title">{card.avtor_id}</h5>
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
