import { lastFullWeek, getEpoch } from '../../pages/Home/getDateInterval';
import addHours from 'date-fns/addHours';
import subSeconds from 'date-fns/subSeconds';
import addSeconds from 'date-fns/addSeconds';

const getWeekInterval = (week = lastFullWeek) => {
  let weekIntervals = [];
  week.reverse();
  for (let day = 0; day < week.length; day++) {
    let current = addSeconds(week[day], 1);
    let current_EPOCH = getEpoch(current);
    let end = subSeconds(addHours(current, 24), 1);
    let end_EPOCH = getEpoch(end);
    if (day === 0) {
      current = subSeconds(current, 1);
      current_EPOCH = getEpoch(current);
      end = subSeconds(end, 1);
      end_EPOCH = getEpoch(end);
    }
    weekIntervals.push([
      { UTC: current, EPOCH: current_EPOCH },
      { UTC: end, EPOCH: end_EPOCH },
    ]);
  }
  weekIntervals.pop();
  return weekIntervals;
};

const weekIntervals = getWeekInterval();

export default weekIntervals;
