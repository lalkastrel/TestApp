import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiProgress} from '@taiga-ui/kit';
import {Input} from '@angular/core'
 
@Component({
    selector: "progress-bar",
    imports: [TuiProgress],
    templateUrl: './progress-bar.html',
    styleUrls: ['./progress-bar.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProgressBar {
  @Input() value = 0;
}