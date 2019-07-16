import { Component, NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule],
})
export class AppComponent {
  title = 'my-first-project';
}
