let input2 = game.askForString("What is your password?")
if (input2 == "Arcade" || input2 == "*******") {
    game.splash("Login Successful")
} else {
    game.splash("Login failed")
}
game.splash("Hello " + input2 + "!")
