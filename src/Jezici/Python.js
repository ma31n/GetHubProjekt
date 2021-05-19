import '../App.css';
function Python() {
  return (
    <div className="Python">
        <h1 align="center">PYTHON PROJECTS</h1>

        <div className="post"><h2 align="center">How to make a website blocker</h2>
        <textarea className="code2" value='""" Website Blocker
----------------------------------------
"""
import time
from datetime import datetime as dt
hosts_path = r"/etc/hosts"   // r is for raw string
hosts_temp = "hosts"
redirect = "127.0.0.1"
web_sites_list = ["www.facebook.com", "facebook.com"]    // users can modify the list of the websites they want to block
while True:
   if dt(dt.now().year, dt.now().month, dt.now().day, 9) < dt.now() < dt(dt.now().year, dt.now().month, dt.now().day,22):
       print("Working hours")
       with open(hosts_path, "r+") as file:
           content = file.read()
           for website in web_sites_list:
               if website in content:
                   pass
               else:
                   file.write(redirect+" "+website+"\n")
   else:
       print("Fun time")
       with open(hosts_path, "r+") as file:
           content = file.readlines()
           file.seek(0)  // reset the pointer to the top of the text file
           for line in content:
               // here comes the tricky line, basically we overwrite the whole file
               if not any(website in line for website in web_sites_list):
                   file.write(line)
               // do nothing otherwise
           file.truncate() // this line is used to delete the trailing lines (that contain DNS)
    time.sleep(5)'>
</textarea>
        </div>

        <div className="post"><h2 align="center">How to make a password generator</h2>
        <textarea className="code2" value='import random

#A function do shuffle all the characters of a string
def shuffle(string):
  tempList = list(string)
  random.shuffle(tempList)
  return "".join(tempList)

#Main program starts here
uppercaseLetter1=chr(random.randint(65,90)) #Generate a random Uppercase letter (based on ASCII code)
uppercaseLetter2=chr(random.randint(65,90)) #Generate a random Uppercase letter (based on ASCII code)
#Generate more characters here
#....

#Generate password using all the characters, in random order
password = uppercaseLetter1 + uppercaseLetter2 # + ....
password = shuffle(password)

#Ouput
print(password)'>
</textarea>
        </div>

        <div className="post"><h2 align="center">How to make a mad libs generator</h2>
        <textarea className="code2" value='""" Number Guessing Game
----------------------------------------
"""
import random
attempts_list = []
def show_score():
    if len(attempts_list) <= 0:
        print("There is currently no high score, its yours for the taking!")
    else:
        print("The current high score is {} attempts".format(min(attempts_list)))
def start_game():
    random_number = int(random.randint(1, 10))
    print("Hello traveler! Welcome to the game of guesses!")
    player_name = input("What is your name? ")
    wanna_play = input("Hi, {}, would you like to play the guessing game? (Enter Yes/No) ".format(player_name))
    // Where the show_score function USED to be
    attempts = 0
    show_score()
    while wanna_play.lower() == "yes":
        try:
            guess = input("Pick a number between 1 and 10 ")
            if int(guess) < 1 or int(guess) > 10:
                raise ValueError("Please guess a number within the given range")
            if int(guess) == random_number:
                print("Nice! You got it!")
                attempts += 1
                attempts_list.append(attempts)
                print("It took you {} attempts".format(attempts))
                play_again = input("Would you like to play again? (Enter Yes/No) ")
                attempts = 0
                show_score()
                random_number = int(random.randint(1, 10))
                if play_again.lower() == "no":
                    print("Thats cool, have a good one!")
                    break
            elif int(guess) > random_number:
                print("Its lower")
                attempts += 1
            elif int(guess) < random_number:
                print("Its higher")
                attempts += 1
        except ValueError as err:
            print("Oh no!, that is not a valid value. Try again...")
            print("({})".format(err))
    else:
        print("Thats cool, have a good one!")
if __name__ == "__main__":
    start_game()'>
</textarea>
        </div>

        <div className="post"><h2 align="center">How to make a dice roller</h2>
        <textarea className="code2" value='import random
min = 1
max = 6

roll_again = "yes"

while roll_again == "yes" or roll_again == "y":
    print "Rolling the dices..."
    print "The values are...."
    print random.randint(min, max)
    print random.randint(min, max)

    roll_again = raw_input("Roll the dices again?")'>
</textarea>
        </div>
    </div>
  );
}

export default Python;