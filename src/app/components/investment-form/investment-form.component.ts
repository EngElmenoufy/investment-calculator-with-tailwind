import { InvestmentService } from './../../services/investment.service';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-investment-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './investment-form.component.html',
  styleUrl: './investment-form.component.css',
})
export class InvestmentFormComponent {
  data = {
    initialInvestment: '',
    annualInvestment: '',
    expectedReturn: '',
    duration: '',
  };

  investmentService = inject(InvestmentService);

  onSubmit() {
    this.investmentService.calculateInvestmentResults(this.data);
    this.resetForm();
  }

  resetForm() {
    this.data = {
      initialInvestment: '',
      annualInvestment: '',
      expectedReturn: '',
      duration: '',
    };
  }
}
