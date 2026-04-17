import { ScreenTemplate } from './ScreenTemplate'

export function MentoringScreen() {
  return (
    <ScreenTemplate
      label="Mentoring"
      title="Mentoring"
      subtitle="Track mentor sessions, action items, and completion quality."
      metrics={[
        { label: 'Next Session', value: 'Mon 6:00 PM' },
        { label: 'Open Actions', value: '4' },
        { label: 'Follow-through', value: '88%' },
      ]}
      sectionTitle="Mentor Action Board"
      items={['Submit updated resume draft', 'Complete assigned puzzle set', 'Share test reflection notes']}
      emptyMessage="No mentoring tasks at this time."
      insightTitle="Mentor Insights"
      insights={['Short daily targets keep execution high.', 'Session prep improves quality of mentor feedback.']}
      activityTitle="Mentoring Activity"
      activity={[
        { action: 'Mentor notes published', time: 'Today', status: '4 action items' },
        { action: 'Follow-up assigned', time: 'Today', status: 'Resume update' },
      ]}
    />
  )
}
