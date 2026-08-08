import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormatTitlePipe } from '../format-title.pipe';

@Component({
  standalone: true,
  selector: 'app-about-us',
  imports: [RouterLink, FormatTitlePipe],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  readonly title = 'about our team';
}
