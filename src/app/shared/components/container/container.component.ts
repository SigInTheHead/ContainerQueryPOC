import {Component, Input} from '@angular/core';
import {ContainerType} from "./container.component.types";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  @Input()
  public type: ContainerType = "inlineSize";

}
