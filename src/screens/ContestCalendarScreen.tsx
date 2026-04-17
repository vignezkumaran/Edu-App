export function ContestCalendarScreen() {
  return (
    <section className="portal-page">
      <article className="section-card">
        <div className="tab-row compact">
          <button type="button" className="tab-btn active">Contests</button>
          <button type="button" className="tab-btn">Calender</button>
        </div>

        <div className="platform-grid">
          {[
            ['All Platforms', '384'],
            ['codechef', '90'],
            ['geeksforgeeks', '23'],
            ['leetcode', '64'],
            ['codeforces', '95'],
            ['AtCoder', '112'],
          ].map(([name, score]) => (
            <div key={name} className={name === 'All Platforms' ? 'platform-card active' : 'platform-card'}>
              <p>{name}</p>
              <strong>{score}</strong>
            </div>
          ))}
        </div>

        <div className="pill-row">
          <span className="pill active">Today&apos;s Contests 1</span>
          <span className="pill">Upcoming Contests 15</span>
          <span className="pill">Past Contests 368</span>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Weekend Dev Challenge 42: DevOps</td>
                <td>21 Mar 26, 00:00</td>
                <td>23 Mar 26, 00:00</td>
                <td><button type="button" className="outline-action">Open</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </section>
  )
}
