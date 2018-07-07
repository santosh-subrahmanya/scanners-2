package com.products.barcodes.scanners.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.products.barcodes.scanners.model.Company;
import com.products.barcodes.scanners.repositories.CompanyRepository;
import com.products.barcodes.scanners.services.CompanyService;

@RestController
public class CompanyController {
	
	@Autowired
	CompanyRepository companyRepository;
	
	@Autowired
	CompanyService companyService;
	
	/**
	 * Method that returns all the companies
	 * @return list of all companies
	 */
	@CrossOrigin(origins = "http://localhost:8080")
	@RequestMapping(method=RequestMethod.GET, value="/company", produces = MediaType.APPLICATION_JSON_VALUE)
	public Iterable<Company> company() {
		return companyService.findAll();
	}
	
	/**
	 * Method that saves and returns the saved instance of the company
	 * @param company
	 * @return
	 */
	@RequestMapping(method=RequestMethod.POST, value="company")
	public Company save(@RequestBody Company company) {
		return companyService.save(company);
	}
	

	@RequestMapping(method=RequestMethod.GET, value="/company/{id}")
	public Optional<Company> show(@PathVariable String id) {
		return companyRepository.findById(id);
	}
}
