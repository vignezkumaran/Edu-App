import { NavLink, Outlet } from 'react-router-dom'
import { sidebarSections } from '../config/sidebar'

export function AppLayout() {
  return (
    <div className="app-shell">
      <aside className="app-sidebar" aria-label="Main navigation">
        <div className="brand-block">
          <p className="brand-eyebrow">College ERP</p>
          <h1>ExamSphere</h1>
          <p>Assessment and Performance Portal</p>
        </div>

        <nav className="menu" aria-label="Portal navigation">
          {sidebarSections.map((section) => (
            <section key={section.title} className="menu-section">
              <h2>{section.title}</h2>
              <ul>
                {section.items.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive ? 'menu-item active' : 'menu-item'
                      }
                    >
                      <span className="menu-item-icon" aria-hidden="true">{item.icon}</span>
                      <span className="menu-item-content">
                        <span className="menu-item-title">{item.label}</span>
                        <span className="menu-item-description">{item.description}</span>
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>

        <button type="button" className="logout-btn">
          Log out
        </button>
      </aside>

      <main className="app-content">
        <header className="top-nav">
          <div className="top-nav-left">
            <span className="top-brand">Mid-Semester Assessment Cycle</span>
            <span className="top-badge">Semester 6</span>
          </div>
          <div className="top-nav-right">
            <label className="search-field" aria-label="Search students or tests">
              <span>Search</span>
              <input type="search" placeholder="Student, test, subject..." />
            </label>
            <button type="button" className="top-alert" aria-label="Notifications">3</button>
            <button type="button" className="top-user" aria-label="User profile">VK</button>
          </div>
        </header>

        <div className="page-content">
          <Outlet />
        </div>
      </main>
    </div>
  )
}