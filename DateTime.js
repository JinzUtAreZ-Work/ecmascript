Date Time use cases 

function convertTime12to24(time12h){
  var [time, modifier] = time12h.split(' ');

  var [hours, minutes] = time.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}`;
}

console.log(convertTime12to24('03:02 PM'));


function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function dateIsValid(date) {
    return (
        Object.prototype.toString.call(new Date(date)) === '[object Date]' && !isNaN(new Date(date))
    );
}
