import {Component, OnInit, ViewChild} from '@angular/core';
import * as _ from 'lodash';
import {ProductModel} from '../../model/product-model';
import {MatSort, MatTableDataSource} from '@angular/material';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-multiple-filter',
  templateUrl: './multiple-filter.page.html',
  styleUrls: ['./multiple-filter.page.scss'],
})
export class MultipleFilterPage implements OnInit {
// ****** Filter..

  // Filter Product..
  itemBrandKeyword = 'brand';
  itemModelKeyword = 'model';
  itemColorKeyword = 'color';

  // Auto complete Control..
  productBrand = '';
  productModel = '';
  productColor = '';

  @ViewChild('auto1', {static: false}) auto1: any;
  @ViewChild('auto2', {static: false}) auto2: any;
  @ViewChild('auto3', {static: false}) auto3: any;

  searchCompany: string;
  isSelect = false;
  brandBaseProductLists: ProductModel[] = [];
  brandModelBaseProductLists: ProductModel[] = [];
  brandModelColorBaseProductLists: ProductModel[] = [];

  isMultipleFilter = true;

  // Main Data Table
  productLists: ProductModel[] = [];
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['sl', 'brand', 'model', 'cc', 'color', 'engine', 'chassis', 'lc', 'receivedDate', 'costPrice', 'unitPrice'];
  // For MatSort..
  @ViewChild(MatSort, { static: true }) sort: MatSort;

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
  }

  // Filter..
  onClickFilter() {
    this.isMultipleFilter = !this.isMultipleFilter;
  }

  selectBrandEvent(item) {
    this.isSelect = true;
    this.searchCompany = item.brand;
    this.productBrand = item.brand;
    this.brandBaseProductLists = _.filter(this.productLists, ['brand', item.brand]);
    this.listData = new MatTableDataSource(this.brandBaseProductLists);
  }

  selectModelEvent(item) {
    this.productModel = item.model;
    this.brandModelBaseProductLists = _.filter(this.brandBaseProductLists, {brand: this.productBrand, model: this.productModel});
    this.listData = new MatTableDataSource(this.brandModelBaseProductLists);
  }

  selectColorEvent(item) {
    this.productColor = item.color;
    this.brandModelColorBaseProductLists = _.filter(this.brandBaseProductLists, {brand: this.productBrand, model: this.productModel, color: this.productColor});
    this.listData = new MatTableDataSource(this.brandModelColorBaseProductLists);
  }


  clear(e): void {
    e.stopPropagation();
    this.auto2.clear();
    this.auto3.clear();
  }




  // Auto Complete Clear..
  onItemBrandClear() {
    this.brandBaseProductLists = [];
    this.brandModelBaseProductLists = [];
    this.brandModelColorBaseProductLists = [];
    this.listData = new MatTableDataSource(this.productLists);
    // this.auto2.clear();
    this.clear(event);
  }

  onItemModelClear() {
    // this.listData = new MatTableDataSource(this.productLists);
    this.brandModelBaseProductLists = [];
    this.brandModelColorBaseProductLists = [];
    if (this.brandBaseProductLists.length <= 0) {
      this.listData = new MatTableDataSource(this.productLists);
    } else {
      this.listData = new MatTableDataSource(this.brandBaseProductLists);
    }

  }

  onItemColorClear() {
    // this.listData = new MatTableDataSource(this.productLists);
    this.brandModelColorBaseProductLists = [];
    if (this.brandBaseProductLists.length <= 0) {
      this.listData = new MatTableDataSource(this.productLists);
    } else {
      this.listData = new MatTableDataSource(this.brandModelBaseProductLists);
    }
  }

  // Value changes Control..
  onItemBrandChange(event: any) {
    // this.productBrand = event;
  }

  onItemModelChange(event: any) {
    // this.productModel = event;
  }

  onItemColorChange(event: any) {
    // this.productColor = event;
  }


  closePanel(e): void {
    e.stopPropagation();
    // this.auto3.close();
  }

  openPanel(e): void {
    e.stopPropagation();
    // this.auto3.open();
  }


}
