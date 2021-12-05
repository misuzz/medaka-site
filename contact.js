'user strict';

// class Errorchecks {
// 	errorcheck(name, Youso) {
// 		let checkContents = document.getElementsByName(name)[0];
// 		if (checkContents.value.length == 0) {
// 			alert(`${Youso}は入力必須項目です`);
// 			checkContents.focus();
// 			return false;
// 		}
// 	}
// }

// const ErrorChecksArray = [
// 	new Errorchecks("entry.1872523287", "なまえ"),
// 	new Errorchecks("entry.596658253", "メールアドレス"),
// 	new Errorchecks("entry.368156838", "メッセージ")
// ]

let submitted = false;

function submitForm() {
	let checkContents1 = document.getElementsByName("entry.1872523287")[0];
	if (checkContents1.value.length == 0) {
		alert("なまえは入力必須項目です");
		checkContents1.focus();
		return false;
	}

	let checkContents2 = document.getElementsByName("entry.596658253")[0];
	if (checkContents2.value.length == 0) {
		alert("メールアドレスは入力必須項目です");
		checkContents2.focus();
		return false;
	}

	let checkContents3 = document.getElementsByName("entry.368156838")[0];
	if (checkContents3.value.length == 0) {
		alert("メッセージは入力必須項目です");
		checkContents3.focus();
		return false;
	}

	submitted = true;

	// ErrorChecksArray[0].errorcheck();
	// ErrorChecksArray[1].errorcheck();
	// ErrorChecksArray[2].errorcheck();
}
