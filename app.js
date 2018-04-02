var branchStatusMatrix = {
  airForce: [{
      id: "",
      text: ""
    }, {
      id: "discharged-deceased-retired",
      text: "Discharged, deceased, or retired"
    }, {
      id: "active",
      text: "Active",
      personnel: 1
    }, {
      id: "tdrl",
      text: "TDRL",
      personnel: 1
    }, {
      id: "general-officers-w-pay",
      text: "General officers retired with pay",
      personnel: 1
    }, {
      id: "reserve",
      text: "Reserve",
      personnel: 2
    }, {
      id: "irr",
      text: "IRR",
      personnel: 2
    }, {
      id: "retired-reserve-non-pay",
      text: "Retired Reserve in non-pay status",
      personnel: 2
    }, {
      id: "curr-ng-officers-not-ad",
      text: "Current National Guard officers not on active duty in the Air Force",
      personnel: 2
    }, {
      id: "ng-released-from-ad",
      text: "National Guard released from active duty in the Air Force",
      personnel: 2
    }, {
      id: "curr-ng-enlisted-not-ad",
      text: "Current National Guard enlisted not on active duty in the Air Force",
      personnel: 2,
      medserv: 13
    }
  ], 
  coastGuard: [{
        id: "",
        text: ""
      }, {
        id: "discharged-deceased-retired",
        text: "Discharged, deceased, or retired"
      }, {
        id: "active",
        text: "Active",
        personnel: 3
      }, {
        id: "reserve",
        text: "Reserve",
        personnel: 3
      }, {
        id: "individual-ready-reserve",
        text: "Individual Ready Reserve",
        personnel: 3
      }, {
        id: "tdrl",
        text: "TDRL",
        personnel: 3
      }
  ],
  marineCorps: [{
        id: "",
        text: ""
      }, 
      {
        id: "discharged-deceased-retired",
        text: "Discharged, deceased, or retired"
      }, {
        id: "individual-ready-reserve",
        text: "Individual Ready Reserve",
        personnel: 5
      }, {
        id: "active",
        text: "Active",
        personnel: 4
      }, {
        id: "selected-marine-corps-reserve",
        text: "Selected Marine Corps Reserve",
        personnel: 4
      }, {
        id: "tdrl",
        text: "TDRL",
        personnel: 4
      }
  ],
  army: [{
        id: "",
        text: ""
      }, 
      {
        id: "discharged-deceased-retired",
        text: "Discharged, deceased, or retired (including TDRL)"
      }, {
        id: "active",
        text: "Active",
        personnel: 7
      }, {
        id: "reserve",
        text: "Reserve (including Individual Ready Reserve)",
        personnel: 7
      }, {
        id: "national-guard",
        text: "National Guard",
        personnel: 7
      }
  ],
  navy: [{
        id: "",
        text: ""
      }, 
      {
        id: "discharged-deceased-retired",
        text: "Discharged, deceased, or retired",
      }, {
        id: "active",
        text: "Active",
        personnel: 10
      }, {
        id: "reserve",
        text: "Reserve",
        personnel: 10
      }, {
        id: "tdrl",
        text: "TDRL",
        personnel: 10
      }
  ],
  publicHealthService: [{
        id: "",
        text: ""
      }, 
      {
        id: "commissioned-corps-officers",
        text: "Public Health Service - Commissioned Crops officers only",
        personnel: 12
      }
  ]
}

var populateStatusDropdown = function(branch) {
  $("#current-status").show();
  $("#current-status-select").empty().append(
    $.map(branchStatusMatrix[branch], function(i){
      return $("<option>").val(i.id)
                          .text(i.text)
                          .data('personnel', i.personnel)
                          .data('medserv', i.medserv);
    })
  );
}

var clearResults = function() {
  $("#results").children().hide();
  $("#finder").removeData("personnel").removeData("medserve");
  $("#discharge-date").hide();
  $("#discharge-date").find("select").val("");
  $("#discharge-date").find("input").val("");
  return true;
}

var getRetirementDischargeDate = function(formSection) {
  let m = formSection.find("#d-month option:selected").val();
  let d = formSection.find("#d-day option:selected").val();
  let y = formSection.find("#d-year").val();
  return new Date(y, m, d);
}

var getWhereToSend = function(branch, dDate) {
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
    } else if ( dDate >= (new Date('10/1/2013')) )  {
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
}

var showWhereToSend = function(destinationDict) {
  // Find the personnel and medical/service treatment location
  // using data from the #current-status-select option chosen
  $.each(destinationDict, function(k,v) {
    $("#results").show();
    $("#address" + v).show();
  })
}


$( document ).ready(function(){
  // When the branch dropdown changes, populate the current status dropdown with
  // the applicable options
  $('#branch-select').on('change', function() {
    clearResults();
    populateStatusDropdown(this.value);
    // Keep track of the branch chosen by adding data to the form
    $("#finder").data('branch', this.value);
  });

  // When the current status dropdown changes, check to see if the option was
  // discharged-deceased-retired, and then show the discharge date field set.
  $('#current-status').on('change', "#current-status-select", function() {
    clearResults();

    if (this.value != 'discharged-deceased-retired') {
      // Keep track of where to send the request by adding data to the form
      var destinations = $( this ).children( 'option:selected' ).data();
      $("#finder").data(destinations);
    } else {
      // Show the discharge date section
      $("#discharge-date").show();
    }
    // Show the submit button
    $("button").show();
  });

  $("#finder").on("submit", function( event ){
    if ( $(this).data('personnel') == undefined ) {
      let date = getRetirementDischargeDate($("#discharge-date"));
      let branch = $("#finder").data('branch');
      $("#finder").data(getWhereToSend(branch, date));
    }
    showWhereToSend($(this).data());
    event.preventDefault();
  });

});
