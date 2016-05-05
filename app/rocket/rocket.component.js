"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const rocket_exports_1 = require('./rocket.exports');
let RocketComponent = class RocketComponent extends rocket_exports_1.Sam {
    constructor(loader, elementRef) {
        super(rocket_exports_1.RocketActions, rocket_exports_1.RocketModel, rocket_exports_1.RocketState, rocket_exports_1.RocketViews);
        this.loader = loader;
        this.elementRef = elementRef;
        this.actions.init();
    }
    ngOnInit() {
        this.views.updated.subscribe((representation) => {
            // Not sure how efficient this is at replacing the DOM. Gut tells me it's exspensive.
            // Could create a single view/template with ngIfs and a ViewModel that it would bind to.
            // ViewModel properties would updated based on state
            if (this.component == undefined || this.component.componentType.name !== representation.name) {
                this.loader.loadIntoLocation(representation, this.elementRef, 'rocket').then((component) => {
                    if (this.component) {
                        this.component.dispose();
                    }
                    component.instance.rocket = this;
                    this.component = component;
                });
            }
        });
        this.views.updated.subscribe((reprsentation) => {
            if (this.state.launched(this.model)) {
                jQuery('rocket').find('#rocket_launch').css("margin-bottom", "1000px");
                jQuery('rocket').find('.cloud_fill').css("animation", "smoke_size .35s infinite");
                jQuery('rocket').find('.rocket_shadow').css("animation", "shadow_flare .35s infinite");
            }
        });
        this.views.updated.next(this.views.representation);
    }
};
RocketComponent = __decorate([
    rocket_exports_1.Component({
        selector: 'rocket',
        templateUrl: './app/rocket/rocket.template.html',
        styleUrls: ['./app/rocket/rocket.style.css']
    }), 
    __metadata('design:paramtypes', [rocket_exports_1.DynamicComponentLoader, rocket_exports_1.ElementRef])
], RocketComponent);
exports.RocketComponent = RocketComponent;
//# sourceMappingURL=rocket.component.js.map