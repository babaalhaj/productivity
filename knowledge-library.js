document.addEventListener("DOMContentLoaded", function () {
  
  // Array of input values
const inputs =  ["Transfers", "Withdrawals POS Transfer", "Card Transfer", "POS", "Airtime & Bills", "Savings", "Loans", "Front Office"];
// const transfers = ["1. Successful deposit/transfer, yet to reflect in beneficiary's account", "2. Failed deposit/transfer, BO's wallet debited",
// '3. Deposit transaction status shows "Please check platform for status"', '4. Deposit transaction status shows "Please check platform for status"',
// "5. Pending deposit/transfer, BO's wallet debited", "6. Erroneous/ fraudulent transfers and excess credit"];

const transfers = [
  "1. Successful deposit/transfer,yet to reflect in beneficiary's account",
  "2. Failed deposit/transfer, BO's wallet debited.",
  "3. Deposit transaction status shows 'Please check platform for status' or 'Transaction invalid' or the transaction is inconclusive, i.e; the status of the transaction was not determined, no receipt printed out",
  "4. Pending deposit/transfer, BO's wallet debited",
  "5. Erroneous/fraudulent transfers and excess credit"];

const KycOnboarding = [`1. Error uploading documents for KYC`,
`2. Customer is unable to transact, there is a restriction on the customer's account`];

const withdrawals = ["1. Successful card withdrawal transaction yet to reflect in BO's wallet", "2. Failed card withdrawal transaction, customer got debited",
"3. POS transfer approved, BO's wallet not credited", "4. POS tranfer declined, value not reversed to the customer",
"5. Transfers via the Terminal", "6. How to view Pending POS Transfers via the App", "7. How to view Accepted/Declined POS"]; 
const cardTransfer = ["1. Successful card transfer, beneficiary yet to receive value ", "2. Card transfer, failed withdrawal leg, customer debited",
"3. Successful withdrawal leg, failed deposit leg", "4. Pending card trasnfer (withdrawal leg successful, deposit leg pending)"];
const pos = ["1. Error detecting card- Error 20", "2. The wallet balance is not reflecting on the terminal.",
"3. To hide the wallet balance", "4. Terminal blocked due to multiple wrong business pin entry", "5. To set up the terminal pin which is 5 digits or reset the terminal pin",
"6. How to perfom a KEY Download on Topwise Temrinal", "7. How to perfom a KEY Download on Android Terminal (Android A90 Terminals do not have buttons but has screen touch feature)",
"8. How to manaully synchronise Topwise Terminal", "9. How to manaully synchronise Analog Terminal (Terminals with only buttons, no screen touch feature)",
"10. How to manaully synchronise Android Terminal (Android A90 Terminals do not have buttons but has screen touch feature)",
"11. How to delete installation packages on my Terminal (Topwise)"];
const airtimeAndBills = ["1. Successful airtime purchase yet to reflect on customer's line", "2. Failed airtime purchase, BO's wallet debited",
"3. Pending airtime purchase & bill payment, BO's wallet debited", "4. Failed bill payment,BO's wallet debited", "5. Successful Bill payment, value yet to reflect for customer"];
const savings = ["1. BO is getting the error Invalid Authorization pin on cashing out his savings", "2. Savings transfered into business manager wallet but is not reflecting",
"3. To deactivate a savings plan", "4. How to activate savings plan", "5. How to transfer funds from the personal balance to the main wallet",
"6. How to cashout savings Manually"];
const loans = ["1. Loan Issues", "2. How to apply for a loan"];
const frontOffice = ["1. BO forgot log in details", "2. Change of BO information such as (Phone number, email address,business name)",
"3. BO not receiving OTP while trying to log in", "4. Request for activation link", '5. Error "Account locked"',
"6. How to unlink a device from your front-office", "7. How to download account statement", "8. Restricted Account"]; // NB: Action 1 Request to reset passeord "

// Array of input Information
const transfersActions = ["Transfer transactions or deposits are transactions in which the customer gives the Business owner cash in order for the value of the cash to be deposited into a given beneficiary's account"];
const withdrawalsActions = ["<p>Withdrawal transactions are transactions in which funds are moved out of the customer's account in order to receive the physical cash value of the amount moved out at the end of the transaction.</p> <b>TYPES OF WITHDRAWAL TRANSACTIONS </b><ol><li> <b>Card Withdrawal:</b> This is when a customer provides his atm card to be used on the Business owner’s POS terminal in order for the card to be debited of the amount required and he/she can receive cash for it. </li><li> <b>Cardless Withdrawal(POS Transfer):</b> This is a feature that enables customer's without ATM cards, transfer the amount they will like to withdraw into the POS transfer of the BO. Business owner's can either accept or decline this transaction after confirming the KYC. If the POS transfer is accepted, the funds will be moved to the BO's wallet and the BO will give the customer the cash value, if declined, the funds will be reversed to the customer's account.</li></ol> <p> We have a dispute feature that allows BO's log failed withdrawal transactions where customer was debited for a possible reversal of funds. The errors eligible to be logged on the dispute feature are;</br>Response received too late (68) </br> Issuer or switch inoperative (91) </br> Error (06) </br> System Malfunction (96) </br> Refer to card isuer. (01) </br> Do not honor (05) </br> The SLA for the dispute feature is 48 working hours</p> "];
const cardTransferActions = ["This is a feature that allows Business owners to debit customer cards and transfer money to a destination account at a go. It allows BOs to specify how much they would like to debit a customer card and how much they want to transfer. </br> <ul> <li>Card transfer transactions can only be done via the POS, however, like every other transaction, it can be viewed on the front office once done.</li><li>Card transfer transaction carries both withdrawal and deposit charges for each transaction.</li> <li>A card transfer transaction has a wallet entry for both the withdrawal leg of the transaction and the deposit leg of the transaction. </li> </ul>"];
const posActions = ["This is the device with which the Business owners and merchant carry out their transactions with."];
const airtimeAndBillsActions = ["This is a feature that allows Business owners to pay bills such as electricity bills (prepaid & postpaid), betting and purchase airtime for their customer. The customers provide cash to the BOs in order to process these payments."];
const savingsActions = ["This is a feature that enables Business Owners save a certain amount  from every withdrawal and deposit transaction they carry out in a day. The amount will be deducted from every withdrawal and deposit transaction BO's carry out based on their savings plan and be moved into their savings wallet which can be found in their business manager profile. Its called the Save As You Earn (S.A.Y.E) At the end of the payout frequency, the savings is then moved to their business manager wallet where they can seamlessly access it and then move seamlessly to any of their business wallets.  BO's can also access the savings before the end of their payout frequency if they choose to, however they will be charged 1% of the amount in their savings wallet as a result of this."];
const loansActions = ["Loans are Short-term floats, they are called Business Loans/Overdrafts, which has a tenure of 24 working hours for use and payback. The interest rate on loans is 0.0125% per hour or 0.3% per day. The minimum we give on loans is 50,000 and the maximum is 1,000,000. A BO's KYC has to be approved for him to access loans, he should also have a good credit score and ensure that his Next of Kin's details are valid while being profiled. The Risk team/Portfolio Managers will have to access a BO's profile before he can be given loans."];
const frontOfficeActions = ['This is the Moniepoint platform where the Business Owners manage all their activites. It can be access via the app which can be downloaded from the app store or via web by entering the url link <a href="https://atm.moniepoint.com">atm.moniepoint.com</a>'];
const KycOnboardingActions = [`KYC is a compulsory procedure which means 'Know your customer'. It is a major requierement for newly onboarded customers in order to get their identites and enable them transact without expereicing restrictions. Moniepoint business has 5 levels of KYC, while Moniepoint personal has 3 levels of KYC`];

// Array of input steps
const transferSteps = [["<ol><li>Request for the receipt of the transaction, confirm the transaction status shows successful and not failed or pending.</li><li>Run a check on backoffice under deposits to confirm that the trransaction was recorded, confirm that the BO's wallet was debited for the transaction by running a check under CBA wallet transactions.</li><li>After confirming that the BO's wallet was debited for the successful deposit transaction, provide the BO with the 30 digit session ID of the transaction and advise to inform the beneficiary to contact the bank and avail them with the session ID in order for the bank to credit the beneficiary's account.</li></ol>"],
                        ["<ol><li>If the beneficiary's bank claims to not be in position of the transaction, then go ahead to raise a ticket for the transaction under \"Transfer Issues\" as nature of Moniepoint Enquiry  after 24 hours of the transaction being done.</li> <li>Follow up on the ticket for resolution and update the BO from time to time.</li></ol>"],
                        ["If the resolution is delayed and over 2-4 days of the ticet being raise, alert your regional teamlead."]];

const kycOnboardingSteps = [
  ['test'],['test'],['test']
];

const transfersTrial = {
  "Successful deposit/transfer,yet to reflect in beneficiary's account": ['a','b','c'],
 "Withdrawals POS Transfer": ['d','e','f'],
  "Card Transfer": ['g','h','i']
};


// Get a reference to the selected element
const selectInputs = document.getElementById("input-lists");
const inputSteps = document.getElementById("input-steps");
const selectOptions = document.getElementById("input-options");
const headingInformation = document.getElementById("heading-info");
const accordion = document.getElementById('accordion');

// Add a default option
const defaultOptions = document.createElement("option");
defaultOptions.value = "";
defaultOptions.text = "Select an option";
selectInputs.appendChild(defaultOptions);

// Loop through the array and create an option for each input
inputs.forEach(input => {
    const option = document.createElement("option");
    option.value = input;  // Set the option's value
    option.text = input;   // Set the option's display text
    selectInputs.appendChild(option);  // Add the option to the select element
});

// Select values from selected input

  // Event listener for the category dropdown
        selectInputs.addEventListener("change", function () {
            var selectedInput = selectInputs.selectedIndex;
            if(selectedInput === 0) {selectOptions.disabled = true; headingInformation.innerHTML = "Please make a selection below!"; selectOptions.innerHTML = "";}
            else if(selectedInput === 1) {var getValues = transfers; headingInformation.innerHTML = transfersActions[0];
            
            }
            else if(selectedInput === 2) {var getValues = withdrawals; headingInformation.innerHTML = withdrawalsActions[0];}
            else if(selectedInput === 3) {var getValues = cardTransfer; headingInformation.innerHTML = cardTransferActions[0];}
            else if(selectedInput === 4) {var getValues = pos; headingInformation.innerHTML = posActions[0];}
            else if(selectedInput === 5) {var getValues = airtimeAndBills; headingInformation.innerHTML = airtimeAndBillsActions[0];}
            else if(selectedInput === 6) {var getValues = savings; headingInformation.innerHTML = savingsActions[0];}
            else if(selectedInput === 7) {var getValues = loans; headingInformation.innerHTML = loansActions[0]}
            else {var getValues = frontOffice; headingInformation.innerHTML = frontOfficeActions[0]}

            inputSteps.innerHTML = "";
            accordion.innerHTML = "";

            if(selectedInput > 0){
            // Clear existing options in the message dropdown and header
            selectOptions.innerHTML = "";
            // headingInformation.innerHTML = heading;
            
            // Add a default option
            var defaultOption = document.createElement("option");
            defaultOption.value = "";
            defaultOption.text = "Select an issue";
            selectOptions.appendChild(defaultOption);

            // Populate the options dropdown based on the selected category
           for (var i = 0; i < getValues.length; i++) {
                        var listOption = document.createElement("option");
                        listOption.value = getValues[i];
                        listOption.text = getValues[i];
                        selectOptions.appendChild(listOption);                   
                }           

            // Enable the options dropdown
            selectOptions.disabled = false;
              }
        });

        // Event listener for the category dropdown
        selectOptions.addEventListener("change", function () {
          inputSteps.innerHTML = "";
            accordion.innerHTML = "";
          var selectedOption = selectOptions.selectedIndex;
          
let actionSteps = [];

        if(selectedOption === 1) {
          actionSteps = transferSteps;
           inputSteps.innerHTML = "Action Steps";
        } else if(selectedOption === 2){
          actionSteps = kycOnboardingSteps;
          inputSteps.innerHTML = "Action Steps";
        }

actionSteps.forEach((step, index) => {
  const stepContent = step[0];
  const stepNumber = index + 1;
  const stepTitle = `Step #${stepNumber}`;

  const accordionItem = `
      <div class="accordion-item">
          <h2 class="accordion-header" id="flush-heading${stepNumber}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${stepNumber}" aria-expanded="false" aria-controls="flush-collapse${stepNumber}">
                  ${stepTitle}
              </button>
          </h2>
          <div id="flush-collapse${stepNumber}" class="accordion-collapse collapse" aria-labelledby="flush-heading${stepNumber}" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">${stepContent}</div>
          </div>
      </div>
  `;

  accordion.innerHTML += accordionItem;
});

         
        });

});