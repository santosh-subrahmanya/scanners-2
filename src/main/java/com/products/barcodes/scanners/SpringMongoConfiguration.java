package com.products.barcodes.scanners;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoDbFactory;

import com.mongodb.MongoClient;

@Configuration
public class SpringMongoConfiguration {
	
	@Value("${spring.data.mongodb.host}")
	protected String mongoDB;
	
	@Value("${spring.data.mongodb.database}")
	protected String mongoDatabaseName;

//	@Override
//	public MongoClient mongoClient() {
//		System.out.println("****** MongoDB database client is ****"+mongoDB);
//		return new MongoClient(mongoDB);
//	}
//
//	@Override
//	protected String getDatabaseName() {
//		System.out.println("****** MongoDB database name is ****"+mongoDatabaseName);
//		return mongoDatabaseName;
//	}
	
	public @Bean
	MongoDbFactory mongoDbFactory() throws Exception {
		return new SimpleMongoDbFactory(new MongoClient(), mongoDatabaseName);
	}

	public @Bean
	MongoTemplate mongoTemplate() throws Exception {
		MongoTemplate mongoTemplate = new MongoTemplate(mongoDbFactory());
		return mongoTemplate;
	}

}
