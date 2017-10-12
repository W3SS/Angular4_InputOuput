import { Component } from '@angular/core';
import {ChatHistoryService} from './chat-history.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ChatHistoryService]
})
export class AppComponent {
  title = 'app works!';
}
