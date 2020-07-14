// Copyright (c) 2020, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Ticket', 'priority', function (frm) {
    if (frm.doc.priority === 'High') {
        frm.set_value('color', '#ff4d4d');
    }
    if (frm.doc.priority === 'Medium') {
        frm.set_value('color', '#7575ff');
    }
    else{
        frm.set_value('color', '#428b46');
    }
});
