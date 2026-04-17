export function AssessmentsScreen() {
  const assessmentTypes = [
    { name: 'Aptitude', detail: 'College-level test' },
    { name: 'Technical', detail: 'College-level technical test' },
    { name: 'Lab', detail: 'College lab test' },
    { name: 'Assignments', detail: 'Assignment tests' },
    { name: 'Mock Interview', detail: 'Interview simulation tests' },
    { name: 'AGH Assessments', detail: 'Section-wise test' },
    { name: 'LSRW Test', detail: 'Listening, reading, and speaking test' },
  ]

  const activeAssessments = [
    { title: 'Quiz', course: 'Quick Aptitude Test', due: '18 Apr 2026', attempts: '1/1' },
    { title: 'Technical Quiz', course: 'Test technical skills', due: '19 Apr 2026', attempts: '0/1' },
    { title: 'Data Structures Lab', course: 'Implementation skill check', due: '21 Apr 2026', attempts: '0/2' },
  ]

  return (
    <section className="portal-page">
      <div className="hero-card hero-blue-purple">
        <h2>Assessments</h2>
        <p>
          Build and manage institution-grade tests with strong integrity, clear scheduling, and performance analytics.
        </p>
      </div>

      <article className="section-card">
        <h3>Assessment Categories</h3>
        <p className="section-note">Use these modules to launch standardized evaluation workflows.</p>
        <div className="assessment-catalog">
          {assessmentTypes.map((item) => (
            <article key={item.name} className="assessment-type-card">
              <h4>{item.name}</h4>
              <p>{item.detail}</p>
              <button type="button" className="outline-action">Open Module</button>
            </article>
          ))}
        </div>
      </article>

      <article className="section-card">
        <h3>Assessment Activity</h3>
        <div className="mini-stats-grid four-col">
          <div className="mini-stat"><p>Published</p><strong>31</strong></div>
          <div className="mini-stat"><p>Completed</p><strong>28</strong></div>
          <div className="mini-stat"><p>Pending Evaluation</p><strong>7</strong></div>
          <div className="mini-stat"><p>Avg Score</p><strong>74%</strong></div>
        </div>
      </article>

      <article className="section-card">
        <h3>Assigned Tests</h3>
        <div className="pill-row">
          <span className="pill active">Upcoming</span>
          <span className="pill">In progress</span>
          <span className="pill">Completed</span>
          <span className="pill">Under review</span>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Assessment</th>
                <th>Course</th>
                <th>Due Date</th>
                <th>Attempts</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {activeAssessments.map((assessment) => (
                <tr key={assessment.title}>
                  <td>{assessment.title}</td>
                  <td>{assessment.course}</td>
                  <td>{assessment.due}</td>
                  <td>{assessment.attempts}</td>
                  <td><button type="button" className="primary-action">Open</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  )
}
