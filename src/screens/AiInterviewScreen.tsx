export function AiInterviewScreen() {
  return (
    <section className="portal-page">
      <div className="hero-card hero-blue-purple centered">
        <h2>AI Interview Practice</h2>
        <p>Practice with AI-curated questions and receive real-time feedback.</p>
      </div>

      <article className="section-card">
        <div className="tab-row">
          <button type="button" className="tab-btn active">Assigned Interviews</button>
          <button type="button" className="tab-btn">Create Interview</button>
        </div>

        <div className="empty-block big-empty centered-empty-block">
          <h4>No Assigned Interviews</h4>
          <p>Check back later for new interview assignments.</p>
        </div>
      </article>
    </section>
  )
}
