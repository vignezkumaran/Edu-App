import { ScreenTemplate } from './ScreenTemplate'

export function ResumeBuilderScreen() {
  return (
    <ScreenTemplate
      label="Resume Builder"
      title="Resume Builder"
      subtitle="Improve resume quality and ATS match for your target roles."
      metrics={[
        { label: 'Profile Completion', value: '84%' },
        { label: 'ATS Match', value: '71%' },
        { label: 'Pending Edits', value: '3' },
      ]}
      sectionTitle="Resume Actions"
      items={['Rewrite project impact bullets', 'Add internship outcomes', 'Refine summary for target role']}
      emptyMessage="No resume actions at this time."
      insightTitle="Resume Insights"
      insights={['Quantified bullets improve recruiter readability.', 'Keep skills mapped to projects for context.']}
      activityTitle="Resume Activity"
      activity={[
        { action: 'ATS scan completed', time: 'Today', status: '71% match' },
        { action: 'Section order updated', time: 'Yesterday', status: 'Projects moved up' },
      ]}
    />
  )
}
