describe('Payments test (with setup and tear-down)', function () {
    beforeEach(function () {
        billAmtInput.value = 20;
        tipAmtInput.value = 5;
    });

    it('should update and reset input values', function () {
        submitPaymentInfo();
        expect(billAmtInput.value && tipAmtInput.value).toEqual('');
        expect(allPayments['payment1'].billAmt).toEqual('20');
        expect(allPayments['payment1'].tipAmt).toEqual('5');
    });
    it('should return if the input values are empty', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        createCurPayment();
        expect(paymentTbody.innerText).toEqual('');
    });
    it('should run appendPaymentTable() to append a table with the input values', function () {
        submitPaymentInfo();
        expect(paymentTbody.innerText).toContain('$20');
        expect(paymentTbody.innerText).toContain('$5');
    });
    it('should run updateSummary() to update the summaryTds with the input values', function () {
        submitPaymentInfo();
        expect(summaryTds[0].innerHTML).toContain('$20');
        expect(summaryTds[1].innerHTML).toContain('$5');
    });
    afterEach(function () {
        allPayments = {};
        paymentId = 0;
        paymentTbody.innerHTML = '';
        updateSummary();
    });
});