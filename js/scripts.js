function Place(placeName, placeLocation, placeLandmark, placeTime) {
  this.placeName = placeName;
  this.placeLocation = placeLocation;
  this.placeLandmark = placeLandmark;
  this.placeTime = placeTime;
};


Place.prototype.fullLocation = function() {
  return this.placeName + " " + this.placeLocation;
};

Place.prototype.fullLocation = function() {
  return this.placeName + " " + this.placeLocation;
};






//
// function Contact(firstName, lastName, address) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.address = address;
// }
//
// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName + " " + this.address;
// };
//
// $(document).ready(function() {
//   $("form#new-contact").submit(function(event) {
//
//     var inputtedFirstName = $("input#new-first-name").val();
//     var inputtedLastName = $("input#new-last-name").val();
//     var inputtedAddress = $("input#new-address").val();
//     var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedAddress);
//
//     $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
//
//     $("input#new-first-name").val("");
//     $("input#new-last-name").val("");
//     $("input#new-address").val("");
//         event.preventDefault();
//
//
//         $(".contact").last().click(function(){
//           $("#show-contact").show();
//           $("#show-contact h2").text(newContact.fullName());
//           $(".first-name").text(newContact.firstName);
//           $(".last-name").text(newContact.lastName);
//           $(".address").text(newContact.address);
//           });
//   });
//
//
//
// });
