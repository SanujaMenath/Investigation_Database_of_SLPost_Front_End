export function convertMillisecondsToLocalDateTime(milliseconds: number): string {
    // Create a Date object from the milliseconds
    const date = new Date(milliseconds);

    // Extract the components of the date and time
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // months are 0-indexed
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    // Format the date and time as a string in the desired format
    const localDateTime =` ${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

    return localDateTime;
}