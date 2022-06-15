var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    // 부모 클래스
    var CoffeeMachine_1 = /** @class */ (function () {
        function CoffeeMachine(beans) {
            this.coffeeBeans = 0; // instance (object) level
            this.coffeeBeans = beans;
        }
        // 인스턴스 생성 함수
        CoffeeMachine.makeMachine = function (beans) {
            return new CoffeeMachine(beans);
        };
        // 커피콩 채우는 함수
        CoffeeMachine.prototype.fillCoffeeBeans = function (beans) {
            if (beans < 0) {
                throw new Error("value for beans should be greater than 0");
            }
            this.coffeeBeans += beans;
        };
        // 청소 함수
        CoffeeMachine.prototype.clean = function () {
            console.log("cleaning the machine...🧼");
        };
        // 커피콩 가는 함수
        CoffeeMachine.prototype.grindBeans = function (shots) {
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error("Not enough coffee beans~!⚠️");
            }
            console.log("grinding beans for ".concat(shots));
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        };
        // 예열 함수
        CoffeeMachine.prototype.preheat = function () {
            console.log("heating up... 🔥");
        };
        // 에스프레소 추출 함수
        CoffeeMachine.prototype.extract = function (shots) {
            console.log("Pulling ".concat(shots, " shots... \u2615\uFE0F"));
            return {
                shots: shots,
                hasMilk: false
            };
        };
        // 커피 만드는 함수!
        // (커피 갈고, 기계 예열하는 함수 호출 & 에스프레소 추출 함수  리턴)
        CoffeeMachine.prototype.makeCoffee = function (shots) {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        };
        CoffeeMachine.BEANS_GRAMM_PER_SHOT = 7; // class level
        return CoffeeMachine;
    }());
    // CoffeeMachine 상속받는 라떼머신 클래스
    var CaffeeLatteMachine = /** @class */ (function (_super) {
        __extends(CaffeeLatteMachine, _super);
        function CaffeeLatteMachine(beans, serialNumber) {
            var _this = 
            // Constructors for derived classes must contain a 'super' call
            _super.call(this, beans) || this;
            _this.serialNumber = serialNumber;
            return _this;
        }
        CaffeeLatteMachine.prototype.steamMilk = function () {
            console.log("Steaming some milk... 🥛");
        };
        CaffeeLatteMachine.prototype.makeCoffee = function (shots) {
            var coffee = _super.prototype.makeCoffee.call(this, shots);
            // 부모 클래스의 함수에 접근 시 super키워드를 사용한다.
            this.steamMilk();
            return __assign(__assign({}, coffee), { hasMilk: true });
        };
        return CaffeeLatteMachine;
    }(CoffeeMachine_1));
    // offeeMachine 상속받는 설탕 추가 클래스
    var SweetCoffeeMachine = /** @class */ (function (_super) {
        __extends(SweetCoffeeMachine, _super);
        function SweetCoffeeMachine() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SweetCoffeeMachine.prototype.makeCoffee = function (shots) {
            var coffee = _super.prototype.makeCoffee.call(this, shots);
            console.log("sugar🍬");
            return __assign(__assign({}, coffee), { hasSugar: true });
        };
        return SweetCoffeeMachine;
    }(CoffeeMachine_1));
    var machines = [
        new CoffeeMachine_1(23),
        new CaffeeLatteMachine(20, "sss"),
        new SweetCoffeeMachine(11),
        new CoffeeMachine_1(23),
        new CaffeeLatteMachine(20, "sss"),
        new SweetCoffeeMachine(11),
    ];
    machines.forEach(function (machine) {
        console.log("-----------------------------");
        machine.makeCoffee(1);
    });
}
