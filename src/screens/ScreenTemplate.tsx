import { useEffect, useMemo, useState } from 'react'

type Metric = {
  label: string
  value: string
}

type ActivityRow = {
  action: string
  time: string
  status: string
}

type ScreenTemplateProps = {
  label: string
  title: string
  subtitle: string
  metrics: Metric[]
  sectionTitle: string
  items: string[]
  emptyMessage: string
  insightTitle: string
  insights: string[]
  activityTitle: string
  activity: ActivityRow[]
}

type ManagedItem = {
  id: string
  text: string
  done: boolean
}

type FilterType = 'all' | 'active' | 'done'

function toStorageKey(label: string) {
  return `eduapp:${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}:items`
}

function createId() {
  return `${Date.now()}-${Math.floor(Math.random() * 100000)}`
}

function nowLabel() {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date())
}

function buildInitialItems(storageKey: string, fallbackItems: string[]) {
  const raw = localStorage.getItem(storageKey)
  if (!raw) {
    return fallbackItems.map((item) => ({ id: createId(), text: item, done: false }))
  }

  try {
    const parsed = JSON.parse(raw) as ManagedItem[]
    if (Array.isArray(parsed)) {
      return parsed
    }
  } catch {
    return fallbackItems.map((item) => ({ id: createId(), text: item, done: false }))
  }

  return fallbackItems.map((item) => ({ id: createId(), text: item, done: false }))
}

export function ScreenTemplate({
  label,
  title,
  subtitle,
  metrics,
  sectionTitle,
  items,
  emptyMessage,
  insightTitle,
  insights,
  activityTitle,
  activity,
}: ScreenTemplateProps) {
  const storageKey = toStorageKey(label)

  const [managedItems, setManagedItems] = useState<ManagedItem[]>(() =>
    buildInitialItems(storageKey, items),
  )
  const [draft, setDraft] = useState('')
  const [filter, setFilter] = useState<FilterType>('all')
  const [activityLog, setActivityLog] = useState<ActivityRow[]>([])

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(managedItems))
  }, [managedItems, storageKey])

  const visibleItems = useMemo(() => {
    if (filter === 'active') return managedItems.filter((item) => !item.done)
    if (filter === 'done') return managedItems.filter((item) => item.done)
    return managedItems
  }, [managedItems, filter])

  const mergedActivity = useMemo(
    () => [...activityLog, ...activity].slice(0, 8),
    [activityLog, activity],
  )

  const completedCount = managedItems.filter((item) => item.done).length

  const addItem = () => {
    const text = draft.trim()
    if (!text) return
    const nextItem: ManagedItem = { id: createId(), text, done: false }
    setManagedItems((prev) => [nextItem, ...prev])
    setActivityLog((prev) => [
      { action: `Added item: ${text}`, time: nowLabel(), status: 'Created' },
      ...prev,
    ])
    setDraft('')
  }

  const toggleItem = (id: string) => {
    setManagedItems((prev) => {
      const target = prev.find((item) => item.id === id)
      if (!target) return prev

      const nextDone = !target.done
      setActivityLog((log) => [
        {
          action: `${nextDone ? 'Completed' : 'Reopened'} item: ${target.text}`,
          time: nowLabel(),
          status: nextDone ? 'Done' : 'In Progress',
        },
        ...log,
      ])

      return prev.map((item) =>
        item.id === id ? { ...item, done: nextDone } : item,
      )
    })
  }

  const deleteItem = (id: string) => {
    setManagedItems((prev) => {
      const target = prev.find((item) => item.id === id)
      if (!target) return prev

      setActivityLog((log) => [
        { action: `Removed item: ${target.text}`, time: nowLabel(), status: 'Removed' },
        ...log,
      ])

      return prev.filter((item) => item.id !== id)
    })
  }

  return (
    <>
      <header className="content-header">
        <div>
          <p className="eyebrow">{label}</p>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <div className="profile-pill" aria-label="Current user initials">
          VK
        </div>
      </header>

      <section className="metric-grid" aria-label="Screen metrics">
        {metrics.map((metric) => (
          <article key={metric.label} className="metric-card">
            <p>{metric.label}</p>
            <strong>{metric.value}</strong>
          </article>
        ))}
      </section>

      <section className="layout-grid" aria-label="Screen details">
        <article className="panel">
          <h4>{sectionTitle}</h4>
          <div className="item-toolbar">
            <span className="item-summary">
              {managedItems.length} total · {completedCount} completed
            </span>
            <div className="filter-group" role="group" aria-label="Filter items">
              <button
                type="button"
                className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button
                type="button"
                className={filter === 'active' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setFilter('active')}
              >
                Active
              </button>
              <button
                type="button"
                className={filter === 'done' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setFilter('done')}
              >
                Done
              </button>
            </div>
          </div>

          <div className="add-row">
            <input
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Add a new item"
              aria-label="Add item"
              onKeyDown={(event) => {
                if (event.key === 'Enter') addItem()
              }}
            />
            <button type="button" onClick={addItem}>
              Add
            </button>
          </div>

          {visibleItems.length === 0 ? (
            <div className="empty-block">{emptyMessage}</div>
          ) : (
            <ul className="task-list">
              {visibleItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={item.done ? 'toggle-btn done' : 'toggle-btn'}
                    onClick={() => toggleItem(item.id)}
                    aria-label={item.done ? 'Mark as active' : 'Mark as done'}
                  >
                    {item.done ? '✓' : '○'}
                  </button>
                  <span className={item.done ? 'task-text done' : 'task-text'}>{item.text}</span>
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => deleteItem(item.id)}
                    aria-label="Remove item"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </article>

        <article className="panel">
          <h4>{insightTitle}</h4>
          {insights.length === 0 ? (
            <div className="empty-block">No insights available right now.</div>
          ) : (
            <ul className="insight-list">
              {insights.map((insight) => (
                <li key={insight}>{insight}</li>
              ))}
            </ul>
          )}
        </article>
      </section>

      <article className="panel table-panel">
        <h4>{activityTitle}</h4>
        {mergedActivity.length === 0 ? (
          <div className="empty-block">No recent activity.</div>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {mergedActivity.map((row) => (
                  <tr key={`${row.action}-${row.time}`}>
                    <td>{row.action}</td>
                    <td>{row.time}</td>
                    <td>{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </article>
    </>
  )
}