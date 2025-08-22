import { Component } from '@angular/core';
import { InvestmentFormComponent } from './components/investment-form/investment-form.component';
import { InvestmentResultComponent } from './components/investment-result/investment-result.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    InvestmentFormComponent,
    InvestmentResultComponent,
    HeaderComponent,
  ],
})
export class AppComponent {}
