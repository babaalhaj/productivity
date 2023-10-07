document.addEventListener("DOMContentLoaded", function () {
    const escalationResponses = [`Dispense Error using Moniepoint Expense card on ATM`, `BO mistakenly transferred to a wrong account`];
    
    const escalationResponseDetails = [`Hello, 
    The BO with details below made a transaction on an ATM and was debited without receiving money. 
    Thank you. 
    
    Business name: 
    Email address:  
    Account number: 
    Mask pan:  
    Amount: 
    Date:  
    Transaction reference:`,
    `Hello,
    The BO with details below made an Erroneous transaction transferring <Amount> to a wrong account. Please see transaction details below, and i have also included copies of the Court order and transaction receipt. Thank you.
    
    Business name: 
    Email: 
    Amount: 
    Date: 
    Account number: 
    
    Erroneous recipient:
    Account name: 
    Account number: 
    Bank name: 
    
    Original recipient:
    Account name: 
    Account number: 
    Bank name: `];
    
    // Get a reference of the selected element
    const escalationMacrosInputs = document.getElementById("escalation-macros");
    const escalationMacrosDetails = document.getElementById("escalation-macros-area");
    
    // Add a default option
    const defaultOptions = document.createElement("option");
    defaultOptions.value = "";
    defaultOptions.text = "Select a response";
    escalationMacrosInputs.appendChild(defaultOptions);
    
    // Loop through the array and create an option for each response
    escalationResponses.forEach(input => {
        const option = document.createElement("option");
        option.value = input;  // Set the option's value
        option.text = input;   // Set the option's display text
        escalationMacrosInputs.appendChild(option);  // Add the option to the select element
    });
    
     // Event listener for the category dropdown
     escalationMacrosInputs.addEventListener("change", function () {
        var selectedInput = escalationMacrosInputs.selectedIndex;
        if(selectedInput === 0) {escalationMacrosDetails.innerHTML = "Please make a selection above please!";}
        else if(selectedInput === 1) {escalationMacrosDetails.innerHTML = escalationResponseDetails[0];}
        else if(selectedInput === 2) {escalationMacrosDetails.innerHTML = escalationResponseDetails[1];}
        else if(selectedInput === 3) {escalationMacrosDetails.innerHTML = escalationResponseDetails[2];}
        else if(selectedInput === 4) {escalationMacrosDetails.innerHTML = escalationResponseDetails[3];}
        else if(selectedInput === 5) {escalationMacrosDetails.innerHTML = escalationResponseDetails[4];}
        else if(selectedInput === 6) {escalationMacrosDetails.innerHTML = escalationResponseDetails[5];}
        else if(selectedInput === 7) {escalationMacrosDetails.innerHTML = escalationResponseDetails[6];}
        else if(selectedInput === 8) {escalationMacrosDetails.innerHTML = escalationResponseDetails[7];}
        else if(selectedInput === 9) {escalationMacrosDetails.innerHTML = escalationResponseDetails[8];}
        else if(selectedInput === 10) {escalationMacrosDetails.innerHTML = escalationResponseDetails[9];}
        else if(selectedInput === 11) {escalationMacrosDetails.innerHTML = escalationResponseDetails[10];}
    
    });

//     // Get the textarea and the copy button element
// const copyEscalationButton = document.getElementById("copyEscalation");

// // Add click event listener to the copy button
// copyEscalationButton.addEventListener("click", function() {
//     event.preventDefault();
//     // Select the text inside the textarea
//     escalationMacrosDetails.select();
//     escalationMacrosDetails.setSelectionRange(0, 99999); // For mobile devices

//     // Copy the selected text to the clipboard
//     document.execCommand("copy");

//     // Alert the user that the text has been copied (you can also use other methods like showing a tooltip)
//     alert("Text has been copied to clipboard: " + textarea.value);
// });

    
    });