package com.products.barcodes.scanners.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
public class Product {
	@Id
	private String productId;
	private String productToProductCategory;
	private String productName;
	private String productDescription;
	private String productImageURL;
	private String barcodeImageUrl;
	
	
	public Product(String productId, String productToProductCategory, String productName, String productDescription, String productImageURL, String barcodeImageUrl){
		this.productId = productId;
		this.productToProductCategory = productToProductCategory;
		this.productName = productName;
		this.productDescription = productDescription;
		this.productImageURL = productImageURL;
		this.barcodeImageUrl = barcodeImageUrl;
	}
	
	public String getProductId() {
		return productId;
	}
	
	public void setProductId(String productId) {
		this.productId = productId;
	}
	
	public String getProductToProductCategory() {
		return productToProductCategory;
	}
	
	public void setProductCategory(String productToProductCategory) {
		this.productToProductCategory = productToProductCategory;
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
	
	public String getProductImageURL() {
		return productImageURL;
	}
	
	public void setProductImageURL(String productImageURL) {
		this.productImageURL = productImageURL;
	}

	public String getBarcodeImageUrl() {
		return barcodeImageUrl;
	}

	public void setBarcodeImageUrl(String barcodeImageUrl) {
		this.barcodeImageUrl = barcodeImageUrl;
	}

	public void setProductToProductCategory(String productToProductCategory) {
		this.productToProductCategory = productToProductCategory;
	}
	
}
