$.Redactor.prototype.deleted = function() {
	return {
		langs: {
			de: {
				"deleted": "Durchgestrichen"
			},
			en: {
				"deleted": "Strikethrough"
			}
		},
		init: function() {
			var button = this.button.add('deleted', this.lang.get('deleted'));
//			this.button.setAwesome('blockquote', 'fa-quote-left');
			
			this.button.addCallback(button, this.deleted.set);
		},
		set: function() {
			this.inline.format('deleted');
		}
	};
};