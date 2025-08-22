export interface Annual {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}

export interface InvestmentInput {
  initialInvestment: string;
  annualInvestment: string;
  expectedReturn: string;
  duration: string;
}
