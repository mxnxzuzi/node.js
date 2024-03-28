const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://iaki111:1234@cluster0.nkguhe1.mongodb.net/test?retryWrites=true&w=majority';

const client = new MongoClient(url, {useNewUrlParser: true});

async function main() {
    try {
        await client.connect();
        console.log('MongoDB 접속 성공');

        const collection = client.db('test').collection('person');

        await collection.insertOne({name: 'Minju', age: 20});
        console.log("문서 추가 완료");

        const documents = await collection.find({name: 'Minju'}).toArray();
        console.log("찾은 문서: ", documents);

        await collection.updateOne({name : 'Minju'}, { $set: {age: 19 }});
        console.log("문서 업데이트");

        const updatedDocuments = await collection.find({name: 'Minju'}).toArray();
        console.log("갱신된 문서: ", updatedDocuments);

        // await collection.deleteOne({name: 'Minju'});
        // console.log("문서 삭제");

        await client.close();
    } catch(err) {
        console.log(err);
    }
}
main();