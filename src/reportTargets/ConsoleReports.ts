import { OutputTarget } from '../Summary';

export class ConsoleReport implements OutputTarget {

    print(report: string): void {
        console.log(`
        ${'*'.repeat(30)}
        ${' '.repeat(13) + 'REPORT'}   
        ${'*'.repeat(30)}
        ${' '.repeat((30 - report.length)/2) + report}
        ${'*'.repeat(30)}
        `)
    }
}