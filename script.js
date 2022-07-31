var nameMsg = `Iltimos ismingizni kiriting`;
var welcomeMsg = `Hush kelibsiz`;
var confirmMsg = `So'rovnomani to'ldirishni hohlaysizmi?`
var lastNameMsg = `Familyanigzni kiriting`;
var ageMsg = `Yoshingizni kiriting (raqamda)`;
var sexMsg = `Jinsingizni kiriting`;
var addresMsg = `Yashash manzilingizni kiriting`;
var jobMsg = `Kasbingizni kiriting`;
var emailMsg = `Elektron pochtangiz manzilini kiriting`;
var phoneNumberMsg = `Telefon raqamingizni kiriting (raqamda)`;
var byeMsg = `So'rovnomani to'ldirganingiz uchun rahmat`;

var ignoreMsg = `Hohlamasangiz mayli(`;
var retryMsg = `Malumot to'gri kiritilmadi! Iltimos qaytadan urunib ko'ring!`;

var statusInd = true;
var statusMain = true;

var reloadPage = function() {
  setTimeout("location.reload(true);"); // Reload the page
}
var namePrompt = prompt(nameMsg.trim());

if (namePrompt === ''|| namePrompt === null || namePrompt === undefined || Number(namePrompt) || namePrompt.indexOf(' ') >= 0 || namePrompt.length < 2 || namePrompt.length > 15) {
  alert(nameMsg);
  reloadPage();
  var statusMain = false;
} else {
  confirmMsg = confirm(`${welcomeMsg} ${namePrompt.trim()} ${confirmMsg}`);
  if (confirmMsg === false) {
    statusInd = false;
  } else {
    lastNameMsg = prompt(lastNameMsg);
    if (lastNameMsg === ''|| lastNameMsg === null || lastNameMsg === undefined || Number(lastNameMsg) || lastNameMsg.indexOf(' ') >= 0 || lastNameMsg.length < 2 || lastNameMsg.length > 15) {
      alert(retryMsg);
      reloadPage();
      var statusMain = false;
    } else {
      ageMsg = prompt(ageMsg);
      if (ageMsg === '' || ageMsg === null || ageMsg === undefined || isNaN(ageMsg) || ageMsg.indexOf(' ') >= 0 || ageMsg.length < 0 || ageMsg.length > 3) {
        alert(retryMsg);
        reloadPage();
        var statusMain = false;
      } else {
        sexMsg = prompt(sexMsg);
        if (sexMsg === ''|| sexMsg === null || sexMsg === undefined || Number(sexMsg) || sexMsg.indexOf(' ') >= 0 || sexMsg.length < 2 || sexMsg.length > 8) {
          alert(retryMsg);
          reloadPage();
          var statusMain = false;
        } else {
          addresMsg = prompt (addresMsg);
          if (addresMsg === ''|| addresMsg === null || addresMsg === undefined || Number(addresMsg) || addresMsg.length < 2 || addresMsg.length > 15) {
            alert(retryMsg);
            reloadPage();
            var statusMain = false;
          } else {
            jobMsg = prompt(jobMsg);
            if (jobMsg === ''|| jobMsg === null || jobMsg === undefined || Number(jobMsg) || jobMsg.indexOf(' ') >= 0 || jobMsg.length < 2 || jobMsg.length > 10) {
              alert(retryMsg);
              reloadPage();
              var statusMain = false;
            } else {
              emailMsg = prompt(emailMsg);
              if (emailMsg === ''|| emailMsg === null || emailMsg === undefined || emailMsg.indexOf(' ') >= 0 || emailMsg.length < 2 || emailMsg.length > 25) {
                alert(retryMsg);
                reloadPage();
                var statusMain = false;
              } else {
                phoneNumberMsg = prompt(phoneNumberMsg);
                if (phoneNumberMsg === '' || phoneNumberMsg === null || phoneNumberMsg === undefined || isNaN(phoneNumberMsg) || phoneNumberMsg.indexOf(' ') >= 0 || phoneNumberMsg.length < 7 || phoneNumberMsg.length > 14) {
                  alert(retryMsg);
                  reloadPage();
                  var statusMain = false;
                } else {
                  alert(`${byeMsg} ${namePrompt.trim()}`);
                  console.log(`Foydalanuvchi haqida umumuiy ma'lumot:
                  
Foydalanuvchining ismi: ${namePrompt}

${namePrompt}ning familiyasi: ${lastNameMsg.trim()}
--------------------
${namePrompt}ning yoshi: ${ageMsg}
--------------------
${namePrompt}ning jinsi: ${sexMsg}
--------------------
${namePrompt}ning manzili: ${addresMsg.trim()}
--------------------
${namePrompt}ning kasbi: ${jobMsg}
--------------------
${namePrompt}ning elektron pochta manzili: ${emailMsg}
--------------------
${namePrompt}ning telefon raqami: ${phoneNumberMsg}}`)
                }
              }
            }
          }
        }
      }
    }
  }
}

// START CREATING & STYLING THE PAGE
var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = '#4eb1b3';
body.style.fontFamily = '"Helvetica Neue", Helvetica, Arial, sans-serif';
body.style.color = '#333';
body.style.lineHeight = '1.42857143';
body.style.margin = '0';
body.style.padding = '0';
body.style.overflow = 'hidden';
if (statusMain === true) {
  body.style.display = 'block';
} else {
  body.style.display = 'none';
}

var elContainer = document.createElement('div');
body.appendChild(elContainer);
elContainer.style.maxWidth = '1250px';
elContainer.style.margin = '0 auto';
elContainer.style.marginTop = '40px';
elContainer.style.padding = '0 10px';
elContainer.style.display = 'flex';
elContainer.style.justifyContent = 'center';
elContainer.style.alignItems = 'center';
elContainer.style.height = '100vh';

var elContainerInner = document.createElement('div');
elContainer.appendChild(elContainerInner);
elContainerInner.style.display = 'flex';
elContainerInner.style.justifyContent = 'center';
elContainerInner.style.alignItems = 'center';

var elContainerMain = document.createElement('div');
elContainerInner.appendChild(elContainerMain);

var elContainerMainInner = document.createElement('div');  //*
elContainerMain.appendChild(elContainerMainInner);
elContainerMainInner.style.display = 'flex';
elContainerMainInner.style.justifyContent = 'center';
elContainerMainInner.style.alignItems = 'center';

var elStatusBarStatusImg = document.createElement('img');
elContainerMainInner.appendChild(elStatusBarStatusImg);
if (statusInd === true) {
  elStatusBarStatusImg.src = 'img/fireworks.png';
} else {
  elStatusBarStatusImg.src = 'img/secret-svgrepo-com.svg';
}
elStatusBarStatusImg.style.width = '55px';
elStatusBarStatusImg.style.height = 'auto';
elStatusBarStatusImg.style.marginRight = '10px';

var elContainerInnerTitle = document.createElement('h2');
elContainerMainInner.appendChild(elContainerInnerTitle);
if (statusInd === true) {
  elContainerInnerTitle.textContent = 'Hammasi Ajoyib!';
} else {
  elContainerInnerTitle.textContent = 'Hohlamasangiz mayli!';
}
elContainerInnerTitle.style.fontSize = '2.5em';
elContainerInnerTitle.style.margin = '0';
elContainerInnerTitle.style.textShadow = '0 0 7px #d6d6d6';
elContainerInnerTitle.style.color = '#fff3e0';    //^

var elMain = document.createElement('div');
elContainerMain.appendChild(elMain);

var elMainTitle = document.createElement('h4');
elMain.appendChild(elMainTitle);
if (statusInd === true) {
  elMainTitle.textContent = 'Malumotlaringiz yuborishga tayyor, iltimos tekshirib oling!';
} else {
  elMainTitle.textContent = 'Sahifani qayta yuklab so\'rovnomani to\'ldirishingiz mumkin!';
}
elMainTitle.style.textAlign = 'center';
elMainTitle.style.marginTop = '10px';
elMainTitle.style.marginBottom = '9px';
elMainTitle.style.fontSize = '1.2em';
elMainTitle.style.color = '#e8edeb';

var elMainForm = document.createElement('form');
elMain.appendChild(elMainForm);
elMainForm.action = 'https://echo.htmlacademy.ru';
elMainForm.method = 'post';
if (statusInd === true) {
  elMainForm.style.display = 'block';
} else {
  elMainForm.style.display = 'none';
}

// START VISUALLY HIDDEN INPUTS

var elUserNameInput = document.createElement('input');
elMainForm.appendChild(elUserNameInput);
elUserNameInput.type = 'text';
elUserNameInput.name = 'user-name';
elUserNameInput.value = `${namePrompt}`;
elUserNameInput.style.position = 'absolute';
elUserNameInput.style.visibility = 'hidden';

var elUserLastNameInput = document.createElement('input');
elMainForm.appendChild(elUserLastNameInput);
elUserLastNameInput.type = 'text';
elUserLastNameInput.name = 'user-last-name';
elUserLastNameInput.value = `${lastNameMsg}`;
elUserLastNameInput.style.position = 'absolute';
elUserLastNameInput.style.visibility = 'hidden';

var elUserAge = document.createElement('input');
elMainForm.appendChild(elUserAge);
elUserAge.type = 'text';
elUserAge.name = 'user-age';
elUserAge.value = `${ageMsg}`;
elUserAge.style.position = 'absolute';
elUserAge.style.visibility = 'hidden';

var elUserSex = document.createElement('input');
elMainForm.appendChild(elUserSex);
elUserSex.type = 'text';
elUserSex.name = 'user-sex';
elUserSex.value =  `${sexMsg}`;
elUserSex.style.position = 'absolute';
elUserSex.style.visibility = 'hidden';

var elUserNameAddres = document.createElement('input');
elMainForm.appendChild(elUserNameAddres);
elUserNameAddres.type = 'text';
elUserNameAddres.name = 'user-adress';
elUserNameAddres.value = `${addresMsg}`;
elUserNameAddres.style.position = 'absolute';
elUserNameAddres.style.visibility = 'hidden';

var elUserJob = document.createElement('input');
elMainForm.appendChild(elUserJob);
elUserJob.type = 'text';
elUserJob.name = 'user-job';
elUserJob.value = `${jobMsg}`;
elUserJob.style.position = 'absolute';
elUserJob.style.visibility = 'hidden';

var elUserMail = document.createElement('input');
elMainForm.appendChild(elUserMail);
elUserMail.type = 'text';
elUserMail.name = 'user-mail';
elUserMail.value = `${emailMsg}`;
elUserMail.style.position = 'absolute';
elUserMail.style.visibility = 'hidden';

var elUserPhoneNumber = document.createElement('input');
elMainForm.appendChild(elUserPhoneNumber);
elUserPhoneNumber.type = 'text';
elUserPhoneNumber.name = 'user-phone-number';
elUserPhoneNumber.value = `${phoneNumberMsg}`;
elUserPhoneNumber.style.position = 'absolute';
elUserPhoneNumber.style.visibility = 'hidden';

// END VISUALLY HIDDEN INPUTS

var elFormFirstInner = document.createElement('div');
elMainForm.appendChild(elFormFirstInner);
elFormFirstInner.style.display = 'flex';
elFormFirstInner.style.justifyContent = 'space-between';
elFormFirstInner.style.alignItems = 'center';
elFormFirstInner.style.position = 'relative';

var elFormFirstInnerBox = document.createElement('div'); //8
elFormFirstInner.appendChild(elFormFirstInnerBox);

var elFormFirstInnerLeftInputTitle = document.createElement('h4');
elFormFirstInnerBox.appendChild(elFormFirstInnerLeftInputTitle);
elFormFirstInnerLeftInputTitle.textContent = 'Foydalanuvchi ismi';
elFormFirstInnerLeftInputTitle.style.margin = '4px 0';
elFormFirstInnerLeftInputTitle.style.fontSize = '1.1em';
elFormFirstInnerLeftInputTitle.style.color = '#fff3e0';
elFormFirstInnerLeftInputTitle.style.textShadow = '0 0 7px #d6d6d6';
elFormFirstInnerLeftInputTitle.style.fontWeight = 'normal';


var elFormFirstInnerLeftInput = document.createElement('input');
elFormFirstInnerBox.appendChild(elFormFirstInnerLeftInput);
elFormFirstInnerLeftInput.type = 'text';
elFormFirstInnerLeftInput.value = `${namePrompt}`;
elFormFirstInnerLeftInput.style.backgroundColor = 'transparent';
elFormFirstInnerLeftInput.style.color = '#f4f6f5';
elFormFirstInnerLeftInput.style.border = 'none';
elFormFirstInnerLeftInput.style.borderBottom = '1px solid #fff3e0';
elFormFirstInnerLeftInput.style.borderTop = '1px solid #fff3e0';
elFormFirstInnerLeftInput.style.fontSize = '1em';
elFormFirstInnerLeftInput.disabled = true;
elFormFirstInnerLeftInput.style.boxShadow = '0 0 7px #d6d6d6';  //^

var elFormFirstInnerBox = document.createElement('div'); //9
elFormFirstInner.appendChild(elFormFirstInnerBox);

var elFormFirstInnerRightInputTitle = document.createElement('h4');
elFormFirstInnerBox.appendChild(elFormFirstInnerRightInputTitle);
elFormFirstInnerRightInputTitle.textContent = 'Foydalanuvchi Familiyasi';
elFormFirstInnerRightInputTitle.style.margin = '4px 0';
elFormFirstInnerRightInputTitle.style.fontSize = '1.1em';
elFormFirstInnerRightInputTitle.style.color = '#fff3e0';
elFormFirstInnerRightInputTitle.style.textShadow = '0 0 7px #d6d6d6';
elFormFirstInnerRightInputTitle.style.fontWeight = 'normal';


var elFormFirstInnerRightInput = document.createElement('input');
elFormFirstInnerBox.appendChild(elFormFirstInnerRightInput);
elFormFirstInnerRightInput.type = 'text';
elFormFirstInnerRightInput.value = `${lastNameMsg}`;
elFormFirstInnerRightInput.style.backgroundColor = 'transparent';
elFormFirstInnerRightInput.style.color = '#f4f6f5';
elFormFirstInnerRightInput.style.border = 'none';
elFormFirstInnerRightInput.style.borderBottom = '1px solid #fff3e0';
elFormFirstInnerRightInput.style.borderTop = '1px solid #fff3e0';
elFormFirstInnerRightInput.style.fontSize = '1em';
elFormFirstInnerRightInput.disabled = true;
elFormFirstInnerRightInput.style.boxShadow = '0 0 7px #d6d6d6';  //^

var elFirstLine = document.createElement('span');
elFormFirstInner.appendChild(elFirstLine);
elFirstLine.style.position = 'absolute';
elFirstLine.style.height = '1px';
elFirstLine.style.width = '100%';
elFirstLine.style.backgroundColor = '#fff3e0';
elFirstLine.style.marginTop = '80px';

// SECOND FORMBOX

var elFormSecondInner = document.createElement('div');
elMainForm.appendChild(elFormSecondInner);
elFormSecondInner.style.display = 'flex';
elFormSecondInner.style.justifyContent = 'space-between';
elFormSecondInner.style.alignItems = 'center';
elFormSecondInner.style.position = 'relative';
elFormSecondInner.style.marginTop = '20px';

var elFormSecondInnerBox = document.createElement('div'); //8
elFormSecondInner.appendChild(elFormSecondInnerBox);

var elFormFirstInnerLeftInputTitle = document.createElement('h4');
elFormSecondInnerBox.appendChild(elFormFirstInnerLeftInputTitle);
elFormFirstInnerLeftInputTitle.textContent = 'Foydalanuvchi yoshi';
elFormFirstInnerLeftInputTitle.style.margin = '4px 0';
elFormFirstInnerLeftInputTitle.style.fontSize = '1.1em';
elFormFirstInnerLeftInputTitle.style.color = '#fff3e0';
elFormFirstInnerLeftInputTitle.style.textShadow = '0 0 7px #d6d6d6';
elFormFirstInnerLeftInputTitle.style.fontWeight = 'normal';


var elFormFirstInnerLeftInput = document.createElement('input');
elFormSecondInnerBox.appendChild(elFormFirstInnerLeftInput);
elFormFirstInnerLeftInput.type = 'text';
elFormFirstInnerLeftInput.value = `${ageMsg}`;
elFormFirstInnerLeftInput.style.backgroundColor = 'transparent';
elFormFirstInnerLeftInput.style.color = '#f4f6f5';
elFormFirstInnerLeftInput.style.border = 'none';
elFormFirstInnerLeftInput.style.borderBottom = '1px solid #fff3e0';
elFormFirstInnerLeftInput.style.borderTop = '1px solid #fff3e0';
elFormFirstInnerLeftInput.style.fontSize = '1em';
elFormFirstInnerLeftInput.disabled = true;
elFormFirstInnerLeftInput.style.boxShadow = '0 0 7px #d6d6d6';  //^

var elFormSecondInnerBox = document.createElement('div'); //9
elFormSecondInner.appendChild(elFormSecondInnerBox);

var elFormFirstInnerRightInputTitle = document.createElement('h4');
elFormSecondInnerBox.appendChild(elFormFirstInnerRightInputTitle);
elFormFirstInnerRightInputTitle.textContent = 'Foydalanuvchi Jinsi';
elFormFirstInnerRightInputTitle.style.margin = '4px 0';
elFormFirstInnerRightInputTitle.style.fontSize = '1.1em';
elFormFirstInnerRightInputTitle.style.color = '#fff3e0';
elFormFirstInnerRightInputTitle.style.textShadow = '0 0 7px #d6d6d6';
elFormFirstInnerRightInputTitle.style.fontWeight = 'normal';


var elFormFirstInnerRightInput = document.createElement('input');
elFormSecondInnerBox.appendChild(elFormFirstInnerRightInput);
elFormFirstInnerRightInput.type = 'text';
elFormFirstInnerRightInput.value = `${sexMsg}`;
elFormFirstInnerRightInput.style.backgroundColor = 'transparent';
elFormFirstInnerRightInput.style.color = '#f4f6f5';
elFormFirstInnerRightInput.style.border = 'none';
elFormFirstInnerRightInput.style.borderBottom = '1px solid #fff3e0';
elFormFirstInnerRightInput.style.borderTop = '1px solid #fff3e0';
elFormFirstInnerRightInput.style.fontSize = '1em';
elFormFirstInnerRightInput.disabled = true;
elFormFirstInnerRightInput.style.boxShadow = '0 0 7px #d6d6d6';  //^

var elFirstLine = document.createElement('span');
elFormSecondInner.appendChild(elFirstLine);
elFirstLine.style.position = 'absolute';
elFirstLine.style.height = '1px';
elFirstLine.style.width = '100%';
elFirstLine.style.backgroundColor = '#fff3e0';
elFirstLine.style.marginTop = '80px';

// THIRD FORMBOX

var elFormSecondInner = document.createElement('div');
elMainForm.appendChild(elFormSecondInner);
elFormSecondInner.style.display = 'flex';
elFormSecondInner.style.justifyContent = 'space-between';
elFormSecondInner.style.alignItems = 'center';
elFormSecondInner.style.position = 'relative';
elFormSecondInner.style.marginTop = '20px';

var elFormSecondInnerBox = document.createElement('div'); //8
elFormSecondInner.appendChild(elFormSecondInnerBox);

var elFormFirstInnerLeftInputTitle = document.createElement('h4');
elFormSecondInnerBox.appendChild(elFormFirstInnerLeftInputTitle);
elFormFirstInnerLeftInputTitle.textContent = 'Foydalanuvchi manzili';
elFormFirstInnerLeftInputTitle.style.margin = '4px 0';
elFormFirstInnerLeftInputTitle.style.fontSize = '1.1em';
elFormFirstInnerLeftInputTitle.style.color = '#fff3e0';
elFormFirstInnerLeftInputTitle.style.textShadow = '0 0 7px #d6d6d6';
elFormFirstInnerLeftInputTitle.style.fontWeight = 'normal';


var elFormFirstInnerLeftInput = document.createElement('input');
elFormSecondInnerBox.appendChild(elFormFirstInnerLeftInput);
elFormFirstInnerLeftInput.type = 'text';
elFormFirstInnerLeftInput.value = `${addresMsg}`;
elFormFirstInnerLeftInput.style.backgroundColor = 'transparent';
elFormFirstInnerLeftInput.style.color = '#f4f6f5';
elFormFirstInnerLeftInput.style.border = 'none';
elFormFirstInnerLeftInput.style.borderBottom = '1px solid #fff3e0';
elFormFirstInnerLeftInput.style.borderTop = '1px solid #fff3e0';
elFormFirstInnerLeftInput.style.fontSize = '1em';
elFormFirstInnerLeftInput.disabled = true;
elFormFirstInnerLeftInput.style.boxShadow = '0 0 7px #d6d6d6';  //^

var elFormSecondInnerBox = document.createElement('div'); //9
elFormSecondInner.appendChild(elFormSecondInnerBox);

var elFormFirstInnerRightInputTitle = document.createElement('h4');
elFormSecondInnerBox.appendChild(elFormFirstInnerRightInputTitle);
elFormFirstInnerRightInputTitle.textContent = 'Foydalanuvchi Kasbi';
elFormFirstInnerRightInputTitle.style.margin = '4px 0';
elFormFirstInnerRightInputTitle.style.fontSize = '1.1em';
elFormFirstInnerRightInputTitle.style.color = '#fff3e0';
elFormFirstInnerRightInputTitle.style.textShadow = '0 0 7px #d6d6d6';
elFormFirstInnerRightInputTitle.style.fontWeight = 'normal';


var elFormFirstInnerRightInput = document.createElement('input');
elFormSecondInnerBox.appendChild(elFormFirstInnerRightInput);
elFormFirstInnerRightInput.type = 'text';
elFormFirstInnerRightInput.value = `${jobMsg}`;
elFormFirstInnerRightInput.style.backgroundColor = 'transparent';
elFormFirstInnerRightInput.style.color = '#f4f6f5';
elFormFirstInnerRightInput.style.border = 'none';
elFormFirstInnerRightInput.style.borderBottom = '1px solid #fff3e0';
elFormFirstInnerRightInput.style.borderTop = '1px solid #fff3e0';
elFormFirstInnerRightInput.style.fontSize = '1em';
elFormFirstInnerRightInput.disabled = true;
elFormFirstInnerRightInput.style.boxShadow = '0 0 7px #d6d6d6';  //^

var elFirstLine = document.createElement('span');
elFormSecondInner.appendChild(elFirstLine);
elFirstLine.style.position = 'absolute';
elFirstLine.style.height = '1px';
elFirstLine.style.width = '100%';
elFirstLine.style.backgroundColor = '#fff3e0';
elFirstLine.style.marginTop = '80px';

// FOURTH FORMBOX

var elFormSecondInner = document.createElement('div');
elMainForm.appendChild(elFormSecondInner);
elFormSecondInner.style.alignItems = 'center';
elFormSecondInner.style.position = 'relative';
elFormSecondInner.style.marginTop = '15px';

var elFormContactTitle = document.createElement('h4');
elFormSecondInner.appendChild(elFormContactTitle);
elFormContactTitle.textContent = 'Foydalanuvchi bilan bog\'lanish';
elFormContactTitle.style.marginTop = '0';
elFormContactTitle.style.marginBottom = '3px';
elFormContactTitle.style.textAlign = 'center';
elFormContactTitle.style.fontSize = '1em';
elFormContactTitle.style.color = '#fff3e0';
elFormContactTitle.style.textShadow = '0 0 7px #d6d6d6';
elFormContactTitle.style.fontWeight = 'normal';
elFormContactTitle.style.borderBottom = '1px solid #fff3e0';

var elFormSecondBox = document.createElement('div');
elFormSecondInner.appendChild(elFormSecondBox);
elFormSecondBox.style.display = 'flex';
elFormSecondBox.style.justifyContent = 'space-between';

var elFormSecondInnerBox = document.createElement('div'); //8
elFormSecondBox.appendChild(elFormSecondInnerBox);

var elFormFirstInnerLeftInputTitle = document.createElement('h4');
elFormSecondInnerBox.appendChild(elFormFirstInnerLeftInputTitle);
elFormFirstInnerLeftInputTitle.textContent = 'Foydalanuvchi pochtasi';
elFormFirstInnerLeftInputTitle.style.margin = '4px 0';
elFormFirstInnerLeftInputTitle.style.fontSize = '1.1em';
elFormFirstInnerLeftInputTitle.style.color = '#fff3e0';
elFormFirstInnerLeftInputTitle.style.textShadow = '0 0 7px #d6d6d6';
elFormFirstInnerLeftInputTitle.style.fontWeight = 'normal';


var elFormFirstInnerLeftInput = document.createElement('input');
elFormSecondInnerBox.appendChild(elFormFirstInnerLeftInput);
elFormFirstInnerLeftInput.type = 'text';
elFormFirstInnerLeftInput.value = `${phoneNumberMsg}`;
elFormFirstInnerLeftInput.style.backgroundColor = 'transparent';
elFormFirstInnerLeftInput.style.color = '#f4f6f5';
elFormFirstInnerLeftInput.style.border = 'none';
elFormFirstInnerLeftInput.style.borderBottom = '1px solid #fff3e0';
elFormFirstInnerLeftInput.style.borderTop = '1px solid #fff3e0';
elFormFirstInnerLeftInput.style.fontSize = '1em';
elFormFirstInnerLeftInput.disabled = true;
elFormFirstInnerLeftInput.style.boxShadow = '0 0 7px #d6d6d6';  //^

var elFormSecondInnerBox = document.createElement('div'); //9
elFormSecondBox.appendChild(elFormSecondInnerBox);

var elFormFirstInnerRightInputTitle = document.createElement('h4');
elFormSecondInnerBox.appendChild(elFormFirstInnerRightInputTitle);
elFormFirstInnerRightInputTitle.textContent = 'Foydalanuvchi raqami';
elFormFirstInnerRightInputTitle.style.margin = '4px 0';
elFormFirstInnerRightInputTitle.style.fontSize = '1.1em';
elFormFirstInnerRightInputTitle.style.color = '#fff3e0';
elFormFirstInnerRightInputTitle.style.textShadow = '0 0 7px #d6d6d6';
elFormFirstInnerRightInputTitle.style.fontWeight = 'normal';


var elFormFirstInnerRightInput = document.createElement('input');
elFormSecondInnerBox.appendChild(elFormFirstInnerRightInput);
elFormFirstInnerRightInput.type = 'text';
elFormFirstInnerRightInput.value = `${phoneNumberMsg}`;
elFormFirstInnerRightInput.style.backgroundColor = 'transparent';
elFormFirstInnerRightInput.style.color = '#f4f6f5';
elFormFirstInnerRightInput.style.border = 'none';
elFormFirstInnerRightInput.style.borderBottom = '1px solid #fff3e0';
elFormFirstInnerRightInput.style.borderTop = '1px solid #fff3e0';
elFormFirstInnerRightInput.style.fontSize = '1em';
elFormFirstInnerRightInput.disabled = true;
elFormFirstInnerRightInput.style.boxShadow = '0 0 7px #d6d6d6';  //^

var elFirstLine = document.createElement('span');
elFormSecondBox.appendChild(elFirstLine);
elFirstLine.style.position = 'absolute';
elFirstLine.style.height = '1px';
elFirstLine.style.width = '100%';
elFirstLine.style.backgroundColor = '#fff3e0';
elFirstLine.style.marginTop = '70px';

var elBottomBtnBox = document.createElement('div');
elFormSecondInner.appendChild(elBottomBtnBox);
elBottomBtnBox.style.display = 'flex';
elBottomBtnBox.style.justifyContent = 'space-between';

var editBtn = document.createElement('button');
elBottomBtnBox.appendChild(editBtn);
editBtn.textContent = 'Tahrirlash';
editBtn.style.marginTop = '25px';
editBtn.style.marginLeft = '15px';
editBtn.style.backgroundColor = 'transparent';
editBtn.style.border = 'none';
editBtn.style.borderRadius = '5px';
editBtn.style.color = '#fff3e0';
editBtn.style.textShadow = '0 0 7px #d6d6d6';
editBtn.style.fontSize = '1.2em';
editBtn.style.boxShadow = '0 0 7px #d6d6d6';
editBtn.style.padding = '8px 12px';
editBtn.style.cursor = 'pointer';
editBtn.type = 'button';
editBtn.setAttribute('onclick', 'editBtnClick()');
editBtn.onmouseover = function() {
  editBtn.style.boxShadow = '0 0 15px #d6d6d6';
  editBtn.style.transition = 'all 0.1s ease-in-out';
}
editBtn.onmouseleave = function() {
  editBtn.style.boxShadow = '0 0 7px #d6d6d6';
  editBtn.style.transition = 'all 0.1s ease-in-out';
}

function editBtnClick() {
  setTimeout("location.reload(true);");
}

var sendBtn = document.createElement('button');
elBottomBtnBox.appendChild(sendBtn);
sendBtn.textContent = 'Yuborish';
sendBtn.style.marginTop = '25px';
sendBtn.style.marginRight = '15px';
sendBtn.style.backgroundColor = 'transparent';
sendBtn.style.border = 'none';
sendBtn.style.borderRadius = '5px';
sendBtn.style.color = '#fff3e0';
sendBtn.style.textShadow = '0 0 7px #d6d6d6';
sendBtn.style.fontSize = '1.2em';
sendBtn.style.boxShadow = '0 0 7px #d6d6d6';
sendBtn.style.padding = '8px 12px';
sendBtn.style.cursor = 'pointer';
sendBtn.type = 'submit';
sendBtn.onmouseover = function() {
  sendBtn.style.boxShadow = '0 0 15px #d6d6d6';
  sendBtn.style.transition = 'all 0.1s ease-in-out';
}
sendBtn.onmouseleave = function() {
  sendBtn.style.boxShadow = '0 0 7px #d6d6d6';
  sendBtn.style.transition = 'all 0.1s ease-in-out';
}