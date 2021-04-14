import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  systemGuess: Number = Math.round(Math.random() * 100);
  userGuess: Number;
  result: String;

  checkIt(): any {
    if (this.systemGuess == this.userGuess) {
      this.result = "Hey!! Correct Guess";
    } else if (this.systemGuess > this.userGuess) {
      this.result = "Your Guess is too Low";
    } else if (this.systemGuess < this.userGuess) {
      this.result = "Your Guess is Too High";
    } else {
      this.result = "Invalid Input !!!";
    }
  }
}
