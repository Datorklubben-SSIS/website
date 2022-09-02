import React from "react";
import mainImage from "../MainPage.jpg";

export default function MainContainer() {
  return (
    <div
      style={{
        width: "80%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "space-evenly", gap: "5rem" }}
      >
        <div
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              textAlign: "center",
              fontSize: "36px",
              margin: "1rem 0px",
            }}
          >
            Om klubben
          </span>
          <span style={{ textAlign: "center", fontSize: "24px" }}>
            Datorklubben är ett ställe för dig där du hänga, snacka och hålla på
            med datorer. Vi håller på med allt från servrar till föreläsningar
            om unity och spelutveckling. Är du intresserad är det bara och komma
            hit. Vi håller till i Pac-Man på fredagar från 15:45.
          </span>
        </div>
        <div
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              textAlign: "center",
              fontSize: "36px",
              margin: "1rem 0px",
            }}
          >
            Allmän information
          </span>
          <span style={{ textAlign: "center", fontSize: "24px" }}>
            Har du frågor angående programmering eller hårdvara får du gärna
            ställa dem i{" "}
            <a href="https://discord.gg/U6kJPkdEhZ" style={{ color: "black" }}>
              Datorklubbens egna discordserver
            </a>
            .{" "}
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5rem",
        }}
      >
        <img alt="Datorklubben sesh img" src={mainImage} height="400px" />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <span>Bild från Datorklubben 2022-03-12</span>
      </div>
    </div>
  );
}
