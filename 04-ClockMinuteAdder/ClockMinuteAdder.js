function clockMinuteAdder(time, minutesToAdd){
  // console.log(time);
  // console.log(minutesToAdd);
  
  let timeArr = time.split(":")
  // console.log(timeArr[0]);
  // console.log(timeArr[1]);
  
  let totalMinutes = parseInt(timeArr[1]) + minutesToAdd
  //console.log(totalMinutes);
  //console.log(totalMinutes/60);
  
  let totalHours = Math.floor(totalMinutes/60) + parseInt(timeArr[0])
  //console.log(totalHours);
  
  totalMinutes = totalMinutes % 60
  totalHours = (totalHours - 1) % 12 +1  // totalHours = totalHours % 12 
                                         //if(!totalHours) totalHours += 12
  
  if(totalHours < 10 ) totalHours = "0" + totalHours
  if((totalMinutes) < 10) totalMinutes = "0" + (totalMinutes)
  
  return `${totalHours}: ${totalMinutes}`
  
  }
  
  console.log(clockMinuteAdder("09:00", 20)); //("09:20")
  console.log(clockMinuteAdder("01:30", 30)); //("02:00")
  console.log(clockMinuteAdder("12:05", 100)); //("01:45")
  console.log(clockMinuteAdder("12:05", 1440)); //("12:05")

module.exports = clockMinuteAdder;
