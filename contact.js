'user strict';

class Errorchecks {
	constructor(name, youso) {
		this.name = name;
		this.youso = youso;
	}
	errorcheck() {
		let checkContents = document.getElementsByName(this.name)[0];
		if (checkContents.value.length == 0) {
			alert(`${this.youso}は入力必須項目です`);
			checkContents.focus();
			return false;
		} else {
			return true;
		}
	}
}

const ErrorChecksArray = [
	new Errorchecks("entry.1872523287", "なまえ"),
	new Errorchecks("entry.596658253", "メールアドレス"),
	new Errorchecks("entry.368156838", "メッセージ")
]

let submitted = false;

function submitForm() {
	let ErrorName = ErrorChecksArray[0].errorcheck();
	let ErrorMail = ErrorChecksArray[1].errorcheck();
	let ErrorMsg = ErrorChecksArray[2].errorcheck();

	if (ErrorName && ErrorMail && ErrorMsg) {
		submitted = true;
	} else {
		submitted = false;
	}
}
