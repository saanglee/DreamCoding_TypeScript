{
    var CoffeeMaker_1 = /** @class */ (function () {
        // constructor : class로 인스턴스 생성 시 항상 호출되는 함수
        function CoffeeMaker(coffeeBeans) {
            this.coffeeBeans = 0;
            this.coffeeBeans = coffeeBeans;
            // ()안에 전달된 숫자만큼 coffeeBeans개수 설정
        }
        CoffeeMaker.prototype.makeCoffee = function (shots) {
            // 자신이 속한 class안의 멤버변수 접근 시 this를 붙여줌
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMN_PER_SHOT) {
                throw new Error("Not enough coffee beans");
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMN_PER_SHOT;
            return {
                shots: shots,
                hasMilk: false
            };
        };
        // class 멤버 변수 작성 시 const,let 키워드 사용 x
        CoffeeMaker.BEANS_GRAMN_PER_SHOT = 7;
        return CoffeeMaker;
    }());
    var maker = new CoffeeMaker_1(32);
    // new키워드로 인스턴스 생성, ()는 생성자constructor 호출
    var maker2 = new CoffeeMaker_1(40);
    console.log(maker);
    console.log(maker2);
    /*
    BEANS_GRAMN_PER_SHOT은
    인스턴스를 만들 때 마다 들어있음 - 다른 obj에 같은 데이터
    class에서 한번 정의되고 해당 class를 이용한 모든 인스턴스에서 동일하게 있는 값 -> 멤버 변수로있으면 obj만들 때 마다 중복 == 메모리낭비 -> static 키워들를 붙여 class level로 지정한다. (class level은 class와 연결되어 obj마다 생성되지 않는다.) & class 내에서 사용 시에는 클래스 자체에 있는거니까? this대신 class이름. 을 붙여준다.
    static키워드 안붙이면 instance(object) level
    */
}
