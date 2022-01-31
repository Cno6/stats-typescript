export const dateStringToDate = (dateString: string): Date => {
    // 28/10/2018
    const dateParts = dateString
    .split('/')
    .map((item: string): number => parseInt(item))

    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
}