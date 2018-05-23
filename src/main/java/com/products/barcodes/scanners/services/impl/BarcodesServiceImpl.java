package com.products.barcodes.scanners.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import com.products.barcodes.scanners.ApplicationConstants;
import com.products.barcodes.scanners.model.Barcodes;
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
	public List<Barcodes> getAllBarcodes(String companyName) {
		Query query = new Query();
		query.addCriteria(Criteria.where(ApplicationConstants.COMPANY).is(companyName));
		return (List<Barcodes>) mongoTemplate.find(query, Barcodes.class);
	}
	
	

}