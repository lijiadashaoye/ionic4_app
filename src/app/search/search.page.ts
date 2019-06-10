import {
  Component,
  OnInit
} from '@angular/core';
import {
  NavController
} from '@ionic/angular'

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(public navCon: NavController) {}

  ngOnInit() {}
  toBack() {
    this.navCon.back()
  }
}