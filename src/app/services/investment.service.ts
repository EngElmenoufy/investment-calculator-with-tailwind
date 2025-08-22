import { Injectable, signal } from '@angular/core';
import { Annual, InvestmentInput } from '../model/annual';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  private annualSignal = signal<Annual[]>([]);

  annualData = this.annualSignal.asReadonly();

  calculateInvestmentResults(data: InvestmentInput) {
    this.annualSignal.set([]);
    let investmentValue = Number(data.initialInvestment);

    for (let i = 0; i < Number(data.duration); i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (Number(data.expectedReturn) / 100);
      investmentValue += interestEarnedInYear + Number(data.annualInvestment);
      const totalInterest =
        investmentValue -
        Number(data.annualInvestment) * year -
        Number(data.initialInvestment);
      this.annualSignal().push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: Number(data.annualInvestment),
        totalInterest: totalInterest,
        totalAmountInvested:
          Number(data.initialInvestment) + Number(data.annualInvestment) * year,
      });
    }
  }
}
