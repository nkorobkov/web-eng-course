### Motivation for Database

- Concurrency Control
- Data Quality Checks, integrity controls
- Efficient Search
- Security
- Scalability
- Reliability

### Using Mongo DB as database

##### Run mongo on you laptop using docker

```shell
# Run the container in the background
docker run --name sigma-mongo -d -p 27017:27017 mongo:4.4

# if your container does not start cause name or port is busy, you can list existing containers
docker ps

# and delete container that is messing things up
docker rm 57fd1a4aeb1ee842075a859649842cbd5

docker stop 57fd1a4aeb1ee842075a859649842cbd5
docker start 57fd1a4aeb1ee842075a859649842cbd5
```


#### Using mongo client configure "database" and collection you would use

Mongo Client 
--> create connection `mongodb://localhost:27017`
--> use new database
--> add collection
--> add documents

#### install library to connect to mongo on your server
```shell
npm install mongodb
```

#### In your javascript connect to the database
```javascript
import mongo from 'mongodb'
// Create a "client" object for general db management
const mongoclient = new mongo.MongoClient('mongodb://localhost:27017')

// Get an object to manage specific *database*
// mongoclient.connect() -- is a promise.
let db;
mongoclient.connect().then(function () {
	db = mongoclient.db('nikitatest');
})
```

#### Add and retrieve documents using mongo client in JS

```javascript

// Insert document to the collection
const collection = db.collection("nikitacollection");
collection.insertOne({
	name: "Nikita",
	note: "Loves databases"
})

// Get all documents from the collection
const collection = db.collection("nikitacollection");
collection.find().toArray().then(function (docs) {
	console.log(docs)
})

// Get all documents with a field set to certain value
collection.find({ name: "Eve" }).toArray().then(function (docs) {
	console.log(docs)
})
```

### More mongo JS client docummentation
https://www.mongodb.com/docs/drivers/node/current/quick-reference/

