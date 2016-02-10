System.register(["angular2/core", "angular2/common", 'angular2/router', "../../Model/User", "../EditProfileForm/EditProfileForm"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, User_1, EditProfileForm_1;
    var EditProfile;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (User_1_1) {
                User_1 = User_1_1;
            },
            function (EditProfileForm_1_1) {
                EditProfileForm_1 = EditProfileForm_1_1;
            }],
        execute: function() {
            EditProfile = (function () {
                function EditProfile() {
                    this.currentUser = new User_1.User("Ime", "Prezime", "Nickname", "imeprezime@gmail.com", "Password.1", "/Content/Users/User1.png");
                    this.newData = this.currentUser;
                    this.retypedPwd = this.currentUser.password;
                    this.errorOccured = false;
                    this.errorText = "";
                }
                EditProfile.prototype.imageChange = function (inputValue) {
                    this.currentUser.imageUrl = URL.createObjectURL(inputValue.target.files[0]);
                };
                EditProfile.prototype.checkName = function (data) {
                    var value = data.trim();
                    if (value == "") {
                        this.errorText = "Name required!";
                        return false;
                    }
                    return true;
                };
                EditProfile.prototype.checkLastName = function (data) {
                    var value = data.trim();
                    if (value == "") {
                        this.errorText = "Last name required!";
                        return false;
                    }
                    return true;
                };
                EditProfile.prototype.checkNickname = function (data) {
                    var value = data.trim();
                    if (value == "") {
                        this.errorText = "Nickname required!";
                        return false;
                    }
                    return true;
                };
                EditProfile.prototype.checkEmail = function (data) {
                    var value = data.trim();
                    var emailPattern = /^([a-zA-Z0-9])+([a-zA-Z0-9._%+-])+@([a-zA-Z0-9_.-])+\.(([a-zA-Z]){2,6})$/;
                    if (value == "") {
                        this.errorText = "Email required!";
                        return false;
                    }
                    else if (!value.match(emailPattern)) {
                        this.errorText = "Wrong email format!";
                        return false;
                    }
                    return true;
                };
                EditProfile.prototype.checkPassword = function (data) {
                    var value = data.trim();
                    var pwdPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,100}$/;
                    if (value == "") {
                        this.errorText = "Password required!";
                        return false;
                    }
                    else if (!value.match(pwdPattern)) {
                        this.errorText = "Wrong password format! (Password must be at least 6 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit.)";
                        return false;
                    }
                    return true;
                };
                EditProfile.prototype.checkRepeatedPassword = function (retyped, pwd) {
                    var value = retyped.trim();
                    if (value == "") {
                        this.errorText = "Retype password!";
                        return false;
                    }
                    else if (pwd != retyped) {
                        this.errorText = "Passwords do not match!";
                        return false;
                    }
                    return true;
                };
                EditProfile.prototype.onNameChange = function (data) {
                    this.newData.name = data;
                };
                EditProfile.prototype.onLastNameChange = function (data) {
                    this.newData.lastname = data;
                };
                EditProfile.prototype.onNicknameChange = function (data) {
                    this.newData.nickname = data;
                };
                EditProfile.prototype.onEmailChange = function (data) {
                    this.newData.email = data;
                };
                EditProfile.prototype.onPasswordChange = function (data) {
                    this.newData.password = data;
                };
                EditProfile.prototype.onRepeatPasswordChange = function (data) {
                    this.retypedPwd = data;
                };
                EditProfile.prototype.onSubmit = function () {
                    if (this.checkName(this.newData.name)
                        && this.checkLastName(this.newData.lastname)
                        && this.checkNickname(this.newData.nickname)
                        && this.checkEmail(this.newData.email)
                        && this.checkPassword(this.newData.password)
                        && this.checkRepeatedPassword(this.retypedPwd, this.newData.password)) {
                        this.errorText = "";
                        this.errorOccured = false;
                        this.currentUser = this.newData;
                    }
                    else
                        this.errorOccured = true;
                };
                EditProfile.prototype.onRest = function () {
                    this.newData.name = "";
                    this.newData.lastname = "";
                    this.newData.nickname = "";
                    this.newData.password = "";
                    this.newData.password = "";
                };
                EditProfile = __decorate([
                    core_1.Component({
                        selector: "edit-profile",
                        directives: [EditProfileForm_1.EditProfileForm, common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
                        templateUrl: "./app/Components/EditProfile/EditProfile.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], EditProfile);
                return EditProfile;
            })();
            exports_1("EditProfile", EditProfile);
        }
    }
});
//# sourceMappingURL=EditProfile.js.map