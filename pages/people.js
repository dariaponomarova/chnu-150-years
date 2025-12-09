import Layout from "../components/Layout";

const people = [
  {
    name: "Юрій Федькович",
    role: "Покровитель і натхненник",
    text: "Письменник, громадський діяч, чиє ім’я носить університет. Символ культурної багатонаціональності Буковини. Чернівчани прозвали Юрія Федьковича “буковинським Кобзарем”. Він неабияк вплинув на розвиток освіти на Буковині.  Діяч особливу увагу приділив початковій школі. Адже саме вона закладає освітній фундамент у свідомості дітей. Він радив тодішнім педагогам приділяти увагу саме каліграфії, частіше практикувати письмові роботи.",
    image: "/assets/people/fedkovych.png"
  },
  {
    name: "Викладачі-дослідники",
    role: "Наука й інновації",
    text: "Команди кафедр ІТ, фізики, біології та гуманітаристики, які залучають гранти ЄС, Horizon та реалізують міждисциплінарні проєкти. Одним із провідних викладачів був уродженець села Грубни,  завідувач кафедри фінансів і кредиту економічного факультету ЧНУ, доктор економічних наук, професор Нікіфорова Петра Опанасовича.",
    image: "/assets/people/faculty.png"
  },
  {
    name: "Студенти й випускники",
    role: "Спільнота майбутнього",
    text: "Випускники працюють у провідних компаніях і державних установах, створюють стартапи, ініціюють волонтерські програми.",
    image: "/assets/people/students.png"
  }
];

const achievements = [
  "Міжнародні партнерства з університетами Польщі, Німеччини, Австрії та Румунії.",
  "Учасники олімпіад та хакатонів здобувають призові місця, а майбутні науковці беруть участь у коворкінгах, представляють свої проєкти на пітчингах бізнес-ідей і стартапів.",
  "Інноваційні наукові лабораторії і центри компетентностей у різних галузях.",
  "Волонтерські ініціативи підтримують громаду та ветеранів, організовують культурні події.",
  "Всесвітній День Вишиванки, що його започаткували у 2006 році студенти-історики.",
  "Ведення сторінок університету в соціальних мережах є потужним складником сучасної комунікаційної стратегії."
];

const staffStats = [
  { label: "Професори", value: 126, color: "#8a1c1c" },
  { label: "Доктори наук", value: 160, color: "#b02525" },
  { label: "Доценти", value: 463, color: "#d34747" },
  { label: "Кандидати наук", value: 612, color: "#e86a6a" },
  { label: "Лауреати держпремій", value: 4, color: "#f1a35c" },
  { label: "Член-кореспондент НАН України", value: 1, color: "#f7c266" },
  { label: "Член-кореспондент НАПН України", value: 1, color: "#f4d98f" },
  { label: "Почесні державні звання", value: 47, color: "#c6d45e" }
];

export default function PeoplePage() {
  const chartSum = staffStats.reduce((sum, item) => sum + item.value, 0);
  const pieStops = staffStats.reduce(
    (acc, item) => {
      const start = acc.current;
      const end = start + (item.value / chartSum) * 360;
      acc.stops.push(`${item.color} ${start}deg ${end}deg`);
      acc.current = end;
      return acc;
    },
    { current: 0, stops: [] }
  ).stops;

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

      <section className="chart-section">
        <div className="chart-card">
          <div className="chart-header">
            <div className="chart-header-text">
              <p className="pill">Викладацький склад</p>
              <h2>945 науково-педагогічних працівників</h2>
              <p className="section-subtitle">
                Структура команди, яка формує навчальний процес Чернівецького національного університету.
              </p>
            </div>
            <div className="pie-wrapper" aria-hidden="true">
              <div
                className="pie"
                style={{ background: `conic-gradient(${pieStops.join(",")})` }}
              >
                <div className="pie-center">
                  <span>945</span>
                  <p>загалом</p>
                </div>
              </div>
            </div>
          </div>
          <ul className="pie-legend">
            {staffStats.map((item) => {
              const percent = ((item.value / chartSum) * 100).toFixed(2);
              return (
                <li key={item.label} className="legend-item">
                  <span
                    className="legend-dot"
                    style={{ backgroundColor: item.color }}
                    aria-hidden="true"
                  />
                  <div className="legend-text">
                    <strong>{item.value}</strong>
                    <p>{item.label}</p>
                  </div>
                  <span className="legend-percent">{percent}%</span>
                </li>
              );
            })}
          </ul>
          <p className="chart-note">
            Частини можуть перетинатися між собою (напр., професор одночасно доктор наук), тому сума категорій
            перевищує загальну кількість.
          </p>
        </div>
      </section>

      <section>
        <h2 className="section-title">Обличчя ЧНУ</h2>
        <p className="section-subtitle">Ті, хто закладав фундамент цих 150 років.</p>
        <div className="people-grid">
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
        <div className="people-grid">
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
