document.addEventListener("DOMContentLoaded", function () {
const englishResponses = [`Bo/Brm that drops a comment without stating his/her complaint/request`, 
`Bo/Brm on hold while checking for feedback on a complaint/Request`,
`BOs/BRMs with complaints about account issues or transaction complaints for escalation`,
'BOs/Brms with wallet account statement/username request',
`Follow up response for if the account statement/username has been sent to the BOs official email address`,
`Response to manage a BO on withdrawal/transfer downtime (After general update has been broadcasted)`,
`Response to acknowledge feedback from BOs/BRMs that provides the information requested for escalation purposes`,
`Sending zendesk ticket numbers to BOs/BRMs for reference to their complaint/request`,
`Response for BOs on complaints regarding restrictions on their accounts, after confirming the KYC is approved.`,
`Response to BRMs on kyc approval requests`,
`Response to BRMs on terminal retrieval requests or terminal complaints`];

const englishResponseDetails = [`Thank you for contacting Moniepoint.
    How may I assist you today?`,
    `Please exercise patience while I confirm and revert with feedback soon.
    Returning to the Bo/brm that was placed on hold for feedback, give the following feedback;
    Thank you for your patience.`,
    `Thank you for contacting Moniepoint.
    We sincerely empathize with you on this.
    Your request is acknowledged and an update will be provided shortly.
    Thank you.
    
    Thank you for contacting Moniepoint.
    We sincerely apologize for the inconveniences caused.
    Your request is acknowledged and an update will be provided shortly.
    Thank you.
    
    Thank you for contacting Moniepoint.
    Your request is acknowledged and an update will be provided shortly.
    Thank you.`,
    `Response for BRMs
    Thank you for contacting Moniepoint.
    Please be informed that your request has been acknowledged and feedback will be sent to the business owner’s registered email address with Moniepoint.
    Thank you.
    
    Response for BOs
    Thank you for contacting Moniepoint.
    Please be informed that your request has been acknowledged and feedback will be sent to your registered email address with Moniepoint.
    Thank you.`,
    `Response for BRMs
    Thank you for your patience.
    Please be informed that the response to your request has been sent to the Bo’s registered email address with Moniepoint, kindly advise the Bo to check his/her email for feedback.
    Thank you for choosing Moniepoint.
     
    Response for BOs
    Thank you for your patience.
    Please be informed that the response to your request has been sent to your registered email address with Moniepoint, kindly check your email for feedback.
    Thank you for choosing Moniepoint.`,
    `Thank you for contacting Moniepoint.

    Our sincere apologies for the inconveniences caused.
    Please be informed that we are currently working on ensuring the issue is resolved as soon as possible.
    An update will be shared once the service is restored.
    Thank you.
    
    Alternative follow up response to manage a Bo on withdrawals/transfers downtime. 
    Please note; This can be used to manage the BOs after a general update on the downtime has been broadcasted via the group chats.

    Thank you for contacting Moniepoint.
    We sincerely apologize for any inconvenience this may have caused you.
    Please note that we are currently working on ensuring this downtime is resolved as soon as possible.
    An update will be shared once the issue is resolved.
    Thank you.`,
    `Thank you for the feedback.

    Please be informed that this will be escalated and a ticket number will be given to you for reference to your complaint.
    For updates, Kindly check back using the ticket number for feedback on your complaint.
    Thank you.`,
    `Thank you for your patience.

    Your complaint has been logged on ticket number #654321, kindly send a reminder using the ticket number provided to confirm feedback/update on your complaint/request.
    Thank you for choosing Moniepoint.`,
    `Thank you for contacting Moniepoint.

    Kindly note that your wallet has been placed on a lien, To disable the lien from your wallet/profile, Please contact your business relationship manager(BRM) for assistance. To view your business relationship manager’s contact details please log into your online platform, it is visible on your dashboard. 
    
    Thank you for choosing Moniepoint.`,
    `Thank you for contacting Moniepoint.

    Please be informed that all KYC approval requests/complaints are to be logged via the Zendesk webform. Following the steps below: 
    
    STEPS ON HOW TO LOG KYC APPROVAL REQUESTS ON ZENDESK.
    
    1. Click on this url link https://support.moniepoint.com/hc/en-us/requests/new
    2. Input your Moniepoint official BRM email address.
    3.  Subject should be written as KYC APPROVAL REQUEST 
    4. Under “Nature of Moniepoint Enquiry'', click on the drop down, scroll to the end and select “KYC ISSUES''
    5. On the space for description please input the Bo’s information, business name, email address, BVN name and BVN number.
    6. If you want to upload an attachment, click on “Add file” click the document and click on submit.
    7. Click on submit to submit the request.
    
    You will receive an email notification with feedback on your request.
    Thank you for choosing Moniepoint.`,
    `Thank you for contacting Moniepoint.

    Please be informed that terminal retrieval request/terminal complaints are to be logged via the Zendesk webform. Following the steps below: 
    
    STEPS ON HOW TO LOG TERMINAL RETRIEVAL REQUESTS ON ZENDESK.
    
    1. Click on this url link https://teamapt.zendesk.com/hc/en-us/requests
    2. Input your state coordinator’s email address
    3.  Subject should be written as either (TERMINAL RETRIEVAL REQUEST) for retrieval request or (TERMINAL ISSUES) for terminal complaint.
    4.  Under “Nature of Moniepoint Enquiry'', click on the drop down, scroll to the end and select “TERMINAL”
    5. On the space for description please input the Bo’s information and terminal information e.g terminal serial number, terminal id and your brm username.
    6. If you want to upload a document, click on “Add file” click the document and click on submit.
    7. Click on submit to submit the request.
    
    Please note that your state coordinator will have to approve the request after you have logged it on zendesk before your request can be treated. You will receive an email notification with feedback on your request.
    Thank you for choosing Moniepoint.`];

// Get a reference of the selected element
const englishMacrosInputs = document.getElementById("english-macros");
const englishMacrosDetails = document.getElementById("english-macros-area");

// Add a default option
const defaultOptions = document.createElement("option");
defaultOptions.value = "";
defaultOptions.text = "Select a response";
englishMacrosInputs.appendChild(defaultOptions);

// Loop through the array and create an option for each response
englishResponses.forEach(input => {
    const option = document.createElement("option");
    option.value = input;  // Set the option's value
    option.text = input;   // Set the option's display text
    englishMacrosInputs.appendChild(option);  // Add the option to the select element
});

 // Event listener for the category dropdown
 englishMacrosInputs.addEventListener("change", function () {
    var selectedInput = englishMacrosInputs.selectedIndex;
    if(selectedInput === 0) {englishMacrosDetails.innerHTML = "Please make a selection above please!";}
    else if(selectedInput === 1) {englishMacrosDetails.innerHTML = englishResponseDetails[0];}
    else if(selectedInput === 2) {englishMacrosDetails.innerHTML = englishResponseDetails[1];}
    else if(selectedInput === 3) {englishMacrosDetails.innerHTML = englishResponseDetails[2];}
    else if(selectedInput === 4) {englishMacrosDetails.innerHTML = englishResponseDetails[3];}
    else if(selectedInput === 5) {englishMacrosDetails.innerHTML = englishResponseDetails[4];}
    else if(selectedInput === 6) {englishMacrosDetails.innerHTML = englishResponseDetails[5];}
    else if(selectedInput === 7) {englishMacrosDetails.innerHTML = englishResponseDetails[6];}
    else if(selectedInput === 8) {englishMacrosDetails.innerHTML = englishResponseDetails[7];}
    else if(selectedInput === 9) {englishMacrosDetails.innerHTML = englishResponseDetails[8];}
    else if(selectedInput === 10) {englishMacrosDetails.innerHTML = englishResponseDetails[9];}
    else if(selectedInput === 11) {englishMacrosDetails.innerHTML = englishResponseDetails[10];}

});

});