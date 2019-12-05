import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {MatAutocomplete, MatAutocompleteSelectedEvent, MatAutocompleteTrigger} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ProductModel} from '../model/product-model';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.page.html',
  styleUrls: ['./purchase.page.scss'],
})
export class PurchasePage implements OnInit {
  purchaseForm: FormGroup;
  @ViewChild(MatAutocomplete, {static: false}) autoComplete: MatAutocomplete;
  @ViewChild(MatAutocompleteTrigger, {static: false}) trigger: MatAutocompleteTrigger;
  // For reset form with no error..
  @ViewChild('formDirective', { static: true }) private formDirective: NgForm;
  // Main Form data..
  brand = new FormControl('', {validators: [Validators.required]});
  model = new FormControl('', {validators: [Validators.required]});
  cc = new FormControl('', {validators: [Validators.required]});
  color = new FormControl('', {validators: [Validators.required]});
  engine = new FormControl('', {validators: [Validators.required]});
  chassis = new FormControl('', {validators: [Validators.required]});
  lc = new FormControl('', {validators: [Validators.required]});
  receivedDate = new FormControl('', {validators: [Validators.required]});
  costPrice = new FormControl('', {validators: [Validators.required]});
  unitPrice = new FormControl('', {validators: [Validators.required]});

  // Auto Complete...
  filteredBrandItems: Observable<ProductModel[]>;
  filteredModelItems: Observable<ProductModel[]>;
  filteredCcItems: Observable<ProductModel[]>;
  filteredColorItems: Observable<ProductModel[]>;
  filteredCostPriceItems: Observable<ProductModel[]>;
  filteredUnitPriceItems: Observable<ProductModel[]>;

  // Main Product Item Array...
  items: ProductModel[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // Get All Product form Service..
    this.items = this.productService.getAllProduct();
    this.productService.productItemChange
        .subscribe((productItems: ProductModel[]) => {
          this.items = productItems;
        });

    // Main reactive form..
    this.purchaseForm = new FormGroup({
      brand: this.brand,
      model: this.model,
      cc: this.cc,
      color: this.color,
      engine: this.engine,
      chassis: this.chassis,
      lc: this.lc,
      receivedDate: this.receivedDate,
      costPrice: this.costPrice,
      unitPrice: this.unitPrice,
    });

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

    this.filteredColorItems = this.color.valueChanges
        .pipe(
            startWith(''),
            map((value) => this._filterColor(value))
        );

    this.filteredCostPriceItems = this.costPrice.valueChanges
        .pipe(
            startWith(''),
            map((value) => this._filterCostPrice(value))
        );

    this.filteredUnitPriceItems = this.unitPrice.valueChanges
        .pipe(
            startWith(''),
            map((value) => this._filterUnitPrice(value))
        );
  }

// Main On Submit...
  onPurchaseSubmit() {
    // this.items.push(this.purchaseForm.value);

    const item: ProductModel = {
      _id: null,
      brand: this.purchaseForm.value.brand,
      model: this.purchaseForm.value.model,
      cc: this.purchaseForm.value.cc,
      color: this.purchaseForm.value.color,
      engine: this.purchaseForm.value.engine,
      chassis: this.purchaseForm.value.chassis,
      lc: this.purchaseForm.value.lc,
      receivedDate: this.purchaseForm.value.receivedDate,
      costPrice: this.purchaseForm.value.costPrice,
      unitPrice: this.purchaseForm.value.unitPrice
    };

    this.productService.addNewProduct(item);
    console.log(this.purchaseForm.value);
    this.formDirective.resetForm();

  }

  // filterStates(name: string) {
  //   return this.items;
  // }

  // Value return with type..
  private _filterBrand(value: string): any[] {
    if (value === null) {
      return this.items.filter(item => item.brand.toLowerCase());
    }
    const filterValue = value.toLowerCase();
    return this.items.filter(item => item.brand.toLowerCase().includes(filterValue));
  }

  private _filterModel(value: string): any[] {
    if (value === null) {
      return this.items.filter(item => item.model.toLowerCase());
    }
    const filterValue = value.toLowerCase();
    return this.items.filter(item => item.model.toLowerCase().includes(filterValue));
  }

  private _filterCc(value: string): any[] {
    if (value === null) {
      return this.items.filter(item => item.cc.toLowerCase());
    }
    const filterValue = value.toLowerCase();
    return this.items.filter(item => item.cc.toLowerCase().includes(filterValue));
  }

  private _filterColor(value: string): any[] {
    if (value === null) {
      return this.items.filter(item => item.color.toLowerCase());
    }
    const filterValue = value.toLowerCase();
    return this.items.filter(item => item.color.toLowerCase().includes(filterValue));
  }

  private _filterCostPrice(value: number): any[] {
    if (value === null) {
      return this.items.filter(item => item.costPrice);
    }
    const filterValue = value.toString();
    return this.items.filter(item => item.costPrice.toString().includes(filterValue));
  }

  private _filterUnitPrice(value: number): any[] {
    if (value === null) {
      return this.items.filter(item => item.unitPrice);
    }
    const filterValue = value.toString();
    return this.items.filter(item => item.unitPrice.toString().includes(filterValue));
  }


  selectionMade(event: Event) {
    // event.stopPropagation();
    // this.trigger.openPanel();
  }

  onSelect(event: MatAutocompleteSelectedEvent) {
    // console.log(event.option.value);
  }

}
