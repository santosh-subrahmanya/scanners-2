package com.products.barcodes.scanners.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="barcodes")
public class Barcodes {
	
	private String id;
	private String productProductCategery;
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
	
	public String getProductProductCategery() {
		return productProductCategery;
	}
	
	public void setProductProductCategery(String productProductCategery) {
		this.productProductCategery = productProductCategery;
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
