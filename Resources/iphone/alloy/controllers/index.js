function Controller() {
    function __alloyId12(e) {
        if (e && e.fromAdapter) return;
        __alloyId12.opts || {};
        var models = doFilter(__alloyId11);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId6 = models[i];
            __alloyId6.__transform = doTransform(__alloyId6);
            var __alloyId8 = Ti.UI.createTableViewRow({
                width: Ti.UI.FILL,
                height: 44,
                taskid: "undefined" != typeof __alloyId6.__transform["id"] ? __alloyId6.__transform["id"] : __alloyId6.get("id")
            });
            rows.push(__alloyId8);
            var __alloyId9 = Ti.UI.createLabel({
                top: 4,
                left: 15,
                color: "#000",
                text: "undefined" != typeof __alloyId6.__transform["task"] ? __alloyId6.__transform["task"] : __alloyId6.get("task")
            });
            __alloyId8.add(__alloyId9);
            var __alloyId10 = Ti.UI.createLabel({
                bottom: 4,
                left: 15,
                color: "#ccc",
                font: {
                    fontSize: 12
                },
                text: "undefined" != typeof __alloyId6.__transform["created_at"] ? __alloyId6.__transform["created_at"] : __alloyId6.get("created_at")
            });
            __alloyId8.add(__alloyId10);
        }
        $.__views.table.setData(rows);
    }
    function doTransform(_model) {
        var json = _model.toJSON();
        json.created_at = Moment(json.created_at).format("YYYY-MM-DD HH:mm");
        return json;
    }
    function doFilter(_collection) {
        return _collection.filter(function(_predicate) {
            var json = _predicate.toJSON();
            switch (done) {
              case 0:
                return !json.done;

              case 1:
                return json.done;

              default:
                return true;
            }
        });
    }
    function doTab(e) {
        done = e.index;
        todos.fetch();
    }
    function doAddtask() {
        if ("" === $.textfield.getValue()) {
            Alert.dialog({
                title: "エラー",
                message: "新しいタスクを入力してください"
            });
            return;
        }
        var task = Alloy.createModel("todos", {
            task: $.textfield.getValue(),
            done: false
        });
        todos.add(task);
        task.save();
        todos.fetch();
        $.textfield.blur();
    }
    function doCancel() {
        $.textfield.blur();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId0 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "myTODO",
        id: "__alloyId0"
    });
    $.__views.addtask = Ti.UI.createView({
        top: 0,
        width: Ti.UI.FILL,
        height: 44,
        id: "addtask"
    });
    $.__views.__alloyId0.add($.__views.addtask);
    var __alloyId4 = [];
    $.__views.cancelbutton = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.CANCEL,
        id: "cancelbutton"
    });
    __alloyId4.push($.__views.cancelbutton);
    doCancel ? $.__views.cancelbutton.addEventListener("click", doCancel) : __defers["$.__views.cancelbutton!click!doCancel"] = true;
    $.__views.__alloyId5 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId4.push($.__views.__alloyId5);
    $.__views.addbutton = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.ADD,
        style: Ti.UI.iPhone.SystemButtonStyle.DONE,
        id: "addbutton"
    });
    __alloyId4.push($.__views.addbutton);
    doAddtask ? $.__views.addbutton.addEventListener("click", doAddtask) : __defers["$.__views.addbutton!click!doAddtask"] = true;
    $.__views.__alloyId2 = Ti.UI.iOS.createToolbar({
        items: __alloyId4,
        id: "__alloyId2"
    });
    $.__views.textfield = Ti.UI.createTextField({
        left: 15,
        width: Alloy.CFG.TextFieldWidth,
        height: 44,
        keyboardToolbar: $.__views.__alloyId2,
        id: "textfield",
        hintText: "New task"
    });
    $.__views.addtask.add($.__views.textfield);
    $.__views.table = Ti.UI.createTableView({
        top: 44,
        right: 0,
        bottom: 44,
        left: 0,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "table"
    });
    $.__views.__alloyId0.add($.__views.table);
    var __alloyId11 = Alloy.Collections["todos"] || todos;
    __alloyId11.on("fetch destroy change add remove reset", __alloyId12);
    $.__views.footer = Ti.UI.createView({
        right: 0,
        bottom: 0,
        left: 0,
        width: Ti.UI.FILL,
        height: 44,
        backgroundColor: "#fff",
        id: "footer"
    });
    $.__views.__alloyId0.add($.__views.footer);
    var __alloyId14 = [];
    var __alloyId18 = {
        title: "未完了",
        ns: "Alloy.Abstract"
    };
    __alloyId14.push(__alloyId18);
    var __alloyId19 = {
        title: "完了",
        ns: "Alloy.Abstract"
    };
    __alloyId14.push(__alloyId19);
    var __alloyId20 = {
        title: "全て",
        ns: "Alloy.Abstract"
    };
    __alloyId14.push(__alloyId20);
    $.__views.tab = Ti.UI.iOS.createTabbedBar({
        index: 0,
        style: Ti.UI.iPhone.SystemButtonStyle.BAR,
        labels: __alloyId14,
        id: "tab"
    });
    $.__views.footer.add($.__views.tab);
    doTab ? $.__views.tab.addEventListener("click", doTab) : __defers["$.__views.tab!click!doTab"] = true;
    $.__views.index = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId0,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {
        __alloyId11.off("fetch destroy change add remove reset", __alloyId12);
    };
    _.extend($, $.__views);
    var Moment = require("alloy/moment"), Alert = require("alloy/alert"), Dialogs = require("alloy/dialogs");
    var todos = Alloy.Collections.todos;
    var done = 0;
    var control;
    control = Ti.UI.createRefreshControl();
    control.addEventListener("refreshstart", function() {
        todos.fetch({
            success: function() {
                control.endRefreshing();
            }
        });
    });
    $.table.applyProperties({
        refreshControl: control
    });
    $.table.addEventListener("longpress", function(e) {
        e.rowData && e.rowData.taskid && Dialogs.confirm({
            title: "確認",
            message: "タスクを削除してもよろしいですか？",
            buttonNames: [ "削除", "キャンセル" ],
            cancel: 1,
            callback: function() {
                var task = todos.get(e.rowData.taskid);
                task.destroy();
            }
        });
    });
    $.table.addEventListener("swipe", function(e) {
        if (e.rowData && e.rowData.taskid) {
            var task = todos.get(e.rowData.taskid), json = task.toJSON();
            Dialogs.confirm({
                title: "確認",
                message: json.done ? "タスクを未完了に戻しますか？" : "タスクを完了してもよろしいですか？",
                buttonNames: [ json.done ? "戻す" : "完了", "キャンセル" ],
                cancel: 1,
                callback: function() {
                    task.set({
                        done: !json.done
                    });
                    task.save();
                }
            });
        }
    });
    $.index.addEventListener("open", function() {
        var users = Alloy.createModel("Users");
        if (users.authenticated()) todos.fetch(); else {
            var login = Alloy.createController("login"), loginView = login.getView();
            loginView.open({
                modal: true
            });
            login.on("logined", function() {
                todos.fetch();
            });
        }
    });
    $.index.open();
    __defers["$.__views.cancelbutton!click!doCancel"] && $.__views.cancelbutton.addEventListener("click", doCancel);
    __defers["$.__views.addbutton!click!doAddtask"] && $.__views.addbutton.addEventListener("click", doAddtask);
    __defers["$.__views.tab!click!doTab"] && $.__views.tab.addEventListener("click", doTab);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;