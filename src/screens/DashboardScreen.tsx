export function DashboardScreen() {
  const upcomingTests = [
    { name: 'Database Systems - Internal 2', class: 'III CSE - A', date: '22 Apr 2026, 10:00 AM', duration: '90 min' },
    { name: 'Aptitude Foundation - Weekly Drill', class: 'III CSE - All', date: '23 Apr 2026, 08:30 AM', duration: '45 min' },
    { name: 'Operating Systems Lab Viva', class: 'III CSE - B', date: '24 Apr 2026, 02:15 PM', duration: '30 min' },
  ]

  const trendData: Array<{ label: string; value: number }> = [
    { label: 'Cycle 1', value: 66 },
    { label: 'Cycle 2', value: 71 },
    { label: 'Cycle 3', value: 74 },
    { label: 'Cycle 4', value: 78 },
  ]

  return (
    <section className="portal-page">
      <div className="hero-card hero-soft">
        <p className="hero-eyebrow">MCET EXAM CELL</p>
        <h2>College Assessment Command Center</h2>
        <p>
          Monitor assessments, attendance, and student outcomes across departments from a single portal.
        </p>
        <div className="hero-actions-row">
          <button type="button" className="primary-action">Create Assessment</button>
          <button type="button" className="outline-action">Export Performance Snapshot</button>
        </div>
      </div>

      <article className="section-card">
        <h3>Assessment Activity</h3>
        <div className="mini-stats-grid four-col">
          <div className="mini-stat"><p>Total Students</p><strong>1286</strong></div>
          <div className="mini-stat"><p>Tests Scheduled</p><strong>48</strong></div>
          <div className="mini-stat"><p>Completion Rate</p><strong>92.4%</strong></div>
          <div className="mini-stat"><p>Avg. Score</p><strong>74.8%</strong></div>
        </div>
      </article>

      <div className="two-col-grid">
        <article className="section-card">
          <h3>Upcoming Tests</h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Test Name</th>
                  <th>Class</th>
                  <th>Date and Time</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {upcomingTests.map((test) => (
                  <tr key={test.name}>
                    <td>{test.name}</td>
                    <td>{test.class}</td>
                    <td>{test.date}</td>
                    <td>{test.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="section-card">
          <h3>Announcements</h3>
          <ul className="content-list">
            <li>Internal exam timetable freeze window closes on 19 Apr 2026.</li>
            <li>Question moderation review pending for 6 subjects in IT department.</li>
            <li>Proctor allocation for aptitude drive published for final-year sections.</li>
          </ul>
        </article>
      </div>

      <div className="two-col-grid">
        <article className="section-card">
          <h3>Performance Trend (Last 4 Cycles)</h3>
          <div className="trend-bars" aria-label="Performance trend chart">
            {trendData.map((point) => (
              <div key={point.label} className="trend-col">
                <span className="trend-value">{point.value}%</span>
                <div className="trend-track">
                  <div className="trend-fill" style={{ height: `${point.value}%` }} />
                </div>
                <p>{point.label}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="section-card">
          <h3>At-Risk Cohorts</h3>
          <div className="stack-cards">
            <div className="small-info-card">
              <p>II CSE - B | Programming Fundamentals</p>
              <strong>Average: 51%</strong>
            </div>
            <div className="small-info-card">
              <p>I ECE - A | Applied Mathematics</p>
              <strong>Average: 57%</strong>
            </div>
            <div className="small-info-card">
              <p>III IT - A | Computer Networks</p>
              <strong>Average: 59%</strong>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
