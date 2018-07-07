package com.products.barcodes.scanners.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.products.barcodes.scanners.model.Company;
import com.products.barcodes.scanners.repositories.CompanyRepository;
import com.products.barcodes.scanners.services.CompanyService;

@RestController
public class AdminController {

	@Autowired
	CompanyRepository companyRepository;
	
	@Autowired
	CompanyService companyService;
	
	/**
	 * Method that returns all the companies
	 * @return list of all companies
	 */
	@CrossOrigin(origins = "http://localhost:8080")
	@RequestMapping(method=RequestMethod.GET, value="/companyDetails", produces = MediaType.APPLICATION_JSON_VALUE)
	public Iterable<Company> companyDetails() {
		return companyService.findAll();
	}
}
