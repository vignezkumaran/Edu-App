export function OverallReportScreen() {
  const subjectScores = [
    { subject: 'Data Structures', score: 82, status: 'Excellent' },
    { subject: 'Operating Systems', score: 74, status: 'Good' },
    { subject: 'Database Systems', score: 69, status: 'Needs Improvement' },
    { subject: 'Computer Networks', score: 78, status: 'Good' },
  ]

  return (
    <section className="portal-page">
      <div className="two-col-grid report-layout">
        <article className="section-card profile-panel">
          <div className="avatar">VK</div>
          <h3>Vignesh Kumaran S</h3>
          <p className="section-note">B.E CSE | Semester 6</p>
          <ul className="content-list">
            <li>Register No: 727624BCS311</li>
            <li>Department: Computer Science</li>
            <li>Attendance: 93%</li>
            <li>Mentor: Dr. Priya N</li>
          </ul>
        </article>

        <article className="section-card">
          <h3>Student Performance Report</h3>
          <div className="report-card">
            <p><strong>Student:</strong> Vignesh Kumaran S</p>
            <p><strong>Email:</strong> 727624bcs311@mcet.in</p>
            <p><strong>Assessment Window:</strong> Jan 2026 - Apr 2026</p>
            <p><strong>Academic Standing:</strong> No backlogs</p>
          </div>
          <div className="section-header-row">
            <button type="button" className="primary-action">Download PDF Report</button>
            <button type="button" className="outline-action">Switch to Table View</button>
          </div>

          <h4>Tests Overview</h4>
          <div className="mini-stats-grid four-col">
            <div className="mini-stat"><p>Test Assigned</p><strong>31</strong></div>
            <div className="mini-stat"><p>Completed</p><strong>28</strong></div>
            <div className="mini-stat"><p>Questions Attempted</p><strong>95</strong></div>
            <div className="mini-stat"><p>Time Spent</p><strong>12h 39m</strong></div>
          </div>

          <h4>Subject Breakdown</h4>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Score</th>
                  <th>Remark</th>
                </tr>
              </thead>
              <tbody>
                {subjectScores.map((row) => (
                  <tr key={row.subject}>
                    <td>{row.subject}</td>
                    <td>{row.score}%</td>
                    <td>{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </section>
  )
}
