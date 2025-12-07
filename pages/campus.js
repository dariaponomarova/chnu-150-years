import Layout from "../components/Layout";

const spaces = [
  {
    title: "Резиденція митрополитів",
    text: "Величний ансамбль у стилі історизму, що входить до списку ЮНЕСКО, нині — адміністративний центр та осердя студентського життя.",
    image: "https://placehold.co/600x360?text=Residence"
  },
  {
    title: "Ботанічний сад",
    text: "Більше ніж 5000 видів рослин, зелений простір для досліджень і відпочинку студентів протягом усього року.",
    image: "https://placehold.co/600x360?text=Botanical+Garden"
  },
  {
    title: "Сучасні лабораторії",
    text: "Нові аудиторії та дослідницькі лабораторії з ІТ, фізики й біології, обладнані для міждисциплінарних проєктів.",
    image: "https://placehold.co/600x360?text=Labs"
  },
  {
    title: "Студентські простори",
    text: "Коворкінги, медіацентри та простори для стартапів, де проходять хакатони, наукові семінари та культурні події.",
    image: "https://placehold.co/600x360?text=Student+Space"
  }
];

export default function CampusPage() {
  return (
    <Layout>
      <section className="hero">
        <div className="pill">Кампус</div>
        <h1>Простір, що надихає: архітектура і середовище ЧНУ</h1>
        <p>
          Прогулянка кампусом — це поєднання історичних фасадів, розлогих парків і нових лабораторних корпусів,
          де зустрічаються традиції та технології.
        </p>
      </section>

      <section>
        <h2 className="section-title">Локації, які варто побачити</h2>
        <p className="section-subtitle">Кожен куточок кампусу має свою історію та настрій.</p>
        <div className="grid">
          {spaces.map((space) => (
            <div key={space.title} className="card">
              <img src={space.image} alt={space.title} />
              <h3>{space.title}</h3>
              <p>{space.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="hero">
        <h2 className="section-title">Як дістатися</h2>
        <p className="section-subtitle">
          Основний корпус — вул. Коцюбинського, 2. Поруч — парк, бібліотека, студентські гуртожитки та медіацентр.
        </p>
        <div className="grid">
          <div className="card">
            <span className="pill">Транспорт</span>
            <p>Громадський транспорт до зупинки «Університет». Для гостей — вхід через головну браму Резиденції.</p>
          </div>
          <div className="card">
            <span className="pill">Екскурсії</span>
            <p>Щотижневі тури україномовні й англомовні; реєстрація відкрита онлайн упродовж ювілейного року.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
