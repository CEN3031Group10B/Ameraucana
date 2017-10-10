function confirmPass() {
	var password = document.getElementById('password');
	var confirmPassword = document.getElementById('confirmPassword');
	var message = document.getElementById('confirmMessage');
	var goodColor = '#66cc66';
	var badColor = '#ff6666';

	if (password == confirmPassword) {
		confirmPassword.style.backgroundColor = goodColor;
		message.style.color = goodColor;
		message.innerHTML = 'Password match'
	} else {
		confirmPassword.style.backgroundColor = badColor;
		message.style.color = badColor;
		message.innerHTML = 'Password do not match' 
	}
}