"use strict";
class Sam {
    constructor(_actions, _model, _state, _views) {
        this.actions = new _actions(this.model);
        this.model = new _model(this.state);
        this.state = new _state(this.views, this.actions);
        this.views = new _views();
        // injection dependencies SAM
        this.actions.model = this.model;
        this.model.state = this.state;
        this.state.views = this.views;
        this.state.actions = this.actions;
    }
}
exports.Sam = Sam;
//# sourceMappingURL=sam.component.js.map