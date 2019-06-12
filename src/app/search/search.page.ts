import {
  Component,
  OnInit,
  TemplateRef
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
  searchText = ''; // 搜索的内容
  searchList = []; // 热搜记录
  page = true;
  constructor(public navCon: NavController) {}

  ngOnInit() {}
  toBack() {
    this.navCon.back()
  }
  doSearch() {
    this.searchList.push(this.searchText)
  }
  showSearch(text) {
    this.page = false;
  }

  searchType(num) {
    console.log(num)
  }
}