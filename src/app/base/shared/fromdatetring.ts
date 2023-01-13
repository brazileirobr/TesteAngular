export function FromDateString(dateAsString: string) {
    const date: Date = new Date(dateAsString);
    if (dateAsString.length === 10) {
        date.setHours(0, 0, 0, 0);
        date.setUTCFullYear(
            Number(dateAsString.split('-')[0]),
            Number(dateAsString.split('-')[1]) - 1,
            Number(dateAsString.split('-')[2]));

    }
    return date
}