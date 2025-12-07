import Layout from "../components/Layout";

export default function AuthorPage() {
  return (
    <Layout>
      <section className="hero">
        <div className="pill">Автор</div>
        <h1>Дар&apos;я Пономарьова</h1>
        <p>
          Авторка сайту та дослідниця історії Чернівецького національного університету. Працює з архівними
          матеріалами, популяризує спадщину ЧНУ та ділиться сучасними історіями людей кампусу.
        </p>
      </section>

      <section className="grid" style={{ alignItems: "center" }}>
        <div className="card">
          <img src="/assets/author/author.png" alt="Дар'я Пономарьова" />
        </div>
        <div className="card">
          <span className="pill">Про автора</span>
          <p>
            Дар&apos;я захоплюється локальною історією, мандрує Буковиною та збирає історії людей,
            пов&apos;язаних із ЧНУ. Її мета — показати університет як живу спільноту, де поєднуються
            спадщина, освіта й інновації.
          </p>
          <p>
            У цьому проєкті вона поєднала дані з архівів, відкриті матеріали університету та сучасний
            дизайн, щоб створити зручний ресурс до 150-річчя ЧНУ.
          </p>
        </div>
      </section>
    </Layout>
  );
}
