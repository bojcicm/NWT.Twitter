import {Component} from "angular2/core"
import {Hashtag as HashtagModel} from "../../Model/Hashtag"
import {Tweet as TweetModel} from "../../Model/Tweet"
import {User as UserModel} from "../../Model/User"
import {TweetsList} from "../TweetList/TweetsList"
import {Trends} from "../Trends/Trends"
import {UserInfo} from "../UserInfo/UserInfo"
import {ProfileBox} from "../ProfileBox/ProfileBox"
import {Search} from "../Search/Search"
import {ContainsPipe} from "../../Pipes/ContainsPipe"


@Component({
    selector: "hashtag",
    directives: [TweetsList, Trends, UserInfo, ProfileBox, Search],
    pipes: [ContainsPipe],
    templateUrl:"./app/Components/Hashtag/Hashtag.html"
})

export class Hashtag {
    public currentHashtag: HashtagModel;
    public twetsWithHashtag: TweetModel[];
    /*Universal data part*/
    public hashtags: HashtagModel[];
    public tweets: TweetModel[];
    public users: UserModel[];
    public currentUser: UserModel;
    public notFavourited: TweetModel[];
    public notFollowing: UserModel[];
    private searchKey: string;

    constructor() {
        this.searchKey = "";
        this.hashtags = [
            new HashtagModel("#hashtag_trend1"),
            new HashtagModel("#hashtag_trend2"),
            new HashtagModel("#hashtag_trend3"),
            new HashtagModel("#hashtag_trend4"),
            new HashtagModel("#hashtag_trend5"),
            new HashtagModel("#hashtag_trend6"),
        ];

        this.users = [
            new UserModel("Ime", "Prezime", "Nickname", "imeprezime@gmail.com", "Password.1", "/Content/Users/User1.png"),
            new UserModel("Ime2", "Prezime2", "Nickname2", "ime2prezime2@gmail.com", "Password.2", "/Content/Users/User3.png"),
            new UserModel("Ime3", "Prezime3", "Nickname3", "ime3prezime3@gmail.com", "Password.3", "/Content/Users/User2.png"),
            new UserModel("Ime4", "Prezime4", "Nickname4", "ime4prezime4@gmail.com", "Password.4", "/Content/Users/User4.png"),
        ];

        this.users[0].following = [this.users[2], this.users[1]];
        this.users[1].following = [this.users[2]];
        this.users[2].following = [this.users[3], this.users[1], this.users[0]];
        this.users[3].following = [this.users[2], this.users[1]];

        this.tweets = [
            new TweetModel(this.users[0], new Date(2015, 12, 12), "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", [this.hashtags[0], this.hashtags[4]]),
            new TweetModel(this.users[1], new Date(2015, 12, 10), "Duis malesuada leo justo, eget efficitur ligula varius sed. Suspendisse potenti. Integer imperdiet lobortis leo. Integer ullamcorper iaculis convallis.", [this.hashtags[5], this.hashtags[1], this.hashtags[3]]),
            new TweetModel(this.users[2], new Date(2015, 12, 4), "Aliquam quam quam, dignissim non eros nec, congue scelerisque arcu. Nam ac nibh massa. Suspendisse tristique ante vel ultricies congue. Mauris sagittis nec tortor vitae rutrum.", [this.hashtags[5]]),
            new TweetModel(this.users[0], new Date(2015, 12, 2), "Donec lacinia massa lectus. Sed a tristique odio.", [this.hashtags[3], this.hashtags[4], this.hashtags[1]])
        ];

        this.currentUser = this.users[0];
        this.currentUser.tweets = this.tweets.filter(tweet => tweet.author == this.currentUser);
        this.currentUser.favourites = [this.tweets[1], this.tweets[2]];

        this.notFavourited = [];

        this.tweets.forEach(tweet=> {
            if (this.currentUser.favourites.indexOf(tweet) == -1)
                this.notFavourited.push(tweet);
        });

        this.notFollowing = [];

        this.users.forEach(user=> {
            if (user != this.currentUser && this.currentUser.following.indexOf(user) == -1)
                this.notFollowing.push(user);
        });
        /*Universal data part-end*/

        this.currentHashtag = this.hashtags[1]; 

        this.twetsWithHashtag = [];

        this.tweets.forEach(tweet=> {
            tweet.hashtags.forEach(hashtag=> {
                if (hashtag == this.currentHashtag)
                    this.twetsWithHashtag.push(tweet);
            });
        });
    }

    private onPutFavourited(favourite: TweetModel): void {
        this.currentUser.favourites.push(favourite);
    }

    private onRemoveFavourited(favourite: TweetModel): void {
        var index = this.currentUser.favourites.indexOf(favourite);
        if (index != -1) {
            this.currentUser.favourites.splice(index, 1);
        }
    }

    private onSearchKeyUpdate(data: string): void {
        this.searchKey = data;
    }
}