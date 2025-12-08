import Layout from "../components/Layout";

const people = [
  {
    name: "Юрій Федькович",
    role: "Покровитель і натхненник",
    text: "Письменник, громадський діяч, чиє ім’я носить університет. Символ культурної багатонаціональності Буковини.",
    image: "https://placehold.co/300x300?text=Fedkovych"
  },
  {
    name: "Викладачі-дослідники",
    role: "Наука й інновації",
    text: "Команди кафедр ІТ, фізики, біології та гуманітаристики, які залучають гранти ЄС, Horizon та реалізують міждисциплінарні проєкти.",
    image: "https://placehold.co/300x300?text=Faculty"
  },
  {
    name: "Студенти й випускники",
    role: "Спільнота майбутнього",
    text: "Випускники працюють у провідних компаніях і державних установах, створюють стартапи, ініціюють волонтерські програми.",
    image: "https://placehold.co/300x300?text=Students"
  }
];

const achievements = [
  "Міжнародні партнерства з університетами Польщі, Німеччини, Австрії та Румунії.",
  "Учасники олімпіад та хакатонів здобувають призові місця з математики, ІТ та філології.",
  "Понад 40 наукових лабораторій і центрів компетентностей у різних галузях.",
  "Волонтерські ініціативи підтримують громаду та ветеранів, організовують культурні події."
];

export default function PeoplePage() {
  return (
    <Layout>
      <section className="hero">
        <div className="pill">Люди</div>
        <h1>Люди, які творять університет</h1>
        <p>
          Викладачі, студенти, випускники й партнери — головний капітал ЧНУ. Ювілей — це історії людей,
          які щодня роблять університет місцем сили.
        </p>
      </section>

      <section>
        <h2 className="section-title">Обличчя ЧНУ</h2>
        <p className="section-subtitle">Ті, хто закладав фундамент цих 150 років.</p>
        <div className="grid">
          {people.map((person) => (
            <div key={person.name} className="card">
              <img src={person.image} alt={person.name} />
              <span className="pill">{person.role}</span>
              <h3>{person.name}</h3>
              <p>{person.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Досягнення спільноти</h2>
        <p className="section-subtitle">Короткі факти, якими ми пишаємося.</p>
        <div className="grid">
          {achievements.map((fact) => (
            <div key={fact} className="card">
              <p>{fact}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
