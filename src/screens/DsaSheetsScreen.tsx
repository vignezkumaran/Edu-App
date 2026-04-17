import { ScreenTemplate } from './ScreenTemplate'

export function DsaSheetsScreen() {
  return (
    <ScreenTemplate
      label="DSA Sheets"
      title="DSA Sheets"
      subtitle="Follow topic-wise checklists and track revision backlog."
      metrics={[
        { label: 'Topics Done', value: '9/14' },
        { label: 'Revision Queue', value: '27' },
        { label: 'Daily Target', value: '6 problems' },
      ]}
      sectionTitle="Current DSA Queue"
      items={['Binary search medium set', 'DP basics worksheet', 'Tree traversal revision']}
      emptyMessage="No DSA tasks at this time."
      insightTitle="DSA Insights"
      insights={['Arrays and strings are now stable.', 'Dynamic programming needs more repetition.']}
      activityTitle="DSA Activity"
      activity={[
        { action: 'New topic unlocked', time: 'Today', status: 'Trees basics' },
        { action: 'Revision batch completed', time: 'Yesterday', status: '8 problems' },
      ]}
    />
  )
}
