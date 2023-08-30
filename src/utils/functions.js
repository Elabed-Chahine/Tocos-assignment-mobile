export function mongoDBDateToYMDHMS(mongoDBDate) {
    // Convert the MongoDB date string to a JavaScript Date object.
    const date = new Date(mongoDBDate);

    // Get the year, month, day, from the Date object.
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
   
    // Return the year, month, day, in a formatted string.
    return `${year}-${month}-${day} `;
}