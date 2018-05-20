package com.products.barcodes.scanners.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "product_category")
public class ProductCategory {
	@Id
	private String id;
	private String productCategory;
	private String companyProductCategory;
	
	public ProductCategory(String id, String productCategory, String companyProductCategory) {
		this.id = id;
		this.productCategory = productCategory;
		this.companyProductCategory = companyProductCategory;
	}
	
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public String getProductCategory() {
		return productCategory;
	}
	
	public void setProductCategory(String productCategory) {
		this.productCategory = productCategory;
	}
	
	public String getCompanyProductCategory() {
		return companyProductCategory;
	}
	
	public void setCompanyProductCategory(String companyProductCategory) {
		this.companyProductCategory = companyProductCategory;
	}

}
