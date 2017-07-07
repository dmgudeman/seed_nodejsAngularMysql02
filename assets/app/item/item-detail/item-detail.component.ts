import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Router,
  ActivatedRoute,
  Params
} from '@angular/router';
import { Company } from '../../company/company';
import { CompanyDetailsComponent } from '../../company/company-details/company-details.component';
import { CompanyService } from '../../company/company.service';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Shared } from '../../shared/shared';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  // shared = require('shared');
  @Input() item: Item
  @Input() itemColor: string;
  shared = new Shared();
  color:string;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _companyService: CompanyService,
    private _itemService: ItemService) { }

  ngOnInit() {
    let date;
    date = this.shared.setDate(this.item.date);
    this.item.date = date;
  }

  goToEditItem(item?: Item) {
    let id = item.id;
    this._router.navigate(['/item-edit/' + id, { id: id }]);
  }

  setColor(color) {
      this.color = color
    return this.color;
  }

}
