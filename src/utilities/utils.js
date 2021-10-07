export const restructureDate = (originalDate) => {
    let separateDates = originalDate.split('-');
    let [year, month, day] = separateDates;
    return `${month}-${day}-${year}`;
  }

export const reverseDate = (originalDate) => {
    let separateDates = originalDate.split('-');
    let [month, day, year] = separateDates;
    return `${year}/${month}/${day}`;
}  