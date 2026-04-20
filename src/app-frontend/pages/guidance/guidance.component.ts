import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guidance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guidance.component.html',
  styleUrl: './guidance.component.css'
})
export class GuidanceComponent {
  sections: { [key: string]: boolean } = {
    pengenalan: false,
    modulUtama: false,
    inventori: false,
    uploadScan: false,
    laporan: false,
    masterData: false
  };

  toggleSection(key: string) {
    this.sections[key] = !this.sections[key];
  }
}
