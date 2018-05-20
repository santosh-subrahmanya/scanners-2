package com.products.barcodes.scanners.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.products.barcodes.scanners.model.Company;
import com.products.barcodes.scanners.repositories.CompanyRepository;
import com.products.barcodes.scanners.services.CompanyService;

@Component
public class CompanyServiceImpl implements CompanyService {
	
	@Autowired
	CompanyRepository companyRepository;

	@Override
	public List<Company> findAll() {
		return (List<Company>) companyRepository.findAll();
	}

	
}
