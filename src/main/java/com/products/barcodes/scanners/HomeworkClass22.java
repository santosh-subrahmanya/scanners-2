package com.products.barcodes.scanners;

import java.util.ArrayList;
import java.util.List;

import org.bson.BsonDocument;
import org.bson.Document;
import org.bson.conversions.Bson;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientOptions;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Sorts;

public class HomeworkClass22 {
	
	public static void main (String args[]) {
		MongoClientOptions options = MongoClientOptions.builder().connectionsPerHost(100).build();
		MongoClient mongo = new MongoClient(new MongoClientURI("mongodb://localhost:27017"));
		
		MongoDatabase database = mongo.getDatabase("students");
		MongoCollection<BsonDocument> collection = database.getCollection("grades", BsonDocument.class);
		
		Document doc = new Document();
		Bson filter = Filters.gte("score", 65);
		Bson sort = Sorts.ascending("score");
		// System.out.println("Total Number of documents in grades collection is :"+collection.count());
		
		List<BsonDocument> document = collection.find(filter)
				//.projection(projection)
				.sort(sort)
				.into(new ArrayList<BsonDocument>());
		for(BsonDocument docs : document) {
			System.out.println(docs);
			//printJson(docs);
		}
		

	}

}
