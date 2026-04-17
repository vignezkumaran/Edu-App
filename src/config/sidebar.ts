export type SidebarItem = {
  label: string
  path: string
  description: string
  icon: string
}

export type SidebarSection = {
  title: string
  items: SidebarItem[]
}

export const sidebarSections: SidebarSection[] = [
  {
    title: 'Overview',
    items: [
      { label: 'Dashboard', path: '/dashboard', description: 'Daily learning status and next actions', icon: 'DB' },
      { label: 'Overall Report', path: '/overall-report', description: 'Cross-module progress and weak zones', icon: 'OR' },
      { label: 'GPS Leaderboard', path: '/gps-leaderboard', description: 'Readiness ranking and movement', icon: 'LB' },
    ],
  },
  {
    title: 'Learning',
    items: [
      { label: 'Assessments', path: '/assessments', description: 'Tests, scores, and pending items', icon: 'AS' },
      { label: 'Courses', path: '/courses', description: 'Course availability and completion', icon: 'CO' },
      {
        label: 'Global Platform Assessment',
        path: '/global-platform-assessment',
        description: 'External profile and coding progress',
        icon: 'GP',
      },
      { label: 'DSA Sheets', path: '/dsa-sheets', description: 'Topic checklist and revision flow', icon: 'DS' },
    ],
  },
  {
    title: 'Career',
    items: [
      { label: 'Certificates', path: '/certificates', description: 'Issued and pending credentials', icon: 'CF' },
      { label: 'AI Interview (new)', path: '/ai-interview', description: 'Mock rounds and feedback', icon: 'AI' },
      { label: 'Resume Builder', path: '/resume-builder', description: 'Resume quality and ATS readiness', icon: 'RB' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Contest Calendar', path: '/contest-calendar', description: 'Upcoming contest windows', icon: 'CC' },
      { label: 'Mentoring', path: '/mentoring', description: 'Mentor sessions and follow-up', icon: 'MN' },
      { label: 'Schedule', path: '/schedule', description: 'Weekly plan and deadlines', icon: 'SC' },
      { label: 'Live Session', path: '/live-session', description: 'Live class timeline and replay', icon: 'LS' },
    ],
  },
  {
    title: 'Tools',
    items: [{ label: 'IDE', path: '/ide', description: 'Practice run quality and logs', icon: 'ID' }],
  },
]