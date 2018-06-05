package com.products.barcodes.scanners.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import com.products.barcodes.scanners.ApplicationConstants;
import com.products.barcodes.scanners.model.Barcode;
import com.products.barcodes.scanners.model.Company;
import com.products.barcodes.scanners.repositories.BarcodesRepository;
import com.products.barcodes.scanners.services.BarcodesService;

@Component
public class BarcodesServiceImpl implements BarcodesService {
	
	@Autowired
	BarcodesRepository barcodesRepository;
	
	@Autowired
	MongoTemplate mongoTemplate;

	@Override
	public List<Barcode> getAllBarcodes(String companyName, String category) {
		Query query = new Query();
		query.addCriteria(Criteria.where(ApplicationConstants.COMPANY).is(companyName));
		if(!category.equals(ApplicationConstants.ALL)) {
			query.addCriteria(Criteria.where(ApplicationConstants.CATEGORY).is(category));
		}
		return (List<Barcode>) mongoTemplate.find(query, Barcode.class);
	}
	
	

}
