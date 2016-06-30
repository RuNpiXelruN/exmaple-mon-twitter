const mongoose = require('../lib/db');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  createdAt: Date,
  updatedAt: Date,
  tweets: [
    {
      text: String,
      isLiked: {type: Boolean, default: false}
  }]
});

userSchema.methods.addTweet = function(text) {
  this.tweets.push({text: text});
  this.save();
}

userSchema.methods.listTweets = function(text) {
  this.tweets.forEach(tweet => {
    console.log('\n');
    console.log(`${this.username} has tweeted ${tweet.text}`);
    console.log('\n');
  })
}

userSchema.methods.countTweets = function(text) {
  console.log('\n');
  console.log(`${this.username} has ${this.tweets.length} tweets`);
}

userSchema.methods.findTweets = function(searchString) {
  return this.tweets.filter(tweet => {
    tweet.text.indexOf(searchString) >=0 ? true : false;
  });
}


const User = mongoose.model('User', userSchema);

module.exports = User;
