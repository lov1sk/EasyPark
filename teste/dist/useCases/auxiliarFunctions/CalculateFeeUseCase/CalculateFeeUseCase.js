"use strict";
class CalculateFeeUseCase {
    calculateFee(totalTime) {
        return totalTime * 5;
    }
}
module.exports = new CalculateFeeUseCase();
