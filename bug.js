```javascript
const query = {
  $expr: {
    $gt: [ { $toDouble: '$price' }, 100 ] //This will throw an error if the 'price' field is not a number or is missing
  }
};
db.collection.find(query); 
```