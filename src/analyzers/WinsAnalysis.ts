import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';
import { Analyzer } from '../Summary';

export class WinsAnalysis implements Analyzer {

    constructor(public teamName: string) {}

    run(matches: MatchData[]): string {
        let teamWinsCounter = 0

        for (let match of matches) {
            if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
                teamWinsCounter++
            } else if (match[2] === this.teamName && match[5] === MatchResult.AwayWin) {
                teamWinsCounter++
            }
        }

        return `The ${this.teamName} wins ${teamWinsCounter} times.`
    }
}