import Header from "./components/Header";

export default function HomePage() {
  const userName = "Visiteur";
  const today = new Date().toLocaleDateString();
  return (
      <div>
        <Header/>
          <h1>Bienvenue {userName}</h1>
          <h1>{today}</h1>
      </div>
  );
}
