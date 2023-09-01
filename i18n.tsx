import {
  formatDate,
  isFutureDate,
  isLessThanOneHourAgo,
  isLessThanOneMinuteAgo,
  isLessThanOneWeekAgo,
  isLessThanOneYearAgo,
  isToday,
  isTomorrow,
  isYesterday,
  TimeUnit,
  isLessThanOneWeekAway,
  isLessThanOneYearAway,
} from "@shopify/dates";
import { TFunction } from "i18next";

export enum DateStyle {
  Long = "Long",
  Short = "Short",
  Humanize = "Humanize",
  Time = "Time",
  DateTime = "DateTime",
}

const dateStyle = {
  [DateStyle.Long]: {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric",
  },
  [DateStyle.Short]: {
    month: "short",
    day: "numeric",
    year: "numeric",
  },
  [DateStyle.Humanize]: {
    month: "long",
    day: "numeric",
    year: "numeric",
  },
  [DateStyle.Time]: {
    hour: "2-digit",
    minute: "2-digit",
  },
  [DateStyle.DateTime]: {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  },
} as const;

export class CustomI18n {
  locale: string;
  t: TFunction;
  defaultTimezone?: string;

  constructor(locale: string, t: TFunction) {
    this.locale = locale;
    this.t = t;
  }

  // formatName(firstName: string, lastName: string, options: any) {
  //   return this.t("name", { val: name });
  // }

  formatDate(
    date: Date,
    options: Intl.DateTimeFormatOptions & { style?: DateStyle } = {}
  ): string {
    const {locale, defaultTimezone} = this;
    const {timeZone = defaultTimezone} = options;

    const {style = undefined, ...formatOptions} = options || {};

    if (style) {
      switch (style) {
        case DateStyle.Humanize:
          return this.humanizeDate(date, { ...formatOptions, timeZone });
        case DateStyle.DateTime:
          return this.formatDateTime(date, {
            ...formatOptions,
            timeZone,
            ...dateStyle[style],
          });
        default:
          return this.formatDate(date, {
            ...formatOptions,
            ...dateStyle[style],
          });
      }
    }

    return formatDate(date, locale, { ...formatOptions, timeZone });
  }

  private formatDateTime(
    date: Date,
    options: Intl.DateTimeFormatOptions,
  ): string {
    const {defaultTimezone} = this;
    const {timeZone = defaultTimezone} = options;

    return this.t('date.humanize.lessThanOneYearAway', {
      date: this.getDateFromDate(date, {
        ...options,
        timeZone,
      }),
      time: this.getTimeFromDate(date, {
        ...options,
        timeZone,
      }),
    });
  }

  private humanizeDate(date: Date, options?: Intl.DateTimeFormatOptions) {
    return isFutureDate(date)
      ? this.humanizeFutureDate(date, options)
      : this.humanizePastDate(date, options);
  }

  private humanizePastDate(date: Date, options?: Intl.DateTimeFormatOptions) {
    if (isLessThanOneMinuteAgo(date)) {
      return this.t('date.humanize.lessThanOneMinuteAgo');
    }

    if (isLessThanOneHourAgo(date)) {
      const now = new Date();
      const minutes = Math.floor(
        (now.getTime() - date.getTime()) / TimeUnit.Minute,
      );
      return this.t('date.humanize.lessThanOneHourAgo', {
        count: minutes,
        ordinal: true
      });
    }

    const timeZone = options?.timeZone;
    const time = this.getTimeFromDate(date, options);

    if (isToday(date, timeZone)) {
      return time;
    }

    if (isYesterday(date, timeZone)) {
      return this.t('date.humanize.yesterday', {time});
    }

    if (isLessThanOneWeekAgo(date)) {
      const weekday = this.getWeekdayFromDate(date, options);
      return this.t('date.humanize.lessThanOneWeekAgo', {
        weekday,
        time,
      });
    }

    if (isLessThanOneYearAgo(date)) {
      const monthDay = this.getMonthDayFromDate(date, options);
      return this.t('date.humanize.lessThanOneYearAgo', {
        date: monthDay,
        time,
      });
    }

    return this.formatDate(date, {
      ...options,
      style: DateStyle.Short,
    });
  }

  private humanizeFutureDate(date: Date, options?: Intl.DateTimeFormatOptions) {
    const timeZone = options?.timeZone;
    const time = this.getTimeFromDate(date, options);

    if (isToday(date, timeZone)) {
      return this.t("date.humanize.today", { time });
    }

    if (isTomorrow(date, timeZone)) {
      return this.t("date.humanize.tomorrow", { time });
    }

    if (isLessThanOneWeekAway(date)) {
      const weekday = this.getWeekdayFromDate(date, options);
      return this.t("date.humanize.lessThanOneWeekAway", {
        weekday,
        time,
      });
    }

    if (isLessThanOneYearAway(date)) {
      const monthDay = this.getMonthDayFromDate(date, options);
      return this.t("date.humanize.lessThanOneYearAway", {
        date: monthDay,
        time,
      });
    }

    return this.formatDate(date, {
      ...options,
      style: DateStyle.Short,
    });
  }

  private getDateFromDate(date: Date, options?: Intl.DateTimeFormatOptions) {
    const {
      localeMatcher,
      formatMatcher,
      weekday,
      day,
      month,
      year,
      era,
      timeZone,
      timeZoneName,
    } = options || {};

    const formattedDate = this.formatDate(date, {
      localeMatcher,
      formatMatcher,
      weekday,
      day,
      month,
      year,
      era,
      timeZone,
      timeZoneName: timeZoneName === 'short' ? undefined : timeZoneName,
    });

    return formattedDate;
  }

  convertFirstSpaceToNonBreakingSpace(str: string) {
    return str.replace(" ", "\u00A0");
  }

  private getTimeFromDate(date: Date, options?: Intl.DateTimeFormatOptions) {
    const { localeMatcher, formatMatcher, hour12, timeZone, timeZoneName } =
      options || {};

    const formattedTime = this.formatDate(date, {
      localeMatcher,
      formatMatcher,
      hour12,
      timeZone,
      timeZoneName: timeZoneName === "short" ? undefined : timeZoneName,
      hour: "numeric",
      minute: "2-digit",
    }).toLocaleLowerCase();

    const time =
      timeZoneName === "short"
        ? `${formattedTime} ${this.getTimeZone(date, options)}`
        : formattedTime;

    return this.convertFirstSpaceToNonBreakingSpace(time);
  }

  private getWeekdayFromDate(date: Date, options?: Intl.DateTimeFormatOptions) {
    const { localeMatcher, formatMatcher, hour12, timeZone } = options || {};
    return this.formatDate(date, {
      localeMatcher,
      formatMatcher,
      hour12,
      timeZone,
      weekday: "long",
    });
  }

  private getMonthDayFromDate(
    date: Date,
    options?: Intl.DateTimeFormatOptions
  ) {
    const { localeMatcher, formatMatcher, hour12, timeZone } = options || {};
    return this.formatDate(date, {
      localeMatcher,
      formatMatcher,
      hour12,
      timeZone,
      month: "short",
      day: "numeric",
    });
  }

  private getTimeZone(
    date: Date,
    options?: Intl.DateTimeFormatOptions
  ): string {
    const { localeMatcher, formatMatcher, timeZone } = options || {};

    const hourZone = this.formatDate(date, {
      localeMatcher,
      formatMatcher,
      timeZone,
      hour12: false,
      timeZoneName: "short",
      hour: "numeric",
    });

    const zoneMatchGroup = /\s([\w()+\-:.]+$)/.exec(hourZone);

    return zoneMatchGroup ? zoneMatchGroup[1] : "";
  }
}

// dateStyleOptions(date: Date, style?: DateStyle) {
//     switch (style) {
//       case DateStyle.Long:
//         return {
//           weekday: "long",
//           year: "numeric",
//           month: "long",
//           day: "2-digit",
//         };
//       case DateStyle.Short:
//         return { year: "numeric", month: "short", day: "numeric" };
//       case DateStyle.Humanize:
//         return { year: "numeric", month: "short", day: "numeric" };
//       case DateStyle.Time:
//         return { hour: "2-digit", minute: "2-digit" };
//       case DateStyle.DateTime:
//         return {
//           year: "numeric",
//           month: "short",
//           day: "numeric",
//           hour: "numeric",
//           minute: "numeric",
//         };
//       default:
//         return null;
//     }
//   }
