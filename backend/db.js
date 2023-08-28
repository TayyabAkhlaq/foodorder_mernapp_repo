const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://tayyabakhlaq680:foodorder@cluster0.ubtj8on.mongodb.net/foodorder';

const dbFunction = async () => {
    try {
      await mongoose.connect(connectionString);
      console.log('Connected!');

      let fetched_data = mongoose.connection.db.collection("fooditems");
      let data=await fetched_data.find({}).toArray() 
      global.fooditems = data;

      let foodcategory = mongoose.connection.db.collection("foodcategory");
      let categorydata=await foodcategory.find({}).toArray() 
      global.foodcategory = categorydata;

      console.log(global.fooditems);
      console.log(global.foodcategory);
    } catch (error) {
      console.log('err: ', error);
    }
  };

module.exports = dbFunction;
