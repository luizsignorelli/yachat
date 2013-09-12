Messages = new Meteor.Collection('messages');

if (Meteor.isClient) {

  Template.chat.events({
    'submit form' : function (e, template) {
      e.preventDefault();
      Messages.insert({
        value: template.find("textarea").value,
        username: Session.get("username")
      });
      template.find("textarea").value = "";
      template.find("textarea").focus();
    },
    'click #register': function(){
      Session.set("username", $("#username").val())
      // alert("Galo");
    }
  });

  Template.chat.registred = function(){
    return Session.get("username");
  }

  Template.messages.messages = function(){
    return Messages.find({});
  }
  Template.messages.registred = function(){
    return Session.get("username");
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
