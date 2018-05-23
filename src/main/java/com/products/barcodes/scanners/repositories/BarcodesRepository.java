package com.products.barcodes.scanners.repositories;

import org.springframework.data.repository.CrudRepository;

import com.products.barcodes.scanners.model.Company;

public interface BarcodesRepository extends CrudRepository<Company, String> {

}
