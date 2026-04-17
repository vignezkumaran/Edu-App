export function CoursesScreen() {
  const availableCourses: string[] = []

  return (
    <section className="portal-page">
      <div className="hero-card hero-lavender">
        <h2>Courses</h2>
        <p>
          Step up and skill up! Interact live with passionate practitioners and bloom your dreams.
        </p>
      </div>

      <article className="section-card center-empty large-empty">
        <h3>Learning now</h3>
        {availableCourses.length === 0 ? (
          <div>
            <h4>No Courses Yet</h4>
            <p>You haven&apos;t enrolled in any courses yet. Browse our catalog to find the right ones.</p>
          </div>
        ) : (
          <ul className="content-list">
            {availableCourses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        )}
      </article>
    </section>
  )
}
