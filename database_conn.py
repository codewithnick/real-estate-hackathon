from pymongo import MongoClient
from get_cred import *
def get_database():
    CONNECTION_STRING = get_creds("mongo_connection_string")
    client = MongoClient(CONNECTION_STRING)
    return client['propkart']
  
if __name__ == "__main__":   
   dbname = get_database()
   property_collection=dbname["property"]
   #item_1 = {"_id" : "U1IT00001","item_name" : "Blender","max_discount" : "10%","batch_number" : "RR450020FRG","price" : 340,"category" : "kitchen appliance"}
   #item_2 = {"_id" : "U1IT00002","item_name" : "Egg","category" : "food","quantity" : 12,"price" : 36,"item_description" : "brown country eggs"}
   #property_collection.insert_many([item_1,item_2])