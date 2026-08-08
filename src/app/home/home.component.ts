import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormatTitlePipe } from '../format-title.pipe';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterLink, FormatTitlePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly title = 'welcome to our angular app';
  readonly highlights = ['Routing', 'Pipes', 'Modern UI'];
}
