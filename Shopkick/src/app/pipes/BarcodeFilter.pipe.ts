import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name : "BarcodeFilter",
  pure : false
})

export class BarcodeFilterPipe implements PipeTransform {
  transform() {

  }
}