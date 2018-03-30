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
  $("#discharge-date").hide();
  $("#discharge-date").find("input").val("");
  return true;
}

var getRetirementDate = function(dateString) {
  return true;
}

var getWhereToSend = function(destinationDict) {
  // Find the personnel and medical/service treatment location
  // using data from the #current-status-select option chosen
  $.each(destinationDict, function(k,v){
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
      // Show the submit button at this point
      $("button").show();
    } else {
      $("#discharge-date").show();
    }
  });

  $("#finder").on("submit", function(event){
      getWhereToSend($(this).data());
      event.preventDefault();
  });

});
