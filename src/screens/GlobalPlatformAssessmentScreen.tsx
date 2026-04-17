import { ScreenTemplate } from './ScreenTemplate'

export function GlobalPlatformAssessmentScreen() {
  return (
    <ScreenTemplate
      label="Global Platform Assessment"
      title="Global Platform Assessment"
      subtitle="Track your external coding profile sync and problem-solving metrics."
      metrics={[
        { label: 'Linked Profiles', value: '2/3' },
        { label: 'Solved Problems', value: '312' },
        { label: 'Sync Health', value: 'Good' },
      ]}
      sectionTitle="Profile Sync Tasks"
      items={['Connect GitHub coding profile', 'Verify contest history', 'Refresh profile statistics']}
      emptyMessage="No sync tasks right now."
      insightTitle="Platform Insights"
      insights={['Graph problem acceptance has improved.', 'Edge-case handling is still the top failure reason.']}
      activityTitle="Sync Activity"
      activity={[
        { action: 'LeetCode sync completed', time: '2h ago', status: '8 submissions updated' },
        { action: 'Sync warning', time: 'Yesterday', status: 'GitHub not connected' },
      ]}
    />
  )
}
