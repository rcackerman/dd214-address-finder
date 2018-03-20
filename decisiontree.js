if (branch == 'airForce') {
    if (cStatus == 'discharged-deceased-retired') {
      // Air Force, discharged, before 1994 (row 1 in AF)
      if ( dDate < (new Date('5/1/1994')) ) {
        return {personnel: 14, medical: 14}
      // Air Force, discharged, between 5/1/94 - 9/30/04 (row 2 in AF)
      } else if ((dDate >= (new Date('5/1/1994')))
                  && (dDate <= (new Date('9/30/2004')))){
        return {personnel: 14, medical: 11}
      // Air Force, discharged, between 10/1/04 - 12/31/13 (row 3 in AF)
      } else if ((dDate >= (new Date('10/1/2004')))
                  && (dDate <= (new Date('12/31/2013')))) {
        return {personnel: 1, medical: 11}
      // Air Force, discharged, after 1/1/2014 (row 4 in AF)
      } else if (dDate >= (new Date('1/1/2014'))) {
        return {personnel: 1, medical: 13}
      }
    // Air Force, active, TDRL, and general officers retired with pay (row 5 in AF)
    } else if (cStatus in ['active', 'tdrl', 'general-officers-w-pay']) {
      return {personnel: 1}
    // Air Force, reserve etc (row 6 in AF)
    } else if (cStatus in ['reserve', 'irr', 'retired-reserve-non-pay', 'curr-ng-no-active-duty', 'ng-released']) {
      return {personnel: 2}
    // Air Force, current National Guard not on active duty (row 7 in AF)
    } else if (cStatus == 'cur-ng-enlisted-no-active-duty') {
      return {personnel: 2, medical: 13}
    }
  } else if (branch == 'coastGuard') {
    if (cStatus == 'discharged-deceased-retired') {
    }
  } 
}


