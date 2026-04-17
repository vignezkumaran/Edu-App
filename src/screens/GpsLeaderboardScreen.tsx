export function GpsLeaderboardScreen() {
  const leaders = [
    { rank: 1, name: 'Pranesh S', score: '9324 points', band: 'Platinum' },
    { rank: 2, name: 'Karthik R', score: '2990 points', band: 'Platinum' },
    { rank: 3, name: 'Aaisha M', score: '2481 points', band: 'Gold' },
    { rank: 4, name: 'Vignesh K', score: '2320 points', band: 'Gold' },
  ]

  return (
    <section className="portal-page">
      <article className="section-card">
        <div className="section-header-row">
          <h3>Global Platform Leaderboard</h3>
          <button type="button" className="outline-action">Department View</button>
        </div>
        <div className="pill-row">
          <span className="pill active">Total Scored</span>
          <span className="pill">LeetCode</span>
          <span className="pill">GeeksForGeeks</span>
          <span className="pill">CodeChef</span>
          <span className="pill">Codeforces</span>
        </div>
      </article>

      <article className="section-card">
        <h3>Overall Leaderboard</h3>
        <p className="section-note">Rankings based on accumulated merit points</p>

        <div className="podium-wrap">
          <div className="podium-col second"><span>#2</span><strong>Karthik R</strong><small>2990 pts</small></div>
          <div className="podium-col first"><span>#1</span><strong>Pranesh S</strong><small>9324 pts</small></div>
          <div className="podium-col third"><span>#3</span><strong>Aaisha M</strong><small>2481 pts</small></div>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Rank</th><th>User</th><th>Score</th><th>Band</th></tr>
            </thead>
            <tbody>
              {leaders.map((leader) => (
                <tr key={leader.rank}>
                  <td>{leader.rank}</td>
                  <td>{leader.name}</td>
                  <td>{leader.score}</td>
                  <td>{leader.band}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  )
}
