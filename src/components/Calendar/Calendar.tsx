import React from 'react';
import {
  Calendar as UIKCalendar,
  NativeDateService,
  I18nConfig,
  CalendarProps,
} from '@ui-kitten/components';

const i18n: I18nConfig = {
  dayNames: {
    short: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    long: [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
    ],
  },
  monthNames: {
    short: [
      'Янв',
      'Фев',
      'Март',
      'Апр',
      'Май',
      'Июнь',
      'Июль',
      'Авг',
      'Сен',
      'Окт',
      'Ноя',
      'Дек',
    ],
    long: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
  },
};

const localeDateService = new NativeDateService('ru', { i18n, startDayOfWeek: 1 });

const Calendar = (props: CalendarProps) => (
  <UIKCalendar dateService={localeDateService} {...props} />
);

export default Calendar;
