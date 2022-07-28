var nameMsg = `Iltimos, ismingizni kiriting!`;
var welcomeMsg = `Hush kelibsiz`;
var confirmMsg = `Savollarimizga javob berishga tayyormisiz?`
var addresQuestion = `Yashash manzilingiz?`;
var secondQuestion = `Yoshizgiz? (sonda)`;
var byeMsg = `Javoblar uchun rahmat!`;
var ignoreMsg = `Siz savollarimizga javob berishni hohlamadingiz (`;
var retryMsg = `Malumot noto'g'ri kiritildi! Iltimos qaytadan urunib ko'ring!`;

var reloadPage = function() {
  setTimeout("location.reload(true);",800); // Reload the page
}

nameMsg = prompt(nameMsg);

if (nameMsg === ''|| nameMsg === null || nameMsg === undefined || Number(nameMsg) || nameMsg.indexOf(' ') >= 0) {
  alert(`${retryMsg}`);
  reloadPage();
} else {
  alert(welcomeMsg + `, ${nameMsg.trim()}`);
  confirmMsg = confirm(confirmMsg);
  if (confirmMsg === false) {
    alert(ignoreMsg);
  } else {
    addresQuestion = prompt(addresQuestion);
    if (addresQuestion === '' || addresQuestion === null || addresQuestion === undefined || Number(addresQuestion) || addresQuestion.indexOf(' ') >= 0) {
      alert(`${retryMsg}`);
      reloadPage();
    } else {
      secondQuestion = prompt(secondQuestion);
      if (secondQuestion === '' || secondQuestion === null || secondQuestion === undefined || isNaN(secondQuestion) || secondQuestion.indexOf(' ') >= 0) {
        alert(`${retryMsg}`);
        reloadPage();
      } else {
      byeMsg = alert(byeMsg + `, ${nameMsg.trim()}`);
      console.log(`Foydalanuvchi ismi: ${nameMsg.trim()}

Foydalanuvchi yashash manzili: ${addresQuestion.trim()}

Foydalanuvchi yoshi: ${secondQuestion.trim()}`);
      }
    }
  }
}