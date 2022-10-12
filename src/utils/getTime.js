//处理时间
export function getTime() {
  let date = new Date()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const week = date.getDay()
  let Week
  switch (week) {
    case 0:
      Week = "Sun";
      break;
    case 1:
      Week = "Mom";
      break;
    case 2:
      Week = "Tue";
      break;
    case 3:
      Week = "Wed";
      break;
    case 4:
      Week = "Thur";
      break;
    case 5:
      Week = "Fri";
      break;
    case  6:
      Week = "Sat";
  }
  return {
    month, day, Week
  }
}

export function fmtTime() {
  let date = new Date(),
    YY = date.getFullYear(),
    MM = date.getMonth() + 1,
    DD = date.getDate(),
    hh = date.getHours(),
    mm = date.getMinutes(),
    ss = date.getSeconds();

  MM < 10 && (MM = "0" + MM)
  DD < 10 && (DD = "0" + DD)
  hh < 10 && (hh = "0" + hh)
  mm < 10 && (mm = "0" + mm)
  ss < 10 && (ss = "0" + ss)

  return `${YY}-${MM}-${DD} ${hh}:${mm}:${ss}`
}

