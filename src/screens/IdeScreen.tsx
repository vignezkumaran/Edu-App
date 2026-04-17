import { ScreenTemplate } from './ScreenTemplate'

export function IdeScreen() {
  return (
    <ScreenTemplate
      label="IDE"
      title="IDE"
      subtitle="Practice run dashboard with quality and execution trends."
      metrics={[
        { label: 'Recent Runs', value: '18' },
        { label: 'Pass Rate', value: '79%' },
        { label: 'Edge Failures', value: '4' },
      ]}
      sectionTitle="Current Practice Runs"
      items={['Graph traversal challenge', 'Boundary condition checklist', 'String optimization run']}
      emptyMessage="No practice runs at this time."
      insightTitle="Execution Insights"
      insights={['Most failures are boundary-condition related.', 'Test-first runs reduce rework.']}
      activityTitle="Run History"
      activity={[
        { action: 'Submission executed', time: '11:40 AM', status: 'Passed 28/30' },
        { action: 'Final run completed', time: '12:08 PM', status: 'Passed 30/30' },
      ]}
    />
  )
}
