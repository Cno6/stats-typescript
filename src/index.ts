import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReports';
import { HTMLReport } from './reportTargets/HTMLReport';

const matchReader = MatchReader.fromCsv('football.csv')
matchReader.load()

let teamName = 'Fulham'

const consoleSummary = new Summary(new WinsAnalysis(teamName), new ConsoleReport())
const htmlSummary = new Summary(new WinsAnalysis(teamName), new HTMLReport())
consoleSummary.buildAndPrintReport(matchReader.matches)
htmlSummary.buildAndPrintReport(matchReader.matches)