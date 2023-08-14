export function weekStartDay(country: any) {
    if (!country) {
      throw new MissingCountryError(
        'weekStartDay() cannot be called without a country code.',
      );
    }

    return WEEK_START_DAYS.get(country) || DEFAULT_WEEK_START_DAY;
}

class MissingCountryError extends Error {
    constructor(additionalMessage = '') {
      const baseErrorMessage = 'No country code provided.';
      super(
        additionalMessage === ''
          ? baseErrorMessage
          : `${baseErrorMessage} ${additionalMessage}`,
      );
    }
  }

enum Weekday {
  Sunday = "sunday",
  Monday = "monday",
  Tuesday = "tuesday",
  Wednesday = "wednesday",
  Thursday = "thursday",
  Friday = "friday",
  Saturday = "saturday",
}

const DEFAULT_WEEK_START_DAY = Weekday.Sunday;
const WEEK_START_DAYS = new Map([
  // Saturday
  ["AE", Weekday.Saturday],
  ["AF", Weekday.Saturday],
  ["BH", Weekday.Saturday],
  ["DZ", Weekday.Saturday],
  ["EG", Weekday.Saturday],
  ["IQ", Weekday.Saturday],
  ["IR", Weekday.Saturday],
  ["JO", Weekday.Saturday],
  ["KW", Weekday.Saturday],
  ["LY", Weekday.Saturday],
  ["OM", Weekday.Saturday],
  ["QA", Weekday.Saturday],
  ["SA", Weekday.Saturday],
  ["SY", Weekday.Saturday],
  ["YE", Weekday.Saturday],
  // Sunday
  ["AR", Weekday.Sunday],
  ["BO", Weekday.Sunday],
  ["BR", Weekday.Sunday],
  ["BZ", Weekday.Sunday],
  ["CA", Weekday.Sunday],
  ["CL", Weekday.Sunday],
  ["CO", Weekday.Sunday],
  ["CR", Weekday.Sunday],
  ["DO", Weekday.Sunday],
  ["EC", Weekday.Sunday],
  ["GT", Weekday.Sunday],
  ["HK", Weekday.Sunday],
  ["HN", Weekday.Sunday],
  ["IL", Weekday.Sunday],
  ["JM", Weekday.Sunday],
  ["JP", Weekday.Sunday],
  ["KE", Weekday.Sunday],
  ["KR", Weekday.Sunday],
  ["MO", Weekday.Sunday],
  ["MX", Weekday.Sunday],
  ["NI", Weekday.Sunday],
  ["PA", Weekday.Sunday],
  ["PE", Weekday.Sunday],
  ["PH", Weekday.Sunday],
  ["SG", Weekday.Sunday],
  ["SV", Weekday.Sunday],
  ["TW", Weekday.Sunday],
  ["US", Weekday.Sunday],
  ["VE", Weekday.Sunday],
  ["ZA", Weekday.Sunday],
  ["ZW", Weekday.Sunday],
  // Monday
  ["AD", Weekday.Monday],
  ["AL", Weekday.Monday],
  ["AM", Weekday.Monday],
  ["AU", Weekday.Monday],
  ["AZ", Weekday.Monday],
  ["BE", Weekday.Monday],
  ["BG", Weekday.Monday],
  ["BN", Weekday.Monday],
  ["BY", Weekday.Monday],
  ["CH", Weekday.Monday],
  ["CN", Weekday.Monday],
  ["CZ", Weekday.Monday],
  ["DE", Weekday.Monday],
  ["DK", Weekday.Monday],
  ["EE", Weekday.Monday],
  ["ES", Weekday.Monday],
  ["FI", Weekday.Monday],
  ["FR", Weekday.Monday],
  ["GB", Weekday.Monday],
  ["GE", Weekday.Monday],
  ["GF", Weekday.Monday],
  ["GR", Weekday.Monday],
  ["HR", Weekday.Monday],
  ["HU", Weekday.Monday],
  ["ID", Weekday.Monday],
  ["IE", Weekday.Monday],
  ["IN", Weekday.Monday],
  ["IS", Weekday.Monday],
  ["IT", Weekday.Monday],
  ["KG", Weekday.Monday],
  ["KZ", Weekday.Monday],
  ["LB", Weekday.Monday],
  ["LT", Weekday.Monday],
  ["LU", Weekday.Monday],
  ["LV", Weekday.Monday],
  ["MA", Weekday.Monday],
  ["MC", Weekday.Monday],
  ["MK", Weekday.Monday],
  ["MN", Weekday.Monday],
  ["MY", Weekday.Monday],
  ["NL", Weekday.Monday],
  ["NO", Weekday.Monday],
  ["NZ", Weekday.Monday],
  ["PK", Weekday.Monday],
  ["PL", Weekday.Monday],
  ["PT", Weekday.Monday],
  ["PY", Weekday.Monday],
  ["RO", Weekday.Monday],
  ["RS", Weekday.Monday],
  ["RU", Weekday.Monday],
  ["SE", Weekday.Monday],
  ["SK", Weekday.Monday],
  ["TH", Weekday.Monday],
  ["TN", Weekday.Monday],
  ["TR", Weekday.Monday],
  ["UA", Weekday.Monday],
  ["UY", Weekday.Monday],
  ["UZ", Weekday.Monday],
  ["VN", Weekday.Monday],
  ["XK", Weekday.Monday],
]);
