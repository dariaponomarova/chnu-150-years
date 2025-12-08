import Layout from "../components/Layout";

const spaces = [
  {
    title: "Резиденція митрополитів",
    text: "Величний ансамбль у стилі історизму, що входить до списку ЮНЕСКО, нині - адміністративний центр та осердя студентського життя.",
    image: "/assets/campus/residence.png"
  },
  {
    title: "Ботанічний сад",
    text: "Справжній музей живих рослин з різних еколого-географічних зон світу - це простір для досліджень і відпочинку студентів протягом усього року.",
    image: "/assets/campus/botsad.png"
  },
  {
    title: "Студентські простори",
    text: "Коворкінги, медіацентри для стартапів, де проходять хакатони, наукові семінари та культурні події, нові аудиторії та дослідницькі лабораторії з ІТ, обладнані для міждисциплінарних проєктів.",
    image: "/assets/campus/spaces.png"
  }
];

export default function CampusPage() {
  return (
    <Layout>
      <section className="hero">
        <div className="pill">Кампус</div>
        <h1>Простір, що надихає: архітектура і середовище ЧНУ</h1>
        <p>
          Кампус — це поєднання історичних фасадів, розлогих парків і нових лабораторних корпусів, де поєднуються традиції та технології.
        </p>
      </section>

      <section>
        <h2 className="section-title">Локації, які варто побачити</h2>
        <p className="section-subtitle">Кожен куточок кампусу має свою історію та настрій.</p>
        <div className="grid">
          {spaces.map((space) => (
            <div key={space.title} className="card campus">
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
            <p>Громадський транспорт до зупинки «Держуніверситет». Для гостей — вхід через головну браму Резиденції.</p>
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
