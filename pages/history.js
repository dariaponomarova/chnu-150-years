import Layout from "../components/Layout";

const milestones = [
  {
    year: "1875",
    title: "Початок",
    text: "Імператор Франц Йосип I засновує університет у Чернівцях. Кампус отримує центр у вигляді Резиденції митрополитів — перлину історизму."
  },
  {
    year: "1920–1930-ті",
    title: "Наукове становлення",
    text: "Формуються школи філології, права та природничих наук; бібліотека поповнюється десятками тисяч видань європейських університетів."
  },
  {
    year: "1940–1960-ті",
    title: "Розширення факультетів",
    text: "Створюються фізичний, математичний та біологічний факультети, відкриваються лабораторії, запускається ботанічний сад."
  },
  {
    year: "1995",
    title: "Національний статус",
    text: "Університет стає національним, поглиблює міжнародні зв’язки та бере участь у програмах академічної мобільності."
  },
  {
    year: "2010–2025",
    title: "Цифрова ера",
    text: "Модернізація інфраструктури, розвиток ІТ-кампусів, впровадження відкритих онлайн-курсів і сервісів для студентів."
  }
];

export default function HistoryPage() {
  return (
    <Layout>
      <section className="hero">
        <div className="pill">Історія</div>
        <h1>150 років розвитку Чернівецького національного університету</h1>
        <p>
          Від імператорського університету до центру інновацій регіону — шлях ЧНУ позначений
          багатокультурністю, науковими відкриттями та повагою до архітектурної спадщини.
        </p>
      </section>

      <section>
        <h2 className="section-title">Ключові етапи</h2>
        <p className="section-subtitle">Віхи, що визначили місію та цінності університету.</p>
        <div className="grid">
          {milestones.map((item) => (
            <div key={item.year} className="card">
              <span className="pill">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Архівні світлини</h2>
        <p className="section-subtitle">Ми зберігаємо пам’ять, щоб будувати майбутнє.</p>
        <div className="grid">
          <img src="https://placehold.co/330x360?text=Archival+Photo+1" alt="Архівне фото" />
          <img src="https://placehold.co/330x360?text=Archival+Photo+2" alt="Архівне фото" />
          <img src="https://placehold.co/330x360?text=Archival+Photo+3" alt="Архівне фото" />
        </div>
      </section>
    </Layout>
  );
}
