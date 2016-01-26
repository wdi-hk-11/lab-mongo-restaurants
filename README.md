# Lab: Restaurant Primer in MongoDB

## Hungry? Find a restaurant!! 
In this lab, you will practise how to use MongoDb queries to find the most suitable restaurant(s) in the provided dataset.

## Dataset
We will use the [Example Dataset from the MongoDb official web site](https://docs.mongodb.org/getting-started/shell/import-data/). 

1. Fork and Clone this lab repo to your local.
1. [Download](https://raw.githubusercontent.com/mongodb/docs-assets/primer-dataset/dataset.json) the dataset and save it as `primer-dataset.json` in your local repo folder. We have included this file in your `.gitignore` already so it won't be pushed to your own github repo.
1. Make sure your `mongod` is running (if not, run it now!).
1. Run the following command in your repo directory:
```
mongoimport --db test --collection restaurants --drop --file primer-dataset.json
```
1. A successful import will insert all 25359 entries in your DB.

## Your Tasks

1. Write a MongoDB query for each of the scenarios described in the next section.
1. Collect all your queries in a file called `queries.js`.
1. Push `queries.js` to your repo.
1. Submit a pull request to the project repo.

## Scenarios