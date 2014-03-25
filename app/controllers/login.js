var Alert = require('alloy/alert');		// app/assets/alloy/alert.jsに用意

var args = arguments[0] || {};

function doAuthorization(_params) {
	console.log(_params);
	_params = _params || {};

	var user = Alloy.createModel('Users');
	user.login({
		login: _params.username,
		password: _params.password,
		success: function(_model, _response){
			$.trigger('logined', {});
			$.navigation.close();
		},
		error: function(_model, _response){
			Alert.dialog({
				title: 'エラー',
				message: 'ログインに失敗しました'
			});
		}
	});
}

function doLogin() {
	doAuthorization({
		username: $.loginUsername.getValue(),
		password: $.loginPassword.getValue()
	});
}

function doCreate() {
	var user = Alloy.createModel('Users', {
		username: $.createUsername.getValue(),
		password: $.createPassword.getValue(),
		password_confirmation: $.createConfirm.getValue(),
	});
	user.save({}, {
		success: function(_model, _response){
			doAuthorization({
				username: $.createUsername.getValue(),
				password: $.createPassword.getValue()
			});
		},
		error: function(_mode, _response){
			Alert.dialog({
				title: 'エラー',
				message: 'ユーザ登録に失敗しました'
			});
		}
	});
}