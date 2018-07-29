export class Barcode {
    id : string;
    productCategory : string;
    productName: string;
    productDescription: string;
    productImageUrl: string;
    barcodeImageUrl: string;
    company: string;
    archived: boolean;

    constructor(public _id: string, public _productCategory, public _productName,
        public _productDescription, public _productImageUrl, public _barcodeImageUrl,
        public _company, public _archived) {

    }
    
}