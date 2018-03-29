if (branch == 'airForce') {
  // Air Force, discharged, before 1994 (row 1 in AF)
  if ( dDate < (new Date('5/1/1994')) ) {
    return {personnel: 14, medserv: 14}
  // Air Force, discharged, between 5/1/94 - 9/30/04 (row 2 in AF)
  } else if ( (dDate >= (new Date('5/1/1994')))
              && ( dDate <= (new Date('9/30/2004')) ) ){
    return {personnel: 14, medserv: 11}
  // Air Force, discharged, between 10/1/04 - 12/31/13 (row 3 in AF)
  } else if ( (dDate >= (new Date('10/1/2004')))
              && (dDate <= (new Date('12/31/2013'))) ) {
    return {personnel: 1, medserv: 11}
  // Air Force, discharged, after 1/1/2014 (row 4 in AF)
  } else if ( dDate >= (new Date('1/1/2014')) ) {
    return {personnel: 1, medserv: 13}
  }
} else if (branch == 'coastGuard') {
  if ( dDate <= (new Date('3/31/1998')) ) {
    return { personnel: 14, medserv: 14 }
  } else if ( (dDate >= (new Date('4/1/1998')))
              && (dDate <= new Date('9/30/2006')) ) {
    return { personnel: 14, medserv: 11}
  } else if ( (dDate >= (new Date('10/1/2006')))
              && (dDate <= (new Date('9/30/2013'))) ) {
    return { personnel: 3, medserv: 11 }
  } else if ( dDate >= (new Date('10/1/2013') )  {
    return { personnel: 3, medserv: 14}
  }
} else if ( branch == 'marineCorps' ) {
  if ( dDate <= (new Date('4/30/1994')) ) {
    return { personnel: 14, medserv: 14 }
  } else if ( (dDate >= (new Date('5/1/1994')))
             && (dDate <= (new Date('12/31/1998'))) ) {
    return { personnel: 14, medserv: 11 }
  } else if ( (dDate >= (new Date('1/1/1999')))
              && (dDate <= (new Date('12/31/2013'))) ) {
    return { personnel: 4, medserv: 11 }
  } else {
    return { personnel: 4, medserv: 8 }
  }
} else if ( branch == 'army' ) {
  if ( dDate >= (new Date('10/15/1992')) ) {
    return { personnel: 14 }
  } else if ( (dDate >= (new Date('10/16/1992')))
              && (dDate <= (new Date('9/30/2002'))) ) {
    return { personnel: 14, medserv: 11 }
  } else if ( (dDate >= (new Date('10/1/2002')))
              && (dDate <= (new Date('12/31/2013'))) ) {
    return { personnel: 7, medserv: 11 }
  } else {
    return { personnel: 7, medserv: 9 }
  }
} else if ( branch == 'navy' ) {
  if ( dDate >= (new Date('1/30/1994'))) {
    return { personnel: 14, medserv: 14 }
  } else if ( (dDate >= (new Date('1/31/1994')))
              && (dDate <= (new Date('12/31/1994'))) ) {
    return { personnel: 14, medserv: 11 }
  } else if ( (dDate >= (new Date('1/1/1995')))
              && (dDate <= (new Date('12/31/2013'))) ) {
    return { personnel: 10, medserv: 11 }
  } else {
    return { personnel: 10, medserv: 8 }
  }
} 


