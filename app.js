var branchStatusMatrix = [{
    branch: "airForce",
    options: [
      {
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
      }]
  }, {
    branch: "coastGuard",
    options: [
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
        id: "individual-ready-reserve",
        text: "Individual Ready Reserve"
      }, {
        id: "tdrl",
        text: "TDRL"
      }]
  }, {
    branch: "marineCorps",
    options: [
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
      }]
  }, {
    branch: "army",
    options: [
      {
        id: "discharged-deceased-retired",
        text: "Discharged, deceased, or retired"
      }, {
        id: "active",
        text: "Active"
      }, {
        id: "reserve",
        text: "Reserve (including Individual Ready Reserve)"
      }]
  }, {
    branch: "navy",
    options: [
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
      }]
  }, {
    branch: "publicHealthService",
    options: [
      {
        id: "commissioned-corps-officers",
        text: "Public Health Service - Commissioned Crops officers only"
      }]
  }]

$( document ).ready(function(){
  $('select').on('change', function() {
    console.log( this.value );
    console.log(branchStatusMatrix[0]);
  });
});