package com.products.barcodes.scanners.services;

import java.util.List;

import org.springframework.stereotype.Component;

import com.products.barcodes.scanners.model.Barcode;

public interface BarcodesService {
	
	List<Barcode> getAllBarcodes(String companyName);

}
