var errorBody = 
  [
    {
         "Title": "Ministop",
         "Destination": "TARLAC,ANAO,HERNANDO",
         "Date": "12/21/2022",
         "Time": "03:02 PM",
         "Seats": "3",
         "SortNo": "4"
    },
     {
         "Title": "7-Eleven",
         "Destination": "MANILA,MALATE,BARANGAY 691",
         "Date": "12/21/2022",
         "Time": "04:30 PM",
         "Seats": "6",
         "SortNo": "2"
    }
 ]


var failedRequests = [
      {
          body: {SortNo: ""},
          error: "Missing Sort number"
      },
      {
        body: {Date: "","SortNo": "1"},
        error: "Departure Date is Invalid"
    },
    {
        body: {Time: "12/27/2022 12:03","SortNo": "1","Date": "12/21/2022"},
        error: "Departure Time is Invalid"
    }
]

var updatedErrorBody = errorBody;
var newBody;
failedRequests.map(function(elements, indexs) {
    console.log(elements,indexs)
    errorBody.forEach((element, index) => {
      //console.log(errorBody)
      if(element.Title === "7-Eleven") {
        newBody = {...updatedErrorBody[index],...elements.body};
        var updatedRequests = {"Stops":[updatedErrorBody]}
        updatedRequests["Stops"].push(newBody);
        console.log(updatedRequests);
      }
    });
})


