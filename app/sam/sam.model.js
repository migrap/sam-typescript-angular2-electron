"use strict";
class Model {
    constructor(state) {
        this.state = state;
    }
    present(data) {
        this.render(this);
    }
    render(model) {
        this.state.render(model);
    }
}
exports.Model = Model;
//# sourceMappingURL=sam.model.js.map