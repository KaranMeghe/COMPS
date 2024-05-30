import { Tabel } from "../components";

const TabelPage = () => {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 7, fav: "true" },
    { name: "Apple", color: "bg-red-500", score: 5, fav: "true" },
    { name: "Banana", color: "bg-yellow-500", score: 3, fav: "true" },
    { name: "Lime", color: "bg-green-400", score: 2, fav: "true" },
    { name: "Lichi", color: "bg-pink-500", score: 2, fav: "true" },
  ];

  const config = [
    { label: "Fruits", render: (fruit) => fruit.name },
    {
      label: "Color",
      render: (fruit) => <div className={`m-2 p-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      header: () => <th className="bg-red-500 p-2 text-white">Score</th>,
    },
    { label: "Fav", render: (fruit) => fruit.fav },
  ];

  const keyFn = (data) => data.name;

  return (
    <section>
      <Tabel data={data} config={config} keyFn={keyFn} />
    </section>
  );
};

export default TabelPage;
