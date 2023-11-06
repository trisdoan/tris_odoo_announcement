odoo.define("hr_reward_warning.row_color", function (require) {
  "use strict";
  var ListController = require('web.ListController');
  var ListRenderer = require("web.ListRenderer");

  ListRenderer.include({
    _renderRow: function (record) {
      var $row = this._super.apply(this, arguments);
      if (record.data.read_by_users && _.contains(record.data.read_by_users.res_ids, this.getSession().uid)) {
        $row.addClass("text-muted");
      }
      return $row;
    },
  });
});
