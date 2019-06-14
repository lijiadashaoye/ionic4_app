import {
  Component,
  OnInit
} from '@angular/core';
import {
  NavController
} from '@ionic/angular';
import {
  httpService
} from '../service/service';
import {
  ActivatedRoute,
} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchText = ''; // 搜索的内容
  searchList = []; // 热搜记录
  page = false;
  cid='';
  list=[]
  constructor(
    public act: ActivatedRoute,
    public http: httpService, public navCon: NavController) {}

  ngOnInit() {
    this.act.params.subscribe(par => {
      this.cid = par.data;
    })
  }
  toBack() {
    this.navCon.back()
  }
  // 搜索按钮
  doSearch() {
    this.http.ajaxGet({
      url: 'api/plist?search'
    }).subscribe(res => {
     this.list=res['result'];
    })
  }
  showSearch(text) {
    this.page = false;
  }

  searchType(num) {
    console.log(num)
  }
}