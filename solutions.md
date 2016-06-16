# Solutions

## Warming up

### Question 1
```javascript
db.restaurants.distinct('cuisine').sort()
```

### Question 2
```javascript
db.restaurants.distinct('cuisine', {'address.zipcode': '11414', 'address.street': 'Cross Bay Boulevard'})
```

### Question 3
```javascript
db.restaurants.find({name: /^Willie(.*)Steak House$/},{_id: 0, name:1, address:1})
```

## Pizza

### Question 1
```javascript
db.restaurants.find({
  cuisine: /Pizza/,
  name: { $nin: [/Pizza/,/Pizzeria/] }
},{_id: 0, name:1})
```

### Question 2
```javascript
db.restaurants.find({
  cuisine: /Pizza/,
  borough: 'Queens',
  'grades.grade': { $nin: ["B", "Z", "C", "P", "Not Yet Graded"] }
},{_id: 0, name: 1})
```

## Hamburgers

### Question 1
```javascript
db.restaurants.count({
  cuisine: 'Hamburgers'
})
```

### Question 2
```javascript
db.restaurants.count({
  cuisine: 'Hamburgers',
  borough: 'Manhattan'
})
```

### Question 3
```javascript
db.restaurants.count({
  cuisine: 'Hamburgers',
  borough: 'Manhattan',
  name: { $nin: [/Mcdonald/] }
})
```

The query below cannot filter all `McDonald's` because sometimes it was written as `Mcdonalds` in the data.
```javascript
db.restaurants.count({
  cuisine: 'Hamburgers',
  borough: 'Manhattan',
  name: { $ne: 'Mcdonald\'S' }
})
```

### Question 4
``` javascript
db.restaurants.count({
  cuisine: 'Hamburgers',
  borough: 'Manhattan',
  $and : [
    { name: { $nin: [/Mcdonald/] } },
    { name: { $ne: 'Burger King' } }
  ]
})
```

### Question 5
```javascript
db.restaurants.distinct('address.street',
  {
    cuisine: 'Hamburgers',
    borough: 'Manhattan',
    $and : [
      { name: { $nin: [/Mcdonald/] } },
      { name: { $ne: 'Burger King' } }
    ]
  }
)
```

### Question 6
```javascript
db.restaurants.find({
  cuisine: 'Hamburgers',
  'address.street': 'Pearl Street',
},{ _id: 0, name: 1 })
```

## Hard

### Question 1
```javascript
db.restaurants.find({
  cuisine: 'Japanese',
  grades: { $size: 9 }
},{_id: 0, name: 1})
```

```javascript
db.restaurants.find({
  cuisine: 'Japanese',
  'grades.8': {$exists: true}
}, {_id: 0, name: 1})
```

