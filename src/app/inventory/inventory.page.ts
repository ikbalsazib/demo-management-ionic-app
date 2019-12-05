import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAutocompleteSelectedEvent, MatAutocompleteTrigger, MatSort, MatTableDataSource} from '@angular/material';
import {ProductModel} from '../model/product-model';
import {ProductService} from '../services/product.service';
import {FormControl} from '@angular/forms';
import * as _ from 'lodash';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {
  // ****** Filter..
  isSingleFilter = false;
  brand = new FormControl();
  model = new FormControl();
  cc = new FormControl();
  // Filter Data Array..
  filteredBrandItemsArray: ProductModel[] = [];
  filteredModelItemsArray: ProductModel[] = [];
  filteredCcItemsArray: ProductModel[] = [];
  // Keyword..
  searchBrand: string;
  searchModel: string;
  searchCc: string;
  // Auto Complete...
  filteredBrandItems: Observable<ProductModel[]>;
  filteredModelItems: Observable<ProductModel[]>;
  filteredCcItems: Observable<ProductModel[]>;

  // Main Data Table
  productLists: ProductModel[] = [];
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['sl', 'brand', 'model', 'cc', 'color', 'engine', 'chassis', 'lc', 'receivedDate', 'costPrice', 'unitPrice'];
  // For MatSort..
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatAutocompleteTrigger, {static: true}) trigger: MatAutocompleteTrigger;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // Get All Product form Service..
    this.productLists = this.productService.getAllProduct();
    this.listData = new MatTableDataSource(this.productLists);
    this.listData.sort = this.sort;
    this.productService.productItemChange
        .subscribe((productItems: ProductModel[]) => {
          this.productLists = productItems;
        });

    // Filter...
    this.filteredBrandItems = this.brand.valueChanges
        .pipe(
            startWith(''),
            map((value) => this._filterBrand(value))
        );

    this.filteredModelItems = this.model.valueChanges
        .pipe(
            startWith(''),
            map((value) => this._filterModel(value))
        );

    this.filteredCcItems = this.cc.valueChanges
        .pipe(
            startWith(''),
            map((value) => this._filterCc(value))
        );

  }

  // Filter..
  onClickFilter() {
    this.isSingleFilter = !this.isSingleFilter;
  }

  onSelectBrand(event: MatAutocompleteSelectedEvent) {
    this.searchBrand = event.option.value;
    this.filteredBrandItemsArray = _.filter(this.productLists, ['brand', this.searchBrand]);
    this.listData = new MatTableDataSource(this.filteredBrandItemsArray);
    // Clear Single..
    this.model.setValue('');
    this.cc.setValue('');
  }

  onSelectModel(event: MatAutocompleteSelectedEvent) {
    this.searchModel = event.option.value;
    this.filteredModelItemsArray = _.filter(this.productLists, ['model', this.searchModel]);
    this.listData = new MatTableDataSource(this.filteredModelItemsArray);
    // Clear Single..
    this.brand.setValue('');
    this.cc.setValue('');
  }
  onSelectCc(event: MatAutocompleteSelectedEvent) {
    this.searchCc = event.option.value;
    this.filteredCcItemsArray = _.filter(this.productLists, ['cc', this.searchCc]);
    this.listData = new MatTableDataSource(this.filteredCcItemsArray);
    // Clear Single..
    this.brand.setValue('');
    this.model.setValue('');
  }

  onClearBrand() {
    this.brand.setValue('');
    this.listData = new MatTableDataSource(this.productLists);
    // setTimeout(() => {
    //   event.stopPropagation();
    //   this.trigger._onChange('');
    //   this.trigger.openPanel();
    // }, 200);
  }

  onClearModel() {
    this.model.setValue('');
    this.listData = new MatTableDataSource(this.productLists);
  }
  onClearCc() {
    this.cc.setValue('');
    this.listData = new MatTableDataSource(this.productLists);
  }

  selectionMade(event: Event) {
    // event.stopPropagation();
    // this.trigger.closePanel();
  }






  // Value return with type..
  private _filterBrand(value: string): any[] {
    if (value === null) {
      return this.productLists.filter(item => item.brand.toLowerCase());
    }
    const filterValue = value.toLowerCase();
    return this.productLists.filter(item => item.brand.toLowerCase().includes(filterValue));
  }

  private _filterModel(value: string): any[] {
    if (value === null) {
      return this.productLists.filter(item => item.model.toLowerCase());
    }
    const filterValue = value.toLowerCase();
    return this.productLists.filter(item => item.model.toLowerCase().includes(filterValue));
  }

  private _filterCc(value: string): any[] {
    if (value === null) {
      return this.productLists.filter(item => item.cc.toLowerCase());
    }
    const filterValue = value.toLowerCase();
    return this.productLists.filter(item => item.cc.toLowerCase().includes(filterValue));
  }

}
