import { useState } from "react";

export default function App() {
  //filter vai apenas filtrar os elementos do array
  const [FrutasFiltradas, setFrutasFiltradas] = useState([]);
  const frutas = [
    {
      nome: "Maça",
      preco: 8,
    },
    {
      nome: "kiwi",
      preco: 20,
    },
    {
      nome: "Banana",
      preco: 7,
    },
    {
      nome: "Caju",
      preco: 8,
    },
    {
      nome: "Melancia",
      preco: 5,
    },
    {
      nome: "Laranja",
      preco: 14,
    },
    {
      nome: "Goiaba",
      preco: 4,
    },
    {
      nome: "Jabuticaba",
      preco: 10,
    },
    {
      nome: "Acerola",
      preco: 10,
    },
  ];
  // () => {retorna logica}
  // () => (retorna tags)
  const promocao = () => {
    setFrutasFiltradas(
      frutas.filter((elemento) => {
        return elemento.preco <= 8;
      })
    );
  };

  return (
    <section>
      <h1>Hortifruti do Ray Fran</h1>
      <button onClick={promocao}>Frutas em Promoção</button>
      <div>
        {FrutasFiltradas.map((item) => (
          <ul>
            <li>{item.nome}</li>
            <li>{item.preco}</li>
          </ul>
        ))}
      </div>
    </section>
  );
}
