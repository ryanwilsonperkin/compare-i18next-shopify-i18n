import { DateStyle } from "@shopify/react-i18n";

export function dateStyleOptions(date: Date, style?: DateStyle) {
  switch (style) {
    case DateStyle.Long:
      return {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "2-digit",
      };
    case DateStyle.Short:
      return { year: "numeric", month: "short", day: "numeric" };
    case DateStyle.Humanize:
      return { year: "numeric", month: "short", day: "numeric" };
    case DateStyle.Time:
      return { hour: "2-digit", minute: "2-digit" };
    case DateStyle.DateTime:
      return {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
    default:
      return null;
  }
}

const dateStyle = {
  [DateStyle.Long]: {
    weekday: 'long',
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  },
  [DateStyle.Short]: {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  },
  [DateStyle.Humanize]: {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  },
  [DateStyle.Time]: {
    hour: '2-digit',
    minute: '2-digit',
  },
  [DateStyle.DateTime]: {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  },
} as const;

export enum TimeUnit {
  Second = 1000,
  Minute = Second * 60,
  Hour = Minute * 60,
  Day = Hour * 24,
  Week = Day * 7,
  Year = Day * 365,
}

function getDateDiff(
  resolution: TimeUnit,
  date: Date,
  today = new Date(),
) {
  return Math.floor((today.getTime() - date.getTime()) / resolution);
}

function getDateFromDate(date: Date, options?: Intl.DateTimeFormatOptions) {
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

  const formattedDate = formatDate(date, {
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

// function formatDateTime(
//   date: Date,
//   options: Intl.DateTimeFormatOptions,
// ): string {
//   const {timeZone} = options;

//   return translate('date.humanize.lessThanOneYearAway', {
//     date: getDateFromDate(date, {
//       ...options,
//       timeZone,
//     }),
//     time: getTimeFromDate(date, {
//       ...options,
//       timeZone,
//     }),
//   });
// }

function formatDate(
  date: Date,
  options: Intl.DateTimeFormatOptions & {style?: DateStyle} = {},

): any {
  const locale = "en";
  const {timeZone} = options;

  const {style = undefined, ...formatOptions} = options || {};

  if (style) {
    switch (style) {
      case DateStyle.Humanize:
        return humanizeDate(date, {...formatOptions, timeZone});
      // case DateStyle.DateTime:
      //   return formatDateTime(date, {
      //     ...formatOptions,
      //     timeZone,
      //     ...dateStyle[style],
      //   });
      default:
        return formatDate(date, {...formatOptions, ...dateStyle[style]});
    }
  }

  return formatDateWithLocale(date, locale, {...formatOptions, timeZone});
}

export function humanizeDate(date: Date, options?: Intl.DateTimeFormatOptions) {
  return isFutureDate(date)
    ? humanizeFutureDate(date, options)
    : humanizePastDate(date, options);
}

function humanizeFutureDate(date: Date, options?: Intl.DateTimeFormatOptions) {
  const timeZone = options?.timeZone;
  const time = getTimeFromDate(date, options);

  if (isToday(date, timeZone)) {
    return ['date.humanize.today', {time}];
  }

  if (isTomorrow(date, timeZone)) {
    return ['date.humanize.tomorrow', {time}];
  }

  if (isLessThanOneWeekAway(date)) {
    const weekday = getWeekdayFromDate(date, options);
    return ['date.humanize.lessThanOneWeekAway', {
      weekday,
      time,
    }];
  }

  if (isLessThanOneYearAway(date)) {
    const monthDay = getMonthDayFromDate(date, options);
    return ['date.humanize.lessThanOneYearAway', {
      date: monthDay,
      time,
    }];
  }

  return formatDate(date, {
    ...options,
    style: DateStyle.Short,
  });
}

function humanizePastDate(date: Date, options?: Intl.DateTimeFormatOptions) {
  if (isLessThanOneMinuteAgo(date)) {
    return ['date.humanize.lessThanOneMinuteAgo'];
  }

  if (isLessThanOneHourAgo(date)) {
    const now = new Date();
    const minutes = Math.floor(
      (now.getTime() - date.getTime()) / TimeUnit.Minute,
    );
    return ['date.humanize.lessThanOneHourAgo', {
      count: minutes,
    }];
  }

  const timeZone = options?.timeZone;
  const time = getTimeFromDate(date, options);

  if (isToday(date, timeZone)) {
    return time;
  }

  if (isYesterday(date, timeZone)) {
    return ['date.humanize.yesterday', {time}];
  }

  if (isLessThanOneWeekAgo(date)) {
    const weekday = getWeekdayFromDate(date, options);
    return ['date.humanize.lessThanOneWeekAgo', {
      weekday,
      time,
    }];
  }

  if (isLessThanOneYearAgo(date)) {
    const monthDay = getMonthDayFromDate(date, options);
    return ['date.humanize.lessThanOneYearAgo', {
      date: monthDay,
      time,
    }];
  }

  return formatDate(date, {
    ...options,
    style: DateStyle.Short,
  });
}

function getWeekdayFromDate(date: Date, options?: Intl.DateTimeFormatOptions) {
  const {localeMatcher, formatMatcher, hour12, timeZone} = options || {};
  return formatDate(date, {
    localeMatcher,
    formatMatcher,
    hour12,
    timeZone,
    weekday: 'long',
  });
}

function getMonthDayFromDate(
  date: Date,
  options?: Intl.DateTimeFormatOptions,
) {
  const {localeMatcher, formatMatcher, hour12, timeZone} = options || {};
  return formatDate(date, {
    localeMatcher,
    formatMatcher,
    hour12,
    timeZone,
    month: 'short',
    day: 'numeric',
  });
}

const intl = new Map<string, Intl.DateTimeFormat>();
export function memoizedGetDateTimeFormat(
  locales?: string | string[],
  options?: Intl.DateTimeFormatOptions,
) {
  const key = dateTimeFormatCacheKey(locales, options);
  if (intl.has(key)) {
    return intl.get(key)!;
  }
  const i = new Intl.DateTimeFormat(locales, options);
  intl.set(key, i);
  return i;
}

function dateTimeFormatCacheKey(
  locales?: string | string[],
  options: Intl.DateTimeFormatOptions = {},
) {
  const localeKey = Array.isArray(locales) ? locales.sort().join('-') : locales;

  return `${localeKey}-${JSON.stringify(options)}`;
}

interface FormatDateOptions extends Intl.DateTimeFormatOptions {
  hourCycle?: 'h11' | 'h12' | 'h23' | 'h24';
}

interface ResolvedFormatDateOptions extends Intl.ResolvedDateTimeFormatOptions {
  hourCycle?: 'h11' | 'h12' | 'h23' | 'h24';
}

const browserFeatureDetectionDate = Intl.DateTimeFormat('en', {
  hour: 'numeric',
});

const resolvedOptions: ResolvedFormatDateOptions | undefined =
  typeof browserFeatureDetectionDate.resolvedOptions === 'undefined'
    ? undefined
    : browserFeatureDetectionDate.resolvedOptions();

function formatDateWithLocale(
  date: Date,
  locales: string | string[],
  options: FormatDateOptions = {},
) {
  const hourCycleRequired =
    resolvedOptions != null &&
    options.hour12 === false &&
    resolvedOptions.hourCycle != null;

  if (hourCycleRequired) {
    options.hour12 = undefined;
    options.hourCycle = 'h23';
  }

  // Etc/GMT+12 is not supported in most browsers and there is no equivalent fallback
  if (options.timeZone != null && options.timeZone === 'Etc/GMT+12') {
    const adjustedDate = new Date(date.valueOf() - 12 * 60 * 60 * 1000);
    return memoizedGetDateTimeFormat(locales, {
      ...options,
      timeZone: 'UTC',
    }).format(adjustedDate);
  }

  return memoizedGetDateTimeFormat(locales, options).format(date);
}

class DateTimeParts {
  static getYear = memoize((date: Date, timeZone?: string) => {
    if (isNaN(date.valueOf())) {
      throw new Error(
        `Unable to parse date: ${date} for timezone: ${timeZone}`,
      );
    }

    const yearString = formatDateWithLocale(date, 'en', {
      timeZone,
      year: 'numeric',
    });

    const sanitisedYearString = sanitiseDateString(yearString);

    const year = parseInt(sanitisedYearString, 10);

    if (isNaN(year)) {
      throw new Error(`Unable to parse year: '${yearString}'`);
    }

    return year;
  }, dateTimeCacheKey('year'));

  static getMonth = memoize((date: Date, timeZone?: string) => {
    const monthString = formatDateWithLocale(date, 'en', {
      timeZone,
      month: 'numeric',
    });

    const sanitisedMonthString = sanitiseDateString(monthString);

    const month = parseInt(sanitisedMonthString, 10);

    if (isNaN(month)) {
      throw new Error(`Unable to parse month: '${monthString}'`);
    }

    return month;
  }, dateTimeCacheKey('month'));

  static getDay = memoize((date: Date, timeZone?: string) => {
    const dayString = formatDateWithLocale(date, 'en', {
      timeZone,
      day: 'numeric',
    });

    const sanitisedDayString = sanitiseDateString(dayString);

    const day = parseInt(sanitisedDayString, 10);

    if (isNaN(day)) {
      throw new Error(`Unable to parse day: '${dayString}'`);
    }

    return day;
  }, dateTimeCacheKey('day'));

  static getWeekday = memoize((date: Date, timeZone?: string) => {
    const weekdayString = formatDateWithLocale(date, 'en', {
      timeZone,
      weekday: 'long',
    });

    const sanitisedWeekdayString = sanitiseDateString(weekdayString);

    return getWeekdayValue(sanitisedWeekdayString);
  }, dateTimeCacheKey('weekday'));

  static getHour = memoize((date: Date, timeZone?: string) => {
    const hourString = formatDateWithLocale(date, 'en', {
      timeZone,
      hour12: false,
      hour: 'numeric',
    });

    let hour = parseInt(hourString, 10);

    if (isNaN(hour)) {
      hour = DateTimeParts.getTimePartsFallback(date, timeZone).hour;
    }

    return hour;
  }, dateTimeCacheKey('hour'));

  static getMinute = memoize((date: Date, timeZone?: string) => {
    const minuteString = formatDateWithLocale(date, 'en', {
      timeZone,
      minute: 'numeric',
    });

    let minute = parseInt(minuteString, 10);

    if (isNaN(minute)) {
      minute = DateTimeParts.getTimePartsFallback(date, timeZone).minute;
    }

    return minute;
  }, dateTimeCacheKey('minute'));

  static getSecond = memoize((date: Date, timeZone?: string) => {
    const secondString = formatDateWithLocale(date, 'en', {
      timeZone,
      second: 'numeric',
    });

    let second = parseInt(secondString, 10);

    if (isNaN(second)) {
      second = DateTimeParts.getTimePartsFallback(date, timeZone).second;
    }

    return second;
  }, dateTimeCacheKey('second'));

  private static getTimePartsFallback = memoize(
    (date: Date, timeZone?: string) => {
      const timeString = formatDateWithLocale(date, 'en', {
        timeZone,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });

      // In Microsoft Edge, Intl.DateTimeFormat returns invisible characters around the individual numbers
      const [dirtyHour, dirtyMinute, dirtySecond] = timeString.split(':');

      const rawHour = new RegExp(TWO_DIGIT_REGEX).exec(dirtyHour);
      const rawMinute = new RegExp(TWO_DIGIT_REGEX).exec(dirtyMinute);
      const rawSecond = new RegExp(TWO_DIGIT_REGEX).exec(dirtySecond);

      if (rawHour != null && rawMinute != null && rawSecond != null) {
        const hour = parseInt(rawHour[1], 10);
        const minute = parseInt(rawMinute[1], 10);
        const second = parseInt(rawSecond[1], 10);

        return {
          hour,
          minute,
          second,
        };
      }

      throw new Error(`Unable to parse timeString: '${timeString}'`);
    },
    dateTimeCacheKey('timePartsFallback'),
  );
}

function getDateTimeParts(date: Date, timeZone?: string) {
  return {
    year: () => DateTimeParts.getYear(date, timeZone),
    month: () => DateTimeParts.getMonth(date, timeZone),
    day: () => DateTimeParts.getDay(date, timeZone),
    weekday: () => DateTimeParts.getWeekday(date, timeZone),
    hour: () => DateTimeParts.getHour(date, timeZone),
    minute: () => DateTimeParts.getMinute(date, timeZone),
    second: () => DateTimeParts.getSecond(date, timeZone),
  };
}

function dateTimeCacheKey(unit: string) {
  return (date: Date, timeZone?: string) =>
    `${unit}-${date.toString()}-${timeZone}`;
}

function getTimeFromDate(date: Date, options?: Intl.DateTimeFormatOptions) {
  const {localeMatcher, formatMatcher, hour12, timeZone, timeZoneName} =
    options || {};

  const formattedTime = formatDate(date, {
    localeMatcher,
    formatMatcher,
    hour12,
    timeZone,
    timeZoneName: timeZoneName === 'short' ? undefined : timeZoneName,
    hour: 'numeric',
    minute: '2-digit',
  }).toLocaleLowerCase();

  const time =
    timeZoneName === 'short'
      ? `${formattedTime} ${getTimeZone(date, options)}`
      : formattedTime;

  return convertFirstSpaceToNonBreakingSpace(time);
}

function getTimeZone(
  date: Date,
  options?: Intl.DateTimeFormatOptions,
): string {
  const {localeMatcher, formatMatcher, timeZone} = options || {};

  const hourZone = formatDate(date, {
    localeMatcher,
    formatMatcher,
    timeZone,
    hour12: false,
    timeZoneName: 'short',
    hour: 'numeric',
  });

  const zoneMatchGroup = /\s([\w()+\-:.]+$)/.exec(hourZone);

  return zoneMatchGroup ? zoneMatchGroup[1] : '';
}

enum Weekday {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

const weekdays: {[key in Weekday]: number} = {
  Monday: 0,
  Tuesday: 1,
  Wednesday: 2,
  Thursday: 3,
  Friday: 4,
  Saturday: 5,
  Sunday: 6,
};

function isWeekday(weekday: string): weekday is Weekday {
  return Object.keys(weekdays).some((key) => key === weekday);
}

function assertNever(message: string): never {
  throw new Error(message);
}

function getWeekdayValue(weekday: string) {
  if (!isWeekday(weekday)) {
    return assertNever(`Unexpected weekday: ${weekday}`);
  }

  return weekdays[weekday];
}

function isFutureDate(date: Date, now = new Date()) {
  return now < date;
}

function isLessThanOneDayAgo(date: Date, now = new Date()) {
  return (
    !isFutureDate(date, now) && now.getTime() - date.getTime() < TimeUnit.Day
  );
}

function isLessThanOneHourAgo(date: Date, now = new Date()) {
  return (
    !isFutureDate(date, now) && now.getTime() - date.getTime() < TimeUnit.Hour
  );
}

function isLessThanOneMinuteAgo(date: Date, now = new Date()) {
  return (
    !isFutureDate(date, now) && now.getTime() - date.getTime() < TimeUnit.Minute
  );
}

function isLessThanOneWeekAgo(date: Date, now = new Date()) {
  return (
    !isFutureDate(date, now) && now.getTime() - date.getTime() < TimeUnit.Week
  );
}

function isLessThanOneWeekAway(date: Date, now = new Date()) {
  return (
    isFutureDate(date, now) && date.getTime() - now.getTime() < TimeUnit.Week
  );
}

function isLessThanOneYearAgo(date: Date, now = new Date()) {
  return (
    !isFutureDate(date, now) && now.getTime() - date.getTime() < TimeUnit.Year
  );
}

function isLessThanOneYearAway(date: Date, now = new Date()) {
  return (
    isFutureDate(date, now) && date.getTime() - now.getTime() < TimeUnit.Year
  );
}

function isPastDate(date: Date, now = new Date()) {
  return now > date;
}

function isToday(date: Date, timeZone?: string) {
  return isSameDay(date, new Date(), timeZone);
}

function isSameDay(date1: Date, date2: Date, timeZone?: string) {
  const {day: day1} = getDateTimeParts(date1, timeZone);
  const {day: day2} = getDateTimeParts(date2, timeZone);

  return isSameMonth(date1, date2, timeZone) && day1() === day2();
}

function isSameMonth(date1: Date, date2: Date, timeZone?: string) {
  const {month: month1} = getDateTimeParts(date1, timeZone);
  const {month: month2} = getDateTimeParts(date2, timeZone);

  return isSameYear(date1, date2, timeZone) && month1() === month2();
}

function isSameYear(date1: Date, date2: Date, timeZone?: string) {
  const {year: year1} = getDateTimeParts(date1, timeZone);
  const {year: year2} = getDateTimeParts(date2, timeZone);

  return year1() === year2();
}

function isYesterday(date: Date, timeZone?: string) {
  const now = new Date();
  const yesterday = new Date(now.valueOf() - 24 * 60 * 60 * 1000);

  return isSameDay(date, yesterday, timeZone);
}

function isTomorrow(date: Date, timeZone?: string) {
  const now = new Date();
  const tomorrow = new Date(now.valueOf() + 24 * 60 * 60 * 1000);

  return isSameDay(date, tomorrow, timeZone);
}

const TWO_DIGIT_REGEX = /(\d{2})/;

function sanitiseDateString(string: string) {
  return string.replace(String.fromCharCode(8206), '');
}

function convertFirstSpaceToNonBreakingSpace(str: string) {
  return str.replace(' ', '\u00A0');
}

interface MemoizeMap<T, U> {
  get(key: T): U;
  has(key: T): boolean;
  set(key: T, value: U): MemoizeMap<T, U>;
}

const MAX_MAP_ENTRIES = 50;

function memoize<
  Method extends (this: unknown, ...args: any[]) => any,
>(method: Method, resolver?: (...args: Parameters<Method>) => any): Method {
  const weakMapCache = new WeakMap();
  const mapCache = new Map();
  const mapKeys: any[] = [];

  return function memoized(...args: Parameters<Method>) {
    if (typeof window === 'undefined') {
      return method.apply(this, args);
    }

    const useWeakMap =
      args.length === 1 && typeof args[0] === 'object' && !resolver;

    let key;
    if (useWeakMap) {
      key = args[0];
    } else if (resolver && resolver instanceof Function) {
      key = resolver(...args);
    } else {
      key = args[0];
    }

    const cache: MemoizeMap<any, any> = useWeakMap ? weakMapCache : mapCache;
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = method.apply(this, args);

    if (useWeakMap) {
      weakMapCache.set(key, result);
    } else {
      mapCache.set(key, result);
      mapKeys.push(key);

      if (mapCache.size > MAX_MAP_ENTRIES) {
        const oldestKey = mapKeys[0];
        mapCache.delete(oldestKey);
        mapKeys.shift();
      }
    }

    return result;
  } as Method;
}
