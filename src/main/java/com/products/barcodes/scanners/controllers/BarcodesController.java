package com.products.barcodes.scanners.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.products.barcodes.scanners.model.Barcodes;
import com.products.barcodes.scanners.repositories.BarcodesRepository;
import com.products.barcodes.scanners.services.BarcodesService;

/**
 * Controller for dealing with barcodes
 * @author santoshsubrahmanya
 *
 */

@RestController
public class BarcodesController {
	
	@Autowired
	BarcodesRepository barcodesRepository;
	
	@Autowired
	BarcodesService barcodesService;
	
	
	/**
	 * Method that returns all the companies
	 * @return list of all companies
	 */
	@CrossOrigin(origins = "http://localhost:8080")
	@RequestMapping(method=RequestMethod.GET, value="/fetchBarCodes", produces = MediaType.APPLICATION_JSON_VALUE)
	public Iterable<Barcodes> fetchBarCodes(String company) {
		return barcodesService.getAllBarcodes(company);
	}
	

}
