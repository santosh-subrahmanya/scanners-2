package com.products.barcodes.scanners.repositories;

import com.products.barcodes.scanners.model.Company;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface CompanyRepository extends MongoRepository<Company, String> {
	
    //Company findOne(String id);

    @Override
    void delete(Company id);

}
