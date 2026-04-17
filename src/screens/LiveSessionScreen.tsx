export function LiveSessionScreen() {
  return (
    <section className="portal-page">
      <div className="hero-card hero-blue-purple">
        <h2>Live Sessions</h2>
        <p>
          Explore all the live sessions available for you to join and engage in real-time learning experiences.
        </p>
      </div>

      <article className="section-card">
        <h3>All Live Sessions</h3>
        <div className="empty-block big-empty centered-empty-block">
          <p>No live sessions are currently taking place, please check back later.</p>
        </div>
      </article>
    </section>
  )
}
