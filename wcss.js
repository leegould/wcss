Teams = new Meteor.Collection('teams');
Leagues = new Meteor.Collection('leagues');
UserLeagues = new Meteor.Collection('userleagues');

if (Meteor.isClient) {
  // Template.hello.greeting = function () {
  //   return "Welcome to wcss.";
  // };

  // Template.hello.events({
  //   'click input': function () {
  //     // template data, if any, is available in 'this'
  //     if (typeof console !== 'undefined')
  //       console.log("You pressed the button");
  //   }
  // });
  Template.myteam.helpers({
    team: function() {
      var team = {
        name : "test"
      };
      return team;
    }
  });

  Template.allteams.helpers({
    team: function() {
      return Teams.find();
    }
  })

  Template.myleagues.helpers({
    league: function() {
      if (Meteor.userId())
      {
        var leaguesarr = [];
        var userLeagues = UserLeagues.find({userid : Meteor.userId()}, {leagueid: true, _id: false}).forEach(function(userleague, index, cursor){
          leaguesarr.push(userleague.leagueid);
        });
        console.log(leaguesarr);
        return Leagues.find({_id : { $in: leaguesarr }});
      }
    }
  });

  Template.addleague.events({
    'click #addLeague' : function(e){
      e.preventDefault();
      var leaguename = $('#league').val();

      var leagueid = Leagues.insert({ name : leaguename });
      UserLeagues.insert({ userid : Meteor.userId(), leagueid : leagueid });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    if (Teams.find().count() === 0)
    {
      Teams.insert({ name : 'England' });
      Teams.insert({ name : 'Belgium' });
      Teams.insert({ name : 'Netherlands' });
      Teams.insert({ name : 'Germany' });
      Teams.insert({ name : 'France' });
      Teams.insert({ name : 'Switzerland' });
      Teams.insert({ name : 'Croatia' });
      Teams.insert({ name : 'Spain' });
      Teams.insert({ name : 'Portugal' });
      Teams.insert({ name : 'Italy' });
      Teams.insert({ name : 'Bosnia and Herzegovina' });
      Teams.insert({ name : 'Greece' });
      Teams.insert({ name : 'USA' });
      Teams.insert({ name : 'Mexico' });
      Teams.insert({ name : 'Honduras' });
      Teams.insert({ name : 'Costa Rica' });
      Teams.insert({ name : 'Columbia' });
      Teams.insert({ name : 'Russia' });
      Teams.insert({ name : 'Japan' });
      Teams.insert({ name : 'Iran' });
      Teams.insert({ name : 'Australia' });
      Teams.insert({ name : 'Korea Republic' });
      Teams.insert({ name : 'Algeria' });
      Teams.insert({ name : 'Cameroon' });
      Teams.insert({ name : "Côte D'Ivoire" });
      Teams.insert({ name : 'Ghana' });
      Teams.insert({ name : 'Nigeria' });
      Teams.insert({ name : 'Argentina' });
      Teams.insert({ name : 'Brazil' });
      Teams.insert({ name : 'Chile' });
      Teams.insert({ name : 'Ecuador' });
      Teams.insert({ name : 'Uruguay' });
    }
  });
}
