/* Your Code Here */
let createEmployeeRecord = function (rec) {
    return {
        firstName: rec[0],
        familyName: rec[1],
        title: rec[2],
        payPerHour: rec[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function (recs) {
    return recs.map(rec => createEmployeeRecord(rec))
}

let createTimeInEvent = function(dateTime){
    let date = dateTime.split(" ")[0]
    let hour = dateTime.split(" ")[1]
  
    this.timeInEvents.push({
      type: "TimeIn",
      date: date,
      hour: parseInt(hour)
    })
    return this
  }

  let createTimeOutEvent = function(dateTime){
    let date = dateTime.split(" ")[0]
    let hour = dateTime.split(" ")[1]
  
    this.timeOutEvents.push({
      type: "TimeOut",
      date: date,
      hour: parseInt(hour)
    })
    return this
  }
  let hoursWorkedOnDate = function(findDate){
    let inDate = this.timeInEvents.find(e =>e.date === findDate)
    let outDate = this.timeOutEvents.find(e => e.date === findDate)
  
    return (outDate.hour - inDate.hour) / 100
  }
  
  let wagesEarnedOnDate = function(findDate){
    let wage = hoursWorkedOnDate.call(this, findDate) * this.payPerHour
  
    return wage
  }
  let findEmployeeByFirstName = function(array, firstName){
    return array.find(em => em.firstName === firstName)
  }
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let calculatePayroll = function(employees){
    return employees.reduce((tot, employee) => tot + allWagesFor.call(employee), 0)
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}