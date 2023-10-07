document.addEventListener("DOMContentLoaded", function () {
const hausaResponses = [`BOs/BRMs with complaints about Account issues or Transaction complaints for escalation.`, 
`BOs/BRMs with wallet account statement/username request.`,
`Follow up response account statement/username has been sent to bos official mail`,
'Response to manage a Bo on withdrawal/transfer downtime (After general update has been broadcasted).',
`Follow up response when account statement/username was sent to the BOs official email address.`,
`Response to manage a Bo on withdrawal/transfer downtime (After general update has been broadcasted).`,
`Response for Bo if his/her profile has been placed on PND by the Brm.`,
`Response for Bo if his/her profile has been placed on PND by the Brm.`,
`Response to BRMs for kyc approval request.`,
`Response to BRMs for terminal retrieval request/terminal complaint.`];

const hausaResponseDetails = [`Mungode da tuntubar Moniepoint. 

Muna masu bada haquri game da wannan tangardar da aka haifar.
Mun karbi buqakatar/korafi ka/ki kuma zamu baka bayani nan ba da jimawa ba.
Nagode.`,
    `RESPONSE FOR BRMs

    Mungode da tuntubar Moniepoint.
    
    Don Allah muna mai sanar maka/miki cewa  za'a tura zuwa ga email din BO da akayi rijista damu kamar yadda aka bukata.
    Nagode.
    
    RESPONSE FOR BOs
    
    Mungode da tuntubar Moniepoint.
    Muna mai sanar maka/miki cewa  za'a tura zuwa ga email din da kayi/kikayi rijista da Moniepoint kamar yadda aka bukata.
    Nagode.`,
    `RESPONSE FOR BRMs

    Mungode da haqurin ka.
    
    Muna mai sanar maka/miki cewa antura bayanan  da ka/kika nema ta email din BO da akayi rijista da Moniepoint, don Allah ace BO ya duba domin tabbatar wa.
    Mungode da zabar  Moniepoint.
    
    RESPONSE FOR BOs
    
    Mungode da haqurin ka/ki.
    
    Muna mai sanar maka/miki cewa antura bayanan  da aka nema ta email din da akayi rijista da Moniepoint, don Allah ka/ki duba domin tabbatar wa.
    Mungode da zabar Moniepoint.`,
    `Mungode da tuntubar Moniepoint.

    Muna mai bada haquri game da tangardar da aka haifar.
    Don Allah kasani ahalin yanzu muna aiki don tabbatar an magance matsalar nan ba da jimawa ba.
    
    Zamu sanar da kai/ke da zarar an kammala gyara.
    Nagode.
    
    
    Alternative follow up response to manage a Bo on withdrawal/transfer downtime (After general update has been broadcasted).
    
    Mungode da tuntubar Moniepoint.
    
    Muna mai bada haquri game da tangardar da aka haifar.
    Don Allah ka/ki sani ahalin yanzu muna aiki tuquru don tabbatar an magance wannan matsalar nan ba da jimawa ba.
    
    Zamu sanar da sa zaran aka gama gyarawa. 
    Nagode.`,
    `Nagode da bayanan da ka/kika bani.

    Don Allah ka/ki sani wannan za'a tura zuwa gaba kuma za'a bayar da lambar tikitin wanda ke nuna qorafin ka/ki, Zaka iya dawowa garemu bayan wani lokaci da wannan lambar don samun ba'asi akan qorafin ka/ki.
    
    Nagode.`,
    `Mungode da juriya da hakurin ka

    Mun karbi korafin ka/ki ta ticket number #654321. Kayi mana tuni da ticket number domin baka martani ko matsaya akan wannan korafin naka.
    Mungode da zaban Moniepoint.`,
    `Mungode da tuntubar Moniepoint.

    Muna san sanar maka da chewar wallet naka na kan LIEN (PND) ta wajen Business Relationship Manager BRM  naka waton (manajan dangantakar kasuwancin) ka domin daga ko cire wannan Kuntatawar. Domin duba bayanan tuntuɓar manajan dangantakar kasuwancin ku , za a shiga cikin dandalin ku na kan waya waton App, ana iya gani akan dashboard ɗin ku. Sai kuyi amfani da lambar wayar sa ko email domin kiran sa.
    Mungode da zaban Moniepoint.`,
    `RESPONSES FOR BRMs

    Mungode da tuntubar Moniepoint 
    
    Ka tuntubi State Coordinator waton (Manajar Jaha) domin ya tura sakon email zuwa ga compliance@moniepoint.com domin karin limit waton iyaka da asusu ajiyarka zata iya.
    sakon ya dauki bayanin mai kasuwancin da dalilin buƙatar ƙara iyaka.
    
    Mungode
    
    
    RESPONSE FOR BOs
    
    Mungode da tuntubar Moniepoint
    
    Ka tuntubi manajan dangantakar kasuwancin ka waton (BRM) domin tuntubar State Coordinator waton ( Manager jaha) domin tura sako email zuwa compliance@moniepoint.com domin bukatar kara iyaka. Sakon ya dauki bayanin mai kasuwancin da dalilin buƙatar ƙara iyaka.`,
    `Mungode da tuntubar Moniepoint.
    Muna sanar daku cewa duk buƙatun amincewar/koke ta KYC za a shigar da su ta hanyar yanar gizon Zendesk.kabi matakan/hanyoyin da ke ƙasa:
    
    1.	Ka taba adiresin yanar gizon https://support.moniepoint.com/hc/en-us/requests/new
    2.	Kasaka adiresin email naka na BRM na Moniepoint mai @moniepoint.com 
    3.	Batu waton (Subject) ka rubuta KYC APPROVAL REQUEST 
    4.	A wajen “ Nature of Moniepoint Enquiry”, kataba domin abubuwan zabi su fito maka sai ka zabi KYC ISSUES
    5.	A wajen description waton bayani, kabada bayanan BO, Business name nasa, Email address, Sunan da ke kan BVN da BVN lamba
    6.	En a kwai bayanin da zaka dauko kayi attaching, ka taba “Add File” sai ka nemi bayanin da kake san daurawa ka taba shi domin selecting sai ka daura. Zaka ga ya hau.
    7.	Ka taba submit request domin tura wannan request naka
    
    Za’a tura maka tsako bayan ka tura domin tabbabtar maka cewar a samu wanna korafin naka kuma anfara aiki aka.
    
    Mungode da zabar Moniepoint Inc a matsayin abokin hurdar ku.`,
    `Mungode da tuntubar Moniepoint pangaren taimako,

    Muna sanar daku cewa duk buƙatun Sauke terminal/ko du wani abu daya shafi terminal za a shigar da su ta hanyar yanar gizon Zendesk kabi matakai/hanyoyin da ke ƙasa:
    
    1.	Ka taba adiresin yanar gizon https://support.moniepoint.com/hc/en-us/requests/new
    2.	Kasaka adiresin email naka na BRM na Moniepoint mai @moniepoint.com
    3.	Batu waton (Subject) ka rubuta Terminal Retrieval Request, Ko Terminal issues ko Terminal complains
    4.	A wajen “ Nature of Moniepoint Enquiry”, kataba domin abubuwan zabi su fito maka sai ka zabi Terminal
    5.	A wajen description waton bayani, kabada bayanan Bo da bayanan terminal nasa Business name nasa, e.g terminal serial number, terminal id da brm username.
    6.	En a kwai bayanin da zaka dauko kayi attaching, ka taba “Add File” sai ka nemi bayanin da kake san daurawa ka taba shi domin selecting sai ka daura. Zaka ga ya hau.
    7.	Ka taba submit request domin tura wannan request naka
    
    Za’a tura maka tsako bayan ka tura domin tabbabtar maka cewar a samu wanna korafin naka kuma anfara aiki aka.
    
    Mungode da zabar Moniepoint Inc a matsayin abokin hurdar ku.
    `];

// Get a reference of the selected element
const hausaMacrosInputs = document.getElementById("hausa-macros");
const hausaMacrosDetails = document.getElementById("hausa-macros-area");

// Add a default option
const defaultOptions = document.createElement("option");
defaultOptions.value = "";
defaultOptions.text = "Select a response";
hausaMacrosInputs.appendChild(defaultOptions);

// Loop through the array and create an option for each response
hausaResponses.forEach(input => {
    const option = document.createElement("option");
    option.value = input;  // Set the option's value
    option.text = input;   // Set the option's display text
    hausaMacrosInputs.appendChild(option);  // Add the option to the select element
});

 // Event listener for the category dropdown
 hausaMacrosInputs.addEventListener("change", function () {
    var selectedInput = hausaMacrosInputs.selectedIndex;
    if(selectedInput === 0) {hausaMacrosDetails.innerHTML = "Please make a selection above please!";}
    else if(selectedInput === 1) {hausaMacrosDetails.innerHTML = hausaResponseDetails[0];}
    else if(selectedInput === 2) {hausaMacrosDetails.innerHTML = hausaResponseDetails[1];}
    else if(selectedInput === 3) {hausaMacrosDetails.innerHTML = hausaResponseDetails[2];}
    else if(selectedInput === 4) {hausaMacrosDetails.innerHTML = hausaResponseDetails[3];}
    else if(selectedInput === 5) {hausaMacrosDetails.innerHTML = hausaResponseDetails[4];}
    else if(selectedInput === 6) {hausaMacrosDetails.innerHTML = hausaResponseDetails[5];}
    else if(selectedInput === 7) {hausaMacrosDetails.innerHTML = hausaResponseDetails[6];}
    else if(selectedInput === 8) {hausaMacrosDetails.innerHTML = hausaResponseDetails[7];}
    else if(selectedInput === 9) {hausaMacrosDetails.innerHTML = hausaResponseDetails[8];}
    else if(selectedInput === 10) {hausaMacrosDetails.innerHTML = hausaResponseDetails[9];}
    else if(selectedInput === 11) {hausaMacrosDetails.innerHTML = hausaResponseDetails[10];}

});

});