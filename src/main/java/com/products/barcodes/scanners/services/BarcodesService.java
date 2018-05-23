package com.products.barcodes.scanners.services;

import java.util.List;

import org.springframework.stereotype.Component;

import com.products.barcodes.scanners.model.Barcodes;

public interface BarcodesService {
	
	List<Barcodes> getAllBarcodes(String companyName);

}
