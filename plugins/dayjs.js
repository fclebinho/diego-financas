import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import 'dayjs/locale/en';

export default (context, inject) => {
  dayjs.locale(context.app.i18n.localeProperties.code);
  inject('dayjs', dayjs);
}
