describe('Helpers test (with setup and tear-down)', function () {
    beforeEach(function () {
        allPayments = {
            payment1: {
                billAmt: 30,
                tipAmt: 10,
                tipPercent: 33
            },
            payment2: {
                billAmt: 30,
                tipAmt: 10,
                tipPercent: 33
            }
        };
    });
    it('should return the sum each type of payment from the allPayments object with sumPaymentTotal()', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(60);
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
        expect(sumPaymentTotal('tipPercent')).toEqual(66);
    });
    it('should return a tip% value of the billAmt and tipAmt', function () {
        expect(calculateTipPercent(30, 10)).toEqual(33);
    });
    it('should append a td with a given tr and value with appendTd()', function () {
        let test = document.createElement('tr');
        appendTd(test, 'test');
        expect(test.innerHTML).toContain('test');
    });
    it('should append a deleteBtn to the specified tr with appendDeleteBtn()', function () {
        let test = document.createElement('tr');
        appendDeleteBtn(test);
        expect(test.innerHTML).toContain('X');
    });
    afterEach(function () {
        allPayments = {};
    });
});