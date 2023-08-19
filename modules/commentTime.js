/* ------------------------------------------------------------------
*
                                 DATE
*
__________________________________________________________________ */

export function sTime({date}) {

        let specialTime = new Date(date);
        let day = specialTime.getDate() % 100;
        if (day < 10) day = '0' + day;
        let Month = specialTime.getMonth() % 100;
        if (Month < 10) Month = '0' + (1 + Month);
        let Hours = specialTime.getHours() % 100;
        if (Hours < 10) Hours = '0' + Hours;
        let Minutes = specialTime.getMinutes() % 100;
        if (Minutes < 10) Minutes = '0' + Minutes;

        return date = day + '.' + Month + '.' + specialTime.getFullYear() + ' ' + Hours + ':' + Minutes;
    } 

export function myTime() {

      let myDate = new Date();
      let year = myDate.getFullYear() % 100;
      if (year < 10) year = '0' + year;
      let fullDate;
      return fullDate = myDate.getDate() + '.' + myDate.getMonth() + '.' + year + ' ' + myDate.getHours() + ':' + myDate.getMinutes();
}