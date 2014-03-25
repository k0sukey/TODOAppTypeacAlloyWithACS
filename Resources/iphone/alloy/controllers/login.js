function Controller() {
    function doAuthorization(_params) {
        console.log(_params);
        _params = _params || {};
        var user = Alloy.createModel("Users");
        user.login({
            login: _params.username,
            password: _params.password,
            success: function() {
                $.trigger("logined", {});
                $.navigation.close();
            },
            error: function() {
                Alert.dialog({
                    title: "エラー",
                    message: "ログインに失敗しました"
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
        var user = Alloy.createModel("Users", {
            username: $.createUsername.getValue(),
            password: $.createPassword.getValue(),
            password_confirmation: $.createConfirm.getValue()
        });
        user.save({}, {
            success: function() {
                doAuthorization({
                    username: $.createUsername.getValue(),
                    password: $.createPassword.getValue()
                });
            },
            error: function() {
                Alert.dialog({
                    title: "エラー",
                    message: "ユーザ登録に失敗しました"
                });
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId21 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "ログイン / ユーザ登録",
        id: "__alloyId21"
    });
    $.__views.__alloyId22 = Ti.UI.createScrollView({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        top: 10,
        right: 10,
        left: 10,
        width: Ti.UI.FILL,
        height: 20,
        color: "#333",
        font: {
            fontSize: 16
        },
        text: "ユーザID",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.loginUsername = Ti.UI.createTextField({
        top: 0,
        right: 10,
        left: 20,
        width: Ti.UI.FILL,
        height: 44,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#333",
        id: "loginUsername"
    });
    $.__views.__alloyId22.add($.__views.loginUsername);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        top: 10,
        right: 10,
        left: 10,
        width: Ti.UI.FILL,
        height: 20,
        color: "#333",
        font: {
            fontSize: 16
        },
        text: "パスワード",
        id: "__alloyId24"
    });
    $.__views.__alloyId22.add($.__views.__alloyId24);
    $.__views.loginPassword = Ti.UI.createTextField({
        top: 0,
        right: 10,
        left: 20,
        width: Ti.UI.FILL,
        height: 44,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#333",
        passwordMask: true,
        id: "loginPassword"
    });
    $.__views.__alloyId22.add($.__views.loginPassword);
    $.__views.__alloyId25 = Ti.UI.createButton({
        top: 10,
        right: 10,
        left: 10,
        width: Ti.UI.FILL,
        height: 44,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#ccc",
        title: "ログイン",
        id: "__alloyId25"
    });
    $.__views.__alloyId22.add($.__views.__alloyId25);
    doLogin ? $.__views.__alloyId25.addEventListener("click", doLogin) : __defers["$.__views.__alloyId25!click!doLogin"] = true;
    $.__views.border = Ti.UI.createView({
        top: 10,
        right: 10,
        left: 10,
        width: Ti.UI.FILL,
        height: 1,
        backgroundColor: "#ccc",
        id: "border"
    });
    $.__views.__alloyId22.add($.__views.border);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        top: 10,
        right: 10,
        left: 10,
        width: Ti.UI.FILL,
        height: 20,
        color: "#333",
        font: {
            fontSize: 16
        },
        text: "ユーザID",
        id: "__alloyId26"
    });
    $.__views.__alloyId22.add($.__views.__alloyId26);
    $.__views.createUsername = Ti.UI.createTextField({
        top: 0,
        right: 10,
        left: 20,
        width: Ti.UI.FILL,
        height: 44,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#333",
        id: "createUsername"
    });
    $.__views.__alloyId22.add($.__views.createUsername);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        top: 10,
        right: 10,
        left: 10,
        width: Ti.UI.FILL,
        height: 20,
        color: "#333",
        font: {
            fontSize: 16
        },
        text: "パスワード",
        id: "__alloyId27"
    });
    $.__views.__alloyId22.add($.__views.__alloyId27);
    $.__views.createPassword = Ti.UI.createTextField({
        top: 0,
        right: 10,
        left: 20,
        width: Ti.UI.FILL,
        height: 44,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#333",
        passwordMask: true,
        id: "createPassword"
    });
    $.__views.__alloyId22.add($.__views.createPassword);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        top: 10,
        right: 10,
        left: 10,
        width: Ti.UI.FILL,
        height: 20,
        color: "#333",
        font: {
            fontSize: 16
        },
        text: "パスワード（確認）",
        id: "__alloyId28"
    });
    $.__views.__alloyId22.add($.__views.__alloyId28);
    $.__views.createConfirm = Ti.UI.createTextField({
        top: 0,
        right: 10,
        left: 20,
        width: Ti.UI.FILL,
        height: 44,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#333",
        passwordMask: true,
        id: "createConfirm"
    });
    $.__views.__alloyId22.add($.__views.createConfirm);
    $.__views.__alloyId29 = Ti.UI.createButton({
        top: 10,
        right: 10,
        left: 10,
        width: Ti.UI.FILL,
        height: 44,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#ccc",
        title: "ユーザ登録",
        id: "__alloyId29"
    });
    $.__views.__alloyId22.add($.__views.__alloyId29);
    doCreate ? $.__views.__alloyId29.addEventListener("click", doCreate) : __defers["$.__views.__alloyId29!click!doCreate"] = true;
    $.__views.navigation = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId21,
        id: "navigation"
    });
    $.__views.navigation && $.addTopLevelView($.__views.navigation);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Alert = require("alloy/alert");
    arguments[0] || {};
    __defers["$.__views.__alloyId25!click!doLogin"] && $.__views.__alloyId25.addEventListener("click", doLogin);
    __defers["$.__views.__alloyId29!click!doCreate"] && $.__views.__alloyId29.addEventListener("click", doCreate);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;