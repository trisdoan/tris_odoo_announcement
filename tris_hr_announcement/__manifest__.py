# -*- coding: utf-8 -*-
{
    'name': "tris_hr_announcement",

    'summary': """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com""",

    'description': """
        Long description of module's purpose
    """,

    'author': "My Company",
    'website': "http://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/12.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'web', 'hr_reward_warning'],

    # always loaded
    'data': [
        "views/inherited_hr_announcement_view.xml",
        "views/web_asset_backend.xml",
    ],
    # 'qweb': ['static/src/xml/add_button_mark_as_read.xml', ],
    # only loaded in demonstration mode
    'demo': [
        # 'demo/demo.xml',
    ],
}
