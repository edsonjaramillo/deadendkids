import { Show } from '@/types/cms';

export class ShowFmt {
  getEventFields(show: Show) {
    const startDateObj = new Date(show.startingTime);
    const startDate = this.getEventDate(startDateObj);
    const dayOfWeekAndTime = this.getDayOfWeekAndTime(startDateObj);

    return { startDate, dayOfWeekAndTime };
  }

  getCityState(show: Show) {
    const { city, state } = show.destination;
    return `${city}, ${state}`;
  }

  //   returns date as Jul 12
  private getEventDate(startDate: Date) {
    const dateOptions = Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit' });
    return dateOptions.format(startDate);
  }

  //   returns day of week and time as Fri • 7:00pm
  private getDayOfWeekAndTime(startDate: Date) {
    const dayOfWeekOpt = Intl.DateTimeFormat('en-US', { weekday: 'short' });

    const dayOfWeek = dayOfWeekOpt.format(startDate);

    const timeOptions = Intl.DateTimeFormat('en-US', { timeStyle: 'short' });

    const time = timeOptions.format(startDate);

    return `${dayOfWeek} • ${time}`;
  }
}
