/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 let createEmployeeRecord = function(array){
     return {
         firstName: array[0],
         familyName: array[1],
         title: array[2],
         payPerHour: array[3],
         timeInEvents: [],
         timeOutEvents: []
     }
 }

 let createEmployeeRecords = function (array) {
   return array.map(row => createEmployeeRecord(row))
 }

 let createTimeInEvent = function (timeIn) {
     const split = timeIn.split(" ")
     const time = { type: "TimeIn", date: split[0], hour: parseInt(split[1])}
     this.timeInEvents.push(time)
     return this
 }

 let createTimeOutEvent = function (timeOut) {
    const split = timeOut.split(" ")
    const time = { type: "TimeOut", date: split[0], hour: parseInt(split[1])}
    this.timeOutEvents.push(time)
    return this
}

let hoursWorkedOnDate = function (date){
    const timeIn = this.timeInEvents.find(obj => obj.date === date).hour
    const timeOut = this.timeOutEvents.find(obj => obj.date === date).hour
    return (timeOut - timeIn) / 100
}

let wagesEarnedOnDate = function (date){
    return this.payPerHour * hoursWorkedOnDate.call(this, date)
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

// let calculatePayroll = function (array){
//     return array.map(emp => allWagesFor.call(this, emp)).reduce((total, rec) => total + rec)
// }

let calculatePayroll = function(array){
    return array.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}

function findEmployeeByFirstName(array, name){
    return array.find(emp => emp.firstName === name)
}