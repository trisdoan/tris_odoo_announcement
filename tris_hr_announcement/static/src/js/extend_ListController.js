odoo.define('tris_hr_announcement.mark_as_read_button', function (require) {
    "use strict";

    var ListController = require('web.ListController');
    var rpc = require('web.rpc');

    ListController.include({
        renderButtons: function($node) {
            this._super.apply(this, arguments);
            if (this.$buttons) {
                var mark_as_read = $("<button/>", {
                    type: 'button',
                    text: 'Mark As Read',
                }).addClass('btn btn-primary')
                .css('margin-left', '5px')
                .click(this.proxy('mark_as_read'));
                this.$buttons.prepend(mark_as_read);


                var mark_as_unread = $("<button/>", {
                    type: 'button',
                    text: 'Mark As Unread',
                }).addClass('btn')
                .click(this.proxy('mark_as_unread'));
                this.$buttons.prepend(mark_as_unread);
            }
        },
        mark_as_read: function () {
        var self = this;
        var ids = this.getSelectedIds();
        if (ids.length > 0) {
                rpc.query({
                model: 'hr.announcement',
                method: 'mark_as_read',
                args: [ids]
            }).then(function () {
                self.reload();
            });}},

        mark_as_unread: function () {
        var self = this;
        var ids = this.getSelectedIds();
        if (ids.length > 0) {
                rpc.query({
                model: 'hr.announcement',
                method: 'mark_as_unread',
                args: [ids]
            }).then(function () {
                self.reload();
            });}},
    });
});