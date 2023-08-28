export const initialTranslations: { [key: string]: any } = {
  cs: {
    ordinal: {
      one: "{amount}.",
      two: "{amount}.",
      few: "{amount}.",
      other: "{amount}.",
    },
    date: {
      range: "{startDate} – {endDate}",
      humanize: {
        lessThanOneYearAgo: "{date} v {time}",
        lessThanOneHourAgo: {
          one: "Před {count} min",
          other: "Před {count} min",
          few: "Před {count} min",
          many: "Před {count} min",
        },
        lessThanOneMinuteAgo: "Právě teď",
        lessThanOneWeekAgo: "{weekday} v {time}",
        yesterday: "Včera v {time}",
        tomorrow: "Zítra v {time}",
        today: "Dnes v {time}",
        lessThanOneWeekAway: "{weekday} v {time}",
        lessThanOneYearAway: "{date} v {time}",
      },
    },
  },
  da: {
    ordinal: {
      one: "{amount}.",
      two: "{amount}.",
      few: "{amount}.",
      other: "{amount}.",
    },
    date: {
      range: "{startDate}–{endDate}",
      humanize: {
        lessThanOneYearAgo: "{date} kl. {time}",
        lessThanOneHourAgo: {
          one: "{count} minut siden",
          other: "{count} minutter siden",
        },
        lessThanOneMinuteAgo: "Lige nu",
        lessThanOneWeekAgo: "{weekday} kl. {time}",
        yesterday: "I går kl. {time}",
        tomorrow: "I morgen kl. {time}",
        today: "I dag kl. {time}",
        lessThanOneWeekAway: "{weekday} kl. {time}",
        lessThanOneYearAway: "{date} kl. {time}",
      },
    },
  },
  de: {
    ordinal: {
      one: "{amount}.",
      two: "{amount}.",
      few: "{amount}.",
      other: "{amount}.",
    },
    date: {
      range: "{startDate}–{endDate}",
      humanize: {
        lessThanOneYearAgo: "{date} um {time}",
        lessThanOneHourAgo: {
          one: "Vor {count} Minute",
          other: "Vor {count} Minuten",
        },
        lessThanOneMinuteAgo: "Gerade eben",
        lessThanOneWeekAgo: "{weekday} um {time}",
        yesterday: "Gestern um {time}",
        tomorrow: "Morgen um {time}",
        today: "Heute um {time}",
        lessThanOneWeekAway: "{weekday} um {time}",
        lessThanOneYearAway: "{date} um {time}",
      },
    },
  },
  en: {
    hello: "hello world",
    ordinal: {
      one: "{amount}st",
      two: "{amount}nd",
      few: "{amount}rd",
      other: "{amount}th",
    },
    date: {
      range: "{startDate}–{endDate}",
      humanize: {
        lessThanOneYearAgo: "{date} at {time}",
        lessThanOneHourAgo: {
          one: "{count} minute ago",
          other: "{count} minutes ago",
        },
        lessThanOneMinuteAgo: "Just now",
        lessThanOneWeekAgo: "{weekday} at {time}",
        yesterday: "Yesterday at {time}",
        today: "Today at {time}",
        tomorrow: "Tomorrow at {time}",
        lessThanOneWeekAway: "{weekday} at {time}",
        lessThanOneYearAway: "{date} at {time}",
      },
    },
  },
  es: {
    hello: "hola mondo",
    ordinal: {
      one: "{amount}ro",
      two: "{amount}do",
      few: "{amount}ro",
      other: "{amount}to",
    },
    date: {
      range: "{startDate}–{endDate}",
      humanize: {
        lessThanOneYearAgo: "{date} a las {time}",
        lessThanOneHourAgo: {
          one: "Hace {count} minuto",
          other: "Hace {count} minutos",
          many: "Hace {count} minutos",
        },
        lessThanOneMinuteAgo: "Ahora",
        lessThanOneWeekAgo: "{weekday} a las {time}",
        yesterday: "Ayer a las {time}",
        tomorrow: "Mañana a las {time}",
        today: "Hoy a las {time}",
        lessThanOneWeekAway: "{weekday} a las {time}",
        lessThanOneYearAway: "{date} a las {time}",
      },
    },
  },
  fi: {
    ordinal: {
      one: "{amount}.",
      two: "{amount}.",
      few: "{amount}.",
      other: "{amount}.",
    },
    date: {
      range: "{startDate}–{endDate}",
      humanize: {
        lessThanOneYearAgo: "{date} klo {time}",
        lessThanOneHourAgo: {
          one: "{count} minuutti sitten",
          other: "{count} minuuttia sitten",
        },
        lessThanOneMinuteAgo: "Juuri nyt",
        lessThanOneWeekAgo: "{weekday} klo {time}",
        yesterday: "Eilen klo {time}",
        tomorrow: "Huomenna kello {time}",
        today: "Tänään klo {time}",
        lessThanOneWeekAway: "{weekday} klo {time}",
        lessThanOneYearAway: "{date} klo {time}",
      },
    },
  },
  fr: {
    ordinal: {
      one: "{amount}er",
      two: "{amount}e",
      few: "{amount}e",
      other: "{amount}e",
    },
    date: {
      range: "{startDate} – {endDate}",
      humanize: {
        lessThanOneYearAgo: "{date} à {time}",
        lessThanOneHourAgo: {
          one: "Il y a {count} minute",
          other: "il y a {count} minutes",
          many: "il y a {count} minutes",
        },
        lessThanOneMinuteAgo: "Il y a un instant",
        lessThanOneWeekAgo: "{weekday} à {time}",
        yesterday: "Hier à {time}",
        tomorrow: "Demain à {time}",
        today: "Aujourd'hui à {time}",
        lessThanOneWeekAway: "{weekday} à {time}",
        lessThanOneYearAway: "{date} à {time}",
      },
    },
  },
  it: {
    ordinal: {
      one: "{amount}°",
      two: "{amount}°",
      few: "{amount}°",
      other: "{amount}°",
    },
    date: {
      range: "{startDate} - {endDate}",
      humanize: {
        lessThanOneYearAgo: "{date} alle {time}",
        lessThanOneHourAgo: {
          one: "{count} minuto fa",
          other: "{count} minuti fa",
          many: "{count} minuti fa",
        },
        lessThanOneMinuteAgo: "Proprio adesso",
        lessThanOneWeekAgo: "{weekday} alle {time}",
        yesterday: "Ieri alle {time}",
        tomorrow: "Domani alle {time}",
        today: "Oggi alle {time}",
        lessThanOneWeekAway: "{weekday} alle {time}",
        lessThanOneYearAway: "{date} alle {time}",
      },
    },
  },
  ja: {
    ordinal: {
      one: "{amount}番目",
      two: "{amount}番目",
      few: "{amount}番目",
      other: "{amount}番目",
    },
    date: {
      range: "{startDate}～{endDate}",
      humanize: {
        lessThanOneYearAgo: "{date} {time}",
        lessThanOneHourAgo: {
          one: "{count}分前",
          other: "{count}分前",
        },
        lessThanOneMinuteAgo: "たった今",
        lessThanOneWeekAgo: "{weekday} {time}",
        yesterday: "昨日の{time}",
        tomorrow: "明日の{time}",
        today: "今日の{time}",
        lessThanOneWeekAway: "{weekday}の{time}",
        lessThanOneYearAway: "{date}の{time}",
      },
    },
  },
  ko: {
    ordinal: {
      one: "{amount}번째",
      two: "{amount}번째",
      few: "{amount}번째",
      other: "{amount}번째",
    },
    date: {
      range: "{startDate}~{endDate}",
      humanize: {
        lessThanOneYearAgo: "{date} {time}",
        lessThanOneHourAgo: {
          one: "{count}분 전",
          other: "{count}분 전",
        },
        lessThanOneMinuteAgo: "방금",
        lessThanOneWeekAgo: "{weekday} {time}",
        yesterday: "어제 {time}",
        tomorrow: "내일 {time}",
        today: "오늘 {time}",
        lessThanOneWeekAway: "{weekday} {time}",
        lessThanOneYearAway: "{date} {time}",
      },
    },
  },
  nb: {
    ordinal: {
      one: "{amount}.",
      two: "{amount}.",
      few: "{amount}.",
      other: "{amount}.",
    },
    date: {
      range: "{startDate}–{endDate}",
      humanize: {
        lessThanOneYearAgo: "{date} kl. {time}",
        lessThanOneHourAgo: {
          one: "For {count} minutt siden",
          other: "For {count} minutter siden",
        },
        lessThanOneMinuteAgo: "Akkurat nå",
        lessThanOneWeekAgo: "{weekday} kl. {time}",
        yesterday: "I går kl. {time}",
        tomorrow: "I morgen kl. {time}",
        today: "I dag kl. {time}",
        lessThanOneWeekAway: "{weekday} kl. {time}",
        lessThanOneYearAway: "{date} kl. {time}",
      },
    },
  },
  nl: {
    ordinal: {
      one: "{amount}ste",
      two: "{amount}e",
      few: "{amount}e",
      other: "{amount}de",
    },
    date: {
      range: "{startDate} – {endDate}",
      humanize: {
        lessThanOneYearAgo: "{date} om {time}",
        lessThanOneHourAgo: {
          one: "{count} minuut geleden",
          other: "{count} minuten geleden",
        },
        lessThanOneMinuteAgo: "Net",
        lessThanOneWeekAgo: "{weekday} om {time}",
        yesterday: "Gisteren om {time}",
        tomorrow: "Morgen om {time}",
        today: "Vandaag om {time}",
        lessThanOneWeekAway: "{weekday} om {time}",
        lessThanOneYearAway: "{date} om {time}",
      },
    },
  },
  pl: {
    ordinal: {
      one: "{amount}.",
      two: "{amount}.",
      few: "{amount}.",
      other: "{amount}.",
    },
    date: {
      range: "{startDate}–{endDate}",
      humanize: {
        lessThanOneYearAgo: "{date} o {time}",
        lessThanOneHourAgo: {
          one: "{count} min temu",
          other: "{count} min temu",
          few: "{count} min temu",
          many: "{count} min temu",
        },
        lessThanOneMinuteAgo: "Właśnie teraz",
        lessThanOneWeekAgo: "{weekday} o {time}",
        yesterday: "Wczoraj o {time}",
        tomorrow: "Jutro o godz. {time}",
        today: "Dzisiaj o {time}",
        lessThanOneWeekAway: "{weekday} o {time}",
        lessThanOneYearAway: "{date} o {time}",
      },
    },
  },
  "pt-BR": {
    ordinal: {
      one: "{amount}º",
      two: "{amount}º",
      few: "{amount}º",
      other: "{amount}º",
    },
    date: {
      range: "{startDate}–{endDate}",
      humanize: {
        lessThanOneYearAgo: "{date}, {time}",
        lessThanOneHourAgo: {
          one: "há {count} minuto",
          other: "{count} minutos atrás",
          many: "{count} minutos atrás",
        },
        lessThanOneMinuteAgo: "Agora mesmo",
        lessThanOneWeekAgo: "{weekday}, {time}",
        yesterday: "Ontem às {time}",
        tomorrow: "Amanhã às {time}",
        today: "Hoje às {time}",
        lessThanOneWeekAway: "{weekday}, {time}",
        lessThanOneYearAway: "{date}, {time}",
      },
    },
  },
  "pt-PT": {
    ordinal: {
      one: "{amount}.º",
      two: "{amount}.º",
      few: "{amount}.º",
      other: "{amount}.º",
    },
    date: {
      range: "{startDate}–{endDate}",
      humanize: {
        lessThanOneYearAgo: "{date}, {time}",
        lessThanOneHourAgo: {
          one: "{count} minuto atrás",
          other: "Há {count} minutos",
          many: "Há {count} minutos",
        },
        lessThanOneMinuteAgo: "Agora mesmo",
        lessThanOneWeekAgo: "{weekday}, {time}",
        yesterday: "Ontem à(s) {time}",
        tomorrow: "Amanhã às {time}",
        today: "Hoje à(s) {time}",
        lessThanOneWeekAway: "{weekday} à(s) {time}",
        lessThanOneYearAway: "{date} à(s) {time}",
      },
    },
  },
  sv: {
    ordinal: {
      one: "{amount}",
      two: "{amount}",
      few: "{amount}",
      other: "{amount}:e",
    },
    date: {
      range: "{startDate}–{endDate}",
      humanize: {
        lessThanOneYearAgo: "{date} kl. {time}",
        lessThanOneHourAgo: {
          one: "{count} minut sedan",
          other: "För {count} minuter sedan",
        },
        lessThanOneMinuteAgo: "Just nu",
        lessThanOneWeekAgo: "{weekday} kl. {time}",
        yesterday: "I går kl. {time}",
        tomorrow: "I morgon vid {time}",
        today: "Idag kl. {time}",
        lessThanOneWeekAway: "{weekday} kl. {time}",
        lessThanOneYearAway: "{date} kl. {time}",
      },
    },
  },
  th: {
    ordinal: {
      one: "{amount}",
      two: "{amount}",
      few: "{amount}",
      other: "{amount}",
    },
    date: {
      range: "{startDate}–{endDate}",
      humanize: {
        lessThanOneYearAgo: "{date} เมื่อเวลา {time}",
        lessThanOneHourAgo: {
          one: "{count} นาทีที่แล้ว",
          other: "{count} นาทีที่แล้ว",
        },
        lessThanOneMinuteAgo: "เมื่อสักครู่",
        lessThanOneWeekAgo: "{weekday} เมื่อเวลา {time}",
        yesterday: "เมื่อวานเวลา {time}",
        tomorrow: "พรุ่งนี้เวลา {time}",
        today: "วันนี้ในเวลา {time}",
        lessThanOneWeekAway: "{weekday} เมื่อเวลา {time}",
        lessThanOneYearAway: "{date} เมื่อเวลา {time}",
      },
    },
  },
  tr: {
    ordinal: {
      one: "{amount}.",
      two: "{amount}.",
      few: "{amount}.",
      other: "{amount}.",
    },
    date: {
      range: "{startDate}–{endDate}",
      humanize: {
        lessThanOneYearAgo: "{date} {time}",
        lessThanOneHourAgo: {
          one: "{count} dakika önce",
          other: "{count} dakika önce",
        },
        lessThanOneMinuteAgo: "Şimdi",
        lessThanOneWeekAgo: "{weekday} {time}",
        yesterday: "Dün saat {time}",
        tomorrow: "Yarın şu saatte: {time}",
        today: "Bugün şu saatte: {time}",
        lessThanOneWeekAway: "{weekday} günü şu saatte: {time}",
        lessThanOneYearAway: "{date} günü şu saatte: {time}",
      },
    },
  },
  vi: {
    ordinal: {
      one: "{amount}",
      two: "{amount}",
      few: "{amount}",
      other: "{amount}",
    },
    date: {
      range: "{startDate} – {endDate}",
      humanize: {
        lessThanOneYearAgo: "{date} vào lúc {time}",
        lessThanOneHourAgo: {
          one: "{count} phút trước",
          other: "{count} phút trước",
        },
        lessThanOneMinuteAgo: "Vừa xong",
        lessThanOneWeekAgo: "{weekday} vào lúc {time}",
        yesterday: "Hôm qua lúc {time}",
        today: "Hôm nay lúc {time}",
        tomorrow: "Ngày mai lúc {time}",
        lessThanOneWeekAway: "{weekday} vào lúc {time}",
        lessThanOneYearAway: "{date} vào lúc {time}",
      },
    },
  },
  "zh-CN": {
    ordinal: {
      one: "第 {amount}",
      two: "第 {amount}",
      few: "第 {amount}",
      other: "第 {amount}",
    },
    date: {
      range: "{startDate}–{endDate}",
      humanize: {
        lessThanOneYearAgo: "{date} {time}",
        lessThanOneHourAgo: {
          one: "{count} 分钟前",
          other: "{count} 分钟前",
        },
        lessThanOneMinuteAgo: "刚刚",
        lessThanOneWeekAgo: "{weekday} {time}",
        yesterday: "昨天 {time}",
        tomorrow: "明天 {time}",
        today: "今天 {time}",
        lessThanOneWeekAway: "{weekday} {time}",
        lessThanOneYearAway: "{date} {time}",
      },
    },
  },
  "zh-TW": {
    ordinal: {
      one: "第 {amount}",
      two: "第 {amount}",
      few: "第 {amount}",
      other: "第 {amount}",
    },
  },
  date: {
    range: "{startDate}～{endDate}",
    humanize: {
      lessThanOneYearAgo: "{date} {time}",
      lessThanOneHourAgo: {
        one: "{count} 分鐘前",
        other: "{count} 分鐘前",
      },
      lessThanOneMinuteAgo: "剛才",
      lessThanOneWeekAgo: "{weekday} {time}",
      yesterday: "昨天 {time}",
      tomorrow: "明天 {time}",
      today: "今天 {time}",
      lessThanOneWeekAway: "{weekday} {time}",
      lessThanOneYearAway: "{date} {time}",
    },
  },
};
