# api_1955  
an api server which returns json data of people who were born in 1955. User can use new/remove in url.  
GET '/' will serve up the full collection of people born in 1955  
GET '/new/:name/' will add a name into the database. can be used for blank spaces, so adding Steve Jobs to our database, 
you'd type in the URL 'localhost:8000/new/Steve Jobs'  
GET '/remove/:name/' will delete a name from the database.  
----------------------------------------------------------
update:
Now this app is a full MEAN(MongoDB,Express,Angular,NodeJS) app.  
Users can view/add/remove data which stored in a MongoDB.  
