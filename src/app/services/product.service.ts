import {EventEmitter, Injectable} from '@angular/core';
import {ProductModel} from '../model/product-model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productItemChange = new EventEmitter<ProductModel[]>();
 productItems: ProductModel[] = [
  {
    _id: null,
    brand: 'Toyota',
    model: 'Corolla Altis',
    cc: '1798',
    color: 'Black',
    engine: '5',
    chassis: 'Petrol',
    lc: '470',
    receivedDate: new Date(2019, 7, 13),
    costPrice:  1350000,
    unitPrice:  1555000
  },
  {
    _id: null,
    brand: 'Toyota',
    model: 'Etios Liva',
    cc: '1364',
    color: 'Red',
    engine: '5',
    chassis: 'Petrol',
    lc: '350',
    receivedDate: new Date(2019, 7, 13),
    costPrice:  830000,
    unitPrice:  865000
  },
  {
    _id: null,
    brand: 'Toyota',
    model: 'Prius',
    cc: '1798',
    color: 'Blue',
    engine: '5',
    chassis: 'Petrol',
    lc: '480',
    receivedDate: new Date(2019, 6, 8),
    costPrice:  2500000,
    unitPrice:  2595000
  },
  {
    _id: null,
    brand: 'Hyundai',
    model: 'Elite i20',
    cc: '1396',
    color: 'Deep Blue',
    engine: '5',
    chassis: 'Petrol',
    lc: '88',
    receivedDate: new Date(2019, 5, 23),
    costPrice:  620000,
    unitPrice:   665000
  },
   {
     _id: null,
     brand: 'Nissan',
     model: 'GT-R',
     cc: '3798',
     color: 'Orange',
     engine: '5',
     chassis: 'Petrol',
     lc: '572',
     receivedDate: new Date(2019, 6, 8),
     costPrice:   12000000,
     unitPrice:  12350000
   },
   {
     _id: null,
     brand: 'Audi',
     model: 'Q7',
     cc: '2967',
     color: 'Silver',
     engine: '7',
     chassis: 'Petrol',
     lc: '248',
     receivedDate: new Date(2019, 5, 23),
     costPrice: 7500000,
     unitPrice:   7650000
   }
];

  constructor(private httpClient: HttpClient) { }

  getAllProduct() {
    return [...this.productItems];
    // return this.productItem;
  }

  addNewProduct(item: ProductModel) {
    this.productItems.push(item);
    this.productItemChange.emit([...this.productItems]);
  }
}
