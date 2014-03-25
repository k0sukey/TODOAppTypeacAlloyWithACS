function Controller() {
    function __alloyId7() {
        $.__views.index.removeEventListener("open", __alloyId7);
        if ($.__views.index.activity) $.__views.index.activity.onCreateOptionsMenu = function(e) {
            var __alloyId2 = {
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                title: "未完了",
                id: "__alloyId1"
            };
            $.__views.__alloyId1 = e.menu.add(_.pick(__alloyId2, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId1.applyProperties(_.omit(__alloyId2, Alloy.Android.menuItemCreateArgs));
            doIncomplete ? $.__views.__alloyId1.addEventListener("click", doIncomplete) : __defers["$.__views.__alloyId1!click!doIncomplete"] = true;
            var __alloyId4 = {
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                title: "完了",
                id: "__alloyId3"
            };
            $.__views.__alloyId3 = e.menu.add(_.pick(__alloyId4, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId3.applyProperties(_.omit(__alloyId4, Alloy.Android.menuItemCreateArgs));
            doComplete ? $.__views.__alloyId3.addEventListener("click", doComplete) : __defers["$.__views.__alloyId3!click!doComplete"] = true;
            var __alloyId6 = {
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                title: "全て",
                id: "__alloyId5"
            };
            $.__views.__alloyId5 = e.menu.add(_.pick(__alloyId6, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId5.applyProperties(_.omit(__alloyId6, Alloy.Android.menuItemCreateArgs));
            doAll ? $.__views.__alloyId5.addEventListener("click", doAll) : __defers["$.__views.__alloyId5!click!doAll"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function __alloyId14(e) {
        if (e && e.fromAdapter) return;
        __alloyId14.opts || {};
        var models = doFilter(__alloyId13);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId8 = models[i];
            __alloyId8.__transform = doTransform(__alloyId8);
            var __alloyId10 = Ti.UI.createTableViewRow({
                width: Ti.UI.FILL,
                height: 44,
                taskid: "undefined" != typeof __alloyId8.__transform["id"] ? __alloyId8.__transform["id"] : __alloyId8.get("id")
            });
            rows.push(__alloyId10);
            var __alloyId11 = Ti.UI.createLabel({
                top: 4,
                left: 15,
                color: "#000",
                text: "undefined" != typeof __alloyId8.__transform["task"] ? __alloyId8.__transform["task"] : __alloyId8.get("task")
            });
            __alloyId10.add(__alloyId11);
            var __alloyId12 = Ti.UI.createLabel({
                bottom: 4,
                left: 15,
                color: "#ccc",
                font: {
                    fontSize: 12
                },
                text: "undefined" != typeof __alloyId8.__transform["created_at"] ? __alloyId8.__transform["created_at"] : __alloyId8.get("created_at")
            });
            __alloyId10.add(__alloyId12);
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
    function doIncomplete() {
        doTab({
            index: 0
        });
    }
    function doComplete() {
        doTab({
            index: 1
        });
    }
    function doAll() {
        doTab({
            index: 2
        });
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
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "myTODO",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.index.addEventListener("open", __alloyId7);
    $.__views.addtask = Ti.UI.createView({
        top: 0,
        width: Ti.UI.FILL,
        height: 44,
        id: "addtask"
    });
    $.__views.index.add($.__views.addtask);
    $.__views.textfield = Ti.UI.createTextField({
        left: 0,
        width: Ti.UI.FILL,
        height: 44,
        right: 180,
        id: "textfield",
        hintText: "New task"
    });
    $.__views.addtask.add($.__views.textfield);
    $.__views.addbutton = Ti.UI.createButton({
        right: 0,
        width: 60,
        height: 44,
        title: "登録",
        id: "addbutton"
    });
    $.__views.addtask.add($.__views.addbutton);
    doAddtask ? $.__views.addbutton.addEventListener("click", doAddtask) : __defers["$.__views.addbutton!click!doAddtask"] = true;
    $.__views.cancelbutton = Ti.UI.createButton({
        right: 60,
        width: 120,
        height: 44,
        title: "キャンセル",
        id: "cancelbutton"
    });
    $.__views.addtask.add($.__views.cancelbutton);
    doCancel ? $.__views.cancelbutton.addEventListener("click", doCancel) : __defers["$.__views.cancelbutton!click!doCancel"] = true;
    $.__views.table = Ti.UI.createTableView({
        top: 44,
        right: 0,
        bottom: 0,
        left: 0,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "table"
    });
    $.__views.index.add($.__views.table);
    var __alloyId13 = Alloy.Collections["todos"] || todos;
    __alloyId13.on("fetch destroy change add remove reset", __alloyId14);
    exports.destroy = function() {
        __alloyId13.off("fetch destroy change add remove reset", __alloyId14);
    };
    _.extend($, $.__views);
    var Moment = require("alloy/moment"), Alert = require("alloy/alert"), Dialogs = require("alloy/dialogs");
    var todos = Alloy.Collections.todos;
    var done = 0;
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
    __defers["$.__views.__alloyId1!click!doIncomplete"] && $.__views.__alloyId1.addEventListener("click", doIncomplete);
    __defers["$.__views.__alloyId3!click!doComplete"] && $.__views.__alloyId3.addEventListener("click", doComplete);
    __defers["$.__views.__alloyId5!click!doAll"] && $.__views.__alloyId5.addEventListener("click", doAll);
    __defers["$.__views.addbutton!click!doAddtask"] && $.__views.addbutton.addEventListener("click", doAddtask);
    __defers["$.__views.cancelbutton!click!doCancel"] && $.__views.cancelbutton.addEventListener("click", doCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;