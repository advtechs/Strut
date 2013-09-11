define(['libs/backbone'],
function(Backbone) {
	return Backbone.Model.extend({
		initialize: function() {
		},

		deck: function() {
			return this._editorModel.deck();
		},

		activeSlide: function() {
			return this._editorModel.deck().get('activeSlide');
		},

		dispose: function() {
			this.off();
		},

		constructor: function SlideEditorModel(opts) {
			this._editorModel = opts.editorModel;
			Backbone.Model.prototype.constructor.call(this);
		}
	});
});