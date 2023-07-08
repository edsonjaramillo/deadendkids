export class Datetime {
  static getFormattedDate(date: string) {
    const opts: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: '2-digit' };
    return new Date(date).toLocaleDateString('en-US', opts);
  }

  static getYear(date?: string) {
    return date ? new Date(date).getFullYear() : new Date().getFullYear();
  }

  static getSecondsToMidnight() {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const diff = tomorrow.getTime() - now.getTime();
    return Math.floor(diff / 1000);
  }
}
