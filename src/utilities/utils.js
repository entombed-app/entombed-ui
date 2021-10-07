export const restructureDate = (originalDate) => {
    let separateDates = originalDate.split('-');
    let [year, month, day] = separateDates;
    return `${month}-${day}-${year}`;
  }