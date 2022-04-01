import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST'){
        const data = req.body;

        // const { title, image, address, description } = data;

        const client = await MongoClient.connect('mongodb+srv://Tris:Omelette@cluster0.fsu1i.mongodb.net/meetupsDB?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message: 'meetup inserted!'});
    }
}

export default handler;
