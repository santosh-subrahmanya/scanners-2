package com.products.barcodes.scanners.repositories;

import com.products.barcodes.scanners.model.Company;
import org.springframework.data.repository.CrudRepository;

public interface CompanyRepository extends CrudRepository<Company, String> {
	
    //Company findOne(String id);

    @Override
    void delete(Company id);

}
