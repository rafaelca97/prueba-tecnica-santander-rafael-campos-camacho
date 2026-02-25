import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateFormComponent } from '../candidate-form/candidate-form.component';
import { CandidateListComponent } from '../candidate-list/candidate-list.component';
import { MatDividerModule } from '@angular/material/divider'
import { MatTabsModule } from '@angular/material/tabs';;
import { UI_TEXTS } from '../../models/candidate.constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CandidateFormComponent, CandidateListComponent, MatDividerModule, MatTabsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly texts = UI_TEXTS.HOME;

  activeTab = 0;
  tabGroupIndex = 0;

  setTab(i: number) {
    this.activeTab = i;
    this.tabGroupIndex = i;
  }

  get underlineTransform(): string {
    return `translateX(${this.activeTab * 100}%)`;
  }
}
