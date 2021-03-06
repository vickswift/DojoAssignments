//Poll factory
app.factory('pollFactory', function($http){
    var factory = {};
    var that = this;

    factory.index = function(callback){
        $http.get('/polls').then(function(output){
            polls = output;
            callback(polls);
        })
    }

    factory.create = function(poll, callback){
        $http.post('/polls/new', poll).then(function(output){
            callback(output)
        })
    }

    factory.show = function(id, callback){
        console.log(id);
        $http.get('/polls/show/' + id).then(function(output){
            that.poll = output;
            callback(that.poll);
        })
    }

    factory.getPoll = function(){
        console.log(that.poll);
        return that.poll;
    }

    factory.vote = function(thePoll){
        var id = thePoll._id;
        $http.post('/polls/vote/' + id, thePoll).then(function(output){
            console.log(output)
            that.poll = output;
        })
    }

    factory.delete = function(id){
        $http.post('/polls/delete/' + id).then(function(output){
            console.log(output);
        })
    }

    return factory;
})
