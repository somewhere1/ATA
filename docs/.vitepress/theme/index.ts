import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './style.css'
import Quiz from './components/Quiz.vue'
import Checklist from './components/Checklist.vue'
import WritingExercise from './components/WritingExercise.vue'
import ColabLink from './components/ColabLink.vue'
import ProgressBar from './components/ProgressBar.vue'
import RoadmapHero from './components/RoadmapHero.vue'
import ConferenceTimeline from './components/ConferenceTimeline.vue'
import ProgressDashboard from './components/ProgressDashboard.vue'
import GiscusComments from './components/GiscusComments.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Quiz', Quiz)
    app.component('Checklist', Checklist)
    app.component('WritingExercise', WritingExercise)
    app.component('ColabLink', ColabLink)
    app.component('ProgressBar', ProgressBar)
    app.component('RoadmapHero', RoadmapHero)
    app.component('ConferenceTimeline', ConferenceTimeline)
    app.component('ProgressDashboard', ProgressDashboard)
    app.component('GiscusComments', GiscusComments)
  }
} satisfies Theme
