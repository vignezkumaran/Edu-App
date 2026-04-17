import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { AppLayout } from './layout/AppLayout'
import {
  AiInterviewScreen,
  AssessmentsScreen,
  CertificatesScreen,
  ContestCalendarScreen,
  CoursesScreen,
  DashboardScreen,
  DsaSheetsScreen,
  GlobalPlatformAssessmentScreen,
  GpsLeaderboardScreen,
  IdeScreen,
  LiveSessionScreen,
  MentoringScreen,
  OverallReportScreen,
  ResumeBuilderScreen,
  ScheduleScreen,
} from './screens'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardScreen />} />
        <Route path="overall-report" element={<OverallReportScreen />} />
        <Route path="gps-leaderboard" element={<GpsLeaderboardScreen />} />
        <Route path="assessments" element={<AssessmentsScreen />} />
        <Route path="courses" element={<CoursesScreen />} />
        <Route path="global-platform-assessment" element={<GlobalPlatformAssessmentScreen />} />
        <Route path="dsa-sheets" element={<DsaSheetsScreen />} />
        <Route path="certificates" element={<CertificatesScreen />} />
        <Route path="ai-interview" element={<AiInterviewScreen />} />
        <Route path="resume-builder" element={<ResumeBuilderScreen />} />
        <Route path="contest-calendar" element={<ContestCalendarScreen />} />
        <Route path="mentoring" element={<MentoringScreen />} />
        <Route path="schedule" element={<ScheduleScreen />} />
        <Route path="live-session" element={<LiveSessionScreen />} />
        <Route path="ide" element={<IdeScreen />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

export default App