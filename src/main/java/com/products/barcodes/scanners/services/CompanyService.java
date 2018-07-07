package com.products.barcodes.scanners.services;

import java.util.List;
import com.products.barcodes.scanners.model.Company;

public interface CompanyService {
	
	List<Company> findAll();
	
	Company save(Company company);

}
