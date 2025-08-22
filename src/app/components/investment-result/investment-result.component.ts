import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from './../../services/investment.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  investmentService = inject(InvestmentService);
  annualList = this.investmentService.annualData;
}
