class CalculateFeeUseCase {
  calculateFee(totalTime: number): number {
    return totalTime * 5;
  }
}
export = new CalculateFeeUseCase();
