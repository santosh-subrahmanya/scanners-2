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
import com.mongodb.client.model.Filters.*;
import com.mongodb.client.model.Projections;
import com.mongodb.client.model.Sorts;
import com.mongodb.client.model.Updates;

public class MongClientClass {
    public static void main(String[] args){
		MongoClientOptions options = MongoClientOptions.builder().connectionsPerHost(100).build();
		MongoClient mongo = new MongoClient(new MongoClientURI("mongodb://localhost:27017"));
		
		MongoDatabase database = mongo.getDatabase("video");
		MongoCollection<BsonDocument> collection = database.getCollection("movies", BsonDocument.class);
		
		Document doc = new Document();
		System.out.println("Total Number of documents in movides collection is :"+collection.count());
		
//		BsonDocument document = collection.find().first();
//		System.out.println(document.toJson());
		
		//Bson filter = new Document("director", "William K.L. Dickson");
		//Bson filter = Filters.and(Filters.eq("director", "William K.L. Dickson"), Filters.eq("title" , "A Watermelon Feast"));
		Bson filter = Filters.eq("director", "William K.L. Dickson");

		//Bson projection = new Document("_id", 0);
		Bson projection = Projections.exclude("_id");
		
		// Sort
		//Bson sort = new Document("year", 1);
		Bson sort = Sorts.ascending("year");
		
		List<BsonDocument> document = collection.find(filter)
				.projection(projection)
				.sort(sort)
				.into(new ArrayList<BsonDocument>());
		for(BsonDocument docs : document) {
			System.out.println(docs);
			//printJson(docs);
		}
		
		// Document update
//		collection.updateOne(Filters.eq("title", "Chinese Opium Den"), Updates.set("updated", true));
//		Bson newFilter = Filters.eq("title", "Chinese Opium Den");
//		List<BsonDocument> udpatedDoc = collection.find(newFilter).into(new ArrayList<BsonDocument>());
//		for(BsonDocument docs : udpatedDoc) {
//			System.out.println("Updated doc is :"+docs);
//			//printJson(docs);
//		}
		//System.out.println(udpatedDoc);
		
		//collection.find(Filters.gte("score", 65), Updates.set("updated", true));
		Bson newFilter = Filters.gte("score", 65);
		List<BsonDocument> udpatedDoc = collection.find(newFilter).into(new ArrayList<BsonDocument>());
		for(BsonDocument docs : udpatedDoc) {
			System.out.println("Filtered doc is :"+docs);
			//printJson(docs);
		}
		

	}

}
