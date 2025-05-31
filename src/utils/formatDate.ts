export const extractYearFromDate = (dateString: string): string => {
  const date = new Date(dateString);
  return isNaN(date.getFullYear()) ? 'Invalid Date' : date.getFullYear().toString();
};
