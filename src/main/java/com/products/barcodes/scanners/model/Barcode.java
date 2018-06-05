package com.products.barcodes.scanners.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="barcodes")
public class Barcode {
	
	private String id;
	private String productCategory;
	private String productName;
	private String productDescription;
	private String productImageUrl;
	private String barcodeImageUrl;
	private String company;
	
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public String getProductCategory() {
		return productCategory;
	}
	
	public void seProductCategery(String productCategory) {
		this.productCategory = productCategory;
	}
	
	public String getProductName() {
		return productName;
	}
	
	public void setProductName(String productName) {
		this.productName = productName;
	}
	
	public String getProductDescription() {
		return productDescription;
	}
	
	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}
	
	public String getProductImageUrl() {
		return productImageUrl;
	}
	
	public void setProductImageUrl(String productImageUrl) {
		this.productImageUrl = productImageUrl;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getBarcodeImageUrl() {
		return barcodeImageUrl;
	}

	public void setBarcodeImageUrl(String barcodeImageUrl) {
		this.barcodeImageUrl = barcodeImageUrl;
	}
	
}
