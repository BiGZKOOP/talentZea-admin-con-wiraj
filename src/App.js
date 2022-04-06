// ** Router Import
import Router from './router/Router'
import './assets/css/theme.css'
import './assets/css/animation.css'
import awsconfig from "./aws-exports"
import {Amplify} from "aws-amplify"

Amplify.configure(awsconfig)

const App = () => <Router />

export default App
