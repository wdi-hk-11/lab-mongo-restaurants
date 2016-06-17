db.restaurants.distinct('cuisine').sort();

db.restaurants.distinct('cuisine', {"address.zipcode": "11414", "address.street": "Cross Bay Boulevard"})

db.restaurants.distinct("name", {"cuisine" : {$regex : /pizza/i },"name" : {$not: /pizz.*/i }})

// db.restaurants.find({   cuisine: /Pizza/,   borough: 'Queens',   'grades.grade': { $nin: ["B", "Z", "C", "P", "Not Yet Graded"] } },{_id: 0, name: 1})

db.restaurants.distinct( 'name', {   cuisine: /Pizza/,   borough: 'Queens',   'grades.grade': 'A'  })

db.restaurants.distinct( 'name', {   cuisine: /Hamburger/  })

/db.restaurants.distinct( 'name', {   cuisine: /Hamburger/, borough: /Manhattan/  })

db.restaurants.count({cuisine: /Hamburger/, borough: /Manhattan/, "name": {$ne: /Macdonald/ })

// db.restaurants.count({   cuisine: 'Hamburgers',   borough: 'Manhattan',   name: { $ne: 'Mcdonald\'S' } })

db.restaurants.count({   cuisine: 'Hamburgers',   borough: 'Manhattan',   $and : [     { name: { $nin: [/Mcdonald/] } },     { name: { $ne: 'Burger King' } }   ] })

//db.restaurants.count({   cuisine: 'Hamburgers',   borough: 'Manhattan',   $and : [     { name: { $nin: [/Mcdonald/] } },     { name: { $ne: 'Burger King' } }   ] })

db.restaurants.find({   cuisine: 'Hamburgers',   'address.street': 'Pearl Street', }, {_id:0, name:1})
{ "name" : "Burger Burger" }

db.restaurants.find({   cuisine: 'Japanese',   grades: { $size: 9 } },{_id: 0, name: 1})