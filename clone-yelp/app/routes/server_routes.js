module.exports = function(app,yelp,CircularJSON) {

    app.get('/breakfast', (req, res) => {
       yelp.search("term=breakfast&location=Sunnyvale")
           .then(function(result){
                result = CircularJSON.stringify(result);
                res.json(result);
            }).catch(function(error){
                error = CircularJSON.stringify(error);
                res.json(error);
            });
    });

    app.get('/coffee', (req, res) => {
           yelp.search("term=coffee&location=Sunnyvale")
               .then(function(result){
                    result = CircularJSON.stringify(result);
                    res.json(result);
                }).catch(function(error){
                    error = CircularJSON.stringify(error);
                    res.json(error);
                });
    });
};