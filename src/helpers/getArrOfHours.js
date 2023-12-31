import moment from "moment";

const getArrOfHours = (currentDay, nextDay, localtime) => {
    // In case there are more than a million hours in one day( It's a joke. Just practiced binary search ).
    const binarySearch = (hours, currentHour) => {
        let low = 0;
        let high = hours.length - 1;

        while(low <= high) {
            const mid = Math.floor((low + high) / 2);
            const hour = moment(hours[mid].time, 'YYYY-MM-DD hh:mm').format('HH');
            if(hour === currentHour) {
                return mid;
            }
            if(hour > currentHour) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

    }
    const borderingPoint = binarySearch(currentDay, moment(localtime, 'YYYY-MM-DD HH:mm').format('HH'));
    // create new array of Hours since current hour
    return currentDay.slice(borderingPoint).concat(nextDay.slice(0, borderingPoint));
}

export default getArrOfHours;