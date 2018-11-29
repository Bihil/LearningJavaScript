// variables

const form = document.getElementById('request-quote');

const html = new HTMLUI();



// Event listners
eventListeners();


function eventListeners() {
 document.addEventListener('DOMContentLoaded', function () {
  // Create the <option> for the years

  html.displayYears();
 });
 // When the form is submitted
 form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Read the values from the FORM
  const make = document.getElementById('make').value;
  const year = document.getElementById('year').value;
  // Read the radio buttons
  const level = document.querySelector('input[name="level"]:checked').value;

  // Check that all the fields have something
  if (make === '' || year === '' || level === '') {
   html.displayError('All the fields are mandatory');
  } else {
   // Clear the previous quotes
   const prevQuotes = document.querySelector('#result div');
   if (prevQuotes != null) {
    prevQuotes.remove();
   }
   // Make the quotation
   const insurance = new Insurance(make, year, level);
   const price = insurance.calulateQuotation(insurance);

   // Print the result from HTMLUI()
   html.showResults(price, insurance);
  }
 });
}




// Objects



