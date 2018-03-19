var branchStatusMatrix = {
  airForce: [{
      id: "",
      text: ""
    }, {
      id: "discharged-deceased-retired",
      text: "Discharged, deceased, or retired"
    }, {
      id: "active",
      text: "active"
    }, {
      id: "tdrl",
      text: "TDRL"
    }, {
      id: "general-officers-w-pay",
      text: "General officers retired with pay"
    }, {
      id: "reserve",
      text: "Reserve"
    }, {
      id: "irr",
      text: "IRR"
    }, {
      id: "retired-reserve-non-pay",
      text: "Retired Reserve in non-pay status"
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
        text: "Active"
      }, {
        id: "reserve",
        text: "Reserve"
      }, {
        id: "individual-ready-reserve",
        text: "Individual Ready Reserve"
      }, {
        id: "tdrl",
        text: "TDRL"
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
        text: "Individual Ready Reserve"
      }, {
        id: "active",
        text: "Active"
      }, {
        id: "selected-marine-corps-reserve",
        text: "Selected Marine Corps Reserve"
      }, {
        id: "tdrl",
        text: "TDRL"
      }
  ],
  army: [{
        id: "",
        text: ""
      }, 
      {
        id: "discharged-deceased-retired",
        text: "Discharged, deceased, or retired"
      }, {
        id: "active",
        text: "Active"
      }, {
        id: "reserve",
        text: "Reserve (including Individual Ready Reserve)"
      }
  ],
  navy: [{
        id: "",
        text: ""
      }, 
      {
        id: "discharged-deceased-retired",
        text: "Discharged, deceased, or retired"
      }, {
        id: "active",
        text: "Active"
      }, {
        id: "reserve",
        text: "Reserve"
      }, {
        id: "tdrl",
        text: "TDRL"
      }
  ],
  publicHealthService: [{
        id: "",
        text: ""
      }, 
      {
        id: "commissioned-corps-officers",
        text: "Public Health Service - Commissioned Crops officers only"
      }
  ]
}

var populateStatusDropdown = function(branch) {
  $("#current-status-select").empty();
  $("#current-status-select").append(
    $.map(branchStatusMatrix[branch], function(i){
      return $("<option>").val(i.id).text(i.text);
    })
  );
}

var display

$( document ).ready(function(){
  $('#branch-select').on('change', function() {
    $("#current-status").show();
      populateStatusDropdown(this.value);
  });
});
