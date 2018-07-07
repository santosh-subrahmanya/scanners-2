package com.products.barcodes.scanners.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.CrudRepository;

import com.products.barcodes.scanners.model.Company;

public interface BarcodesRepository extends MongoRepository<Company, String> {

}
