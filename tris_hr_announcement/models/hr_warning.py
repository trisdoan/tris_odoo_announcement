from odoo import api, fields, models
from lxml import etree


class HrAnnouncement(models.Model):
    _inherit = 'hr.announcement'

    read_by_users = fields.Many2many('res.users', 'user_read_announcement_rel', 'announcement_id', 'user_id',
                                     string='Read by')

    @api.multi
    def mark_as_read(self):
        for rec in self:
            rec.read_by_users |= self.env.user

    @api.multi
    def mark_as_unread(self):
        for rec in self:
            read_by_users = rec.read_by_users - self.env.user
            rec.sudo().write({
                'read_by_users': [(6,0, read_by_users.ids)]
            })
