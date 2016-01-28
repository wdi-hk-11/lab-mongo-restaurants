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

## Hamburgers

1. You are hungry and feel like having a hamburger. Find the number of restaurants listed `Hamburgers` as their main `cuisine`.
1. Geez, there are way too many of them. Let's narrow down our search. You are in Manhattan right now so let's find how many restaurants listed `Hamburgers` as their main `cuisine` in `Manhattan`.
1. Let's have something nice and get rid of `McDonals's` in the results. Find how many restaurants listed `Hamburgers` as their main `cuisine` in `Manhattan` *and* exclude `Mcdonald`.
1. Hmm... we are getting closer. Let's also get rid of `Burger King` as well.
1. There are still plenty of choices. Maybe you should just pick one closer to your home. Find out the list of `distinct` `street` based on the results of Question 4.
1. Alright, you are just a block away from `Pearl Street`. Enhance the query in Question 4 using the `street` value in the `address` attribute. Also please display the name of the restaurant *ONLY* in the result. Your query should now yield exactly *one* restaurant. What is it?


