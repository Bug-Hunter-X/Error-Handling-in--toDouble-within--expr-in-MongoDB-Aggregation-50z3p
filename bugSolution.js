```javascript
const query = {
  $expr: {
    $gt: [ {
      $toDouble: {
        $ifNull: [ '$price', 0 ] // Handle missing price, use 0 as default
      }
    }, 100 ]
  },
  $and: [{
    $expr: {
      $eq: [{
        $type: "$price"
      }, 1 ]
    }
  }] // Check if the field is a number before conversion
};
db.collection.find(query);
```