import Link from "next/link";
import Layout from "../components/Layout";

const timeline = [
  { year: "1875", text: "Заснування університету в австро-угорському стилі з першим корпусом у Резиденції митрополитів" },
  { year: "1875-1911", text: "Наукове становлення" },
  { year: "1918-1959", text: "Від припинення діяльності до відновлення навчання" },
  { year: "1989-2011", text: "Одночасно навчальний комплекс та культурна пам'ятка" },
  { year: "2025", text: "Ювілей 150 років: цифрові сервіси, міжнародні партнерства та нові простори для студентів." }
];

const highlights = [
  {
    title: "Історія університету",
    text: "Як ЧНУ пройшов шлях від класичного університету до сучасного дослідницького центру.",
    href: "/history",
    image: "/assets/home/highlight-1.png"
  },
  {
    title: "Кампус і архітектура",
    text: "Резиденція буковинських митрополитів, ботанічний сад та аудиторії, що надихають.",
    href: "/campus",
    image: "/assets/home/highlight-2.png"
  },
  {
    title: "Люди й досягнення",
    text: "Викладачі, студенти та випускники, які творять репутацію ЧНУ на світовій арені.",
    href: "/people",
    image: "/assets/home/highlight-3.png"
  },
  {
    title: "10 цікавинок",
    text: "Коротка добірка історій і деталей про ЧНУ — від архітектурних родзинок до традицій, що народилися в стінах університету.",
    href: "/facts",
    image: "/assets/home/highlight-4.png"
  }
];

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="pill">150 років</div>
        <h1>Чернівецький національний університет: спадщина, інновації, спільнота</h1>
        <p>
          Від мальовничої Резиденції митрополитів до сучасних лабораторій і цифрових сервісів — ЧНУ
          поєднує повагу до історії з прагненням до майбутнього. Долучайтеся до святкування ювілею 150-річчя.
        </p>
        <div className="hero-actions">
          <Link className="btn primary" href="/history">
            Подивитися ключові етапи
          </Link>
          <Link className="btn" href="/campus">
            Прогулянка кампусом
          </Link>
        </div>
      </section>

      <section class="highlights">
        <h2 className="section-title">Чим пишаємось</h2>
        <p className="section-subtitle">Головні акценти ювілейного року: історія, простір, люди і цікаві факти.</p>
        <div className="highlights__grid">
          {highlights.map((item) => (
            <div key={item.title} className="card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link className="btn" href={item.href}>
                Детальніше
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">150 років у датах</h2>
        <p className="section-subtitle">Віхи, які сформували характер університету.</p>
        <div className="timeline">
          {timeline.map((item) => (
            <div key={item.year} className="milestone">
              <strong>{item.year}</strong>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
