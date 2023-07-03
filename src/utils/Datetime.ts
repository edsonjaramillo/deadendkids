export class Datetime {
  static getFormattedDate(date: string) {
    const opts: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: '2-digit' };
    return new Date(date).toLocaleDateString('en-US', opts);
  }

  static getYear(date?: string) {
    return date ? new Date(date).getFullYear() : new Date().getFullYear();
  }
}
