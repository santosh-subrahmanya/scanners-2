import {Pipe, PipeTransform} from '@angular/core';
import { Barcode } from '../shared/models/Barcode.model';


@Pipe({
  name : "BarcodeFilter",
  pure : false
})

export class BarcodeFilterPipe implements PipeTransform {
  transform(input: Barcode[], args) {

    var output: Barcode[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].productCategory === args) {
        output.push(input[i]);
      }
    }
    return output;

  }
}