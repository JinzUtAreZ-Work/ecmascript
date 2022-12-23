Sorting by Asc and Desc

// var employees = [
//   { "firstName" : "John" , "lastName" : "Doe" , "age":"51" },
//   { "firstName" : "John" , "lastName" : "Doe" , "age":"24" },
//   { "firstName" : "John" , "lastName" : "Doe" , "age":"91" }, 
//   { "firstName" : "Anna" , "lastName" : "Smith" , "age":"30" }, 
//   { "firstName" : "Peter" , "lastName" : "Jones" , "age":"45" }, 
// ];

var employees = [
  {
       "Title": "Ministop",
       "Destination": "TARLAC,ANAO,HERNANDO",
       "Date": "12/21/2022",
       "Time": "03:02 PM",
       "Seats": "3",
       "SortNo": "1"
  },
   {
       "Title": "7-Eleven",
       "Destination": "MANILA,MALATE,BARANGAY 691",
       "Date": "12/21/2022",
       "Time": "04:30 PM",
       "TargetLocation": true,
       "Seats": "6",
       "SortNo": "2"
  },
   {
       "Title": "Lawson",
       "Destination": "FOURTH DISTRICT,PASAY CITY,BARANGAY 11",
       "Date": "12/22/2022",
       "Time": "12:30 AM",
       "TargetLocation": false,
       "Seats": "9",
       "SortNo": "3"
  }, 
   {
       "Title": "FamilyMart",
       "Destination": "SECOND DISTRICT,CITY OF PASIG,MANGGAHAN",
       "Date": "12/23/2022",
       "Time": "3:30 PM",
       "TargetLocation": false,
       "Seats": "12",
       "SortNo": ""
  } 
]


function sortByKey(array, key, orderby) {
var sortOut =  array.sort(function(a, b) {
    var x = a[key]; var y = b[key];
    
    if (orderby === 'asc')
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));

    if (orderby === 'desc')
    return ((x > y) ? -1 : ((x < y) ? 1 : 0));

    return null;
});
 return sortOut;
}

var people = sortByKey(employees, 'SortNo', 'desc');

console.log(people);
