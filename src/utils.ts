export const common_date_generator = (date: Date | string): string =>
  new Date(date).toDateString().slice(4);