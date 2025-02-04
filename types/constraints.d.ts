export type TimeUnit =
  | 'millisecond'
  | 'second'
  | 'minute'
  | 'quarterHour'
  | 'hour'
  | 'day'
  | 'week'
  | 'month'
  | 'quarter'
  | 'season'
  | 'year'
  | 'decade'
  | 'century'
  | 'date'

export type Format =
  | 'day'
  | 'day-short'
  | 'day-number'
  | 'day-ordinal'
  | 'day-pad'
  | 'date'
  | 'date-ordinal'
  | 'date-pad'
  | 'month'
  | 'month-short'
  | 'month-number'
  | 'month-ordinal'
  | 'month-pad'
  | 'year'
  | 'year-short'
  | 'time'
  | 'time-24'
  | 'hour'
  | 'hour-pad'
  | 'hour-24'
  | 'hour-24-pad'
  | 'minute'
  | 'minute-pad'
  | 'second'
  | 'second-pad'
  | 'ampm'
  | 'quarter'
  | 'season'
  | 'era'
  | 'timezone'
  | 'offset'
  | 'numeric'
  | 'numeric-us'
  | 'numeric-uk'
  | 'mm/dd'
  | 'iso'
  | 'iso-short'
  | 'iso-utc'
  | 'nice'
  | 'nice-year'
  | 'nice-day'
  | 'nice-full'
  | string
