# Light-and-Sound-Game
Made a Light and Sound Game as part of my application for CodePath x Salesforce Futureforce Tech Launchpad Program

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **SAMUEL REBUELTA-SANCHEZ**

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

## Reflection Questions

1. **If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.**

cssreference.io, developer.mozilla.org, stackoverflow.com

2. **What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)**

My biggest challenge in creating the submission was implementing the guess(btn) function. I knew that the game logic needed to go in the “else” statement in the function. However, figuring out how many “if-statements” I needed and how I must implement those statements had me stuck for a while. I had no idea where to start, so I tried to draw it out on paper. I knew that the first thing I needed to do was to check if the button that was clicked by the player was the correct button in the pattern. However, what I didn’t know was exactly how I needed to do that. After thinking about it for a while, I decided to check if “btn” was equal to the element in “pattern” with the index of “progress”: if (btn == pattern[progress]) and then to check if “guessCounter” was equal to “progress” in order to proceed in the game. It seemed to be working but then I realized that sometimes the game would tell me I lost even if I pressed the right buttons. After nearly an hour of a debugging attempt, I gave in and looked at the solution. I realized that instead of checking the index “progress” of “pattern”, the index needed to be “guessCounter.” After fixing this problem, everything else fell into place.

3. **What questions about web development do you have after completing your submission? (recommended 100 - 300 words)**

My biggest wonder is about how to incorporate databases into webpages. I was thinking about how one would go about keeping track of high scores, progress on each particular level, or streaks of game wins and storing them in a database in order to display them in some sort of "STATS" div to the side of the page without losing the stats once the page refreshes. Another question I had after completing this project is, since frameworks will be taught at this summer program, what benefits would a framework have if I used it on this project, if any? I have never worked with any frameworks before and am curious to learn why there are so important in web development.

4. **If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)**

I would add a game mode where there is no limit on levels and a player can play as long as they want as long as they don't make a mistake (sort of like subway surfer or flappy bird). In this game mode, the sequences would continue growing continuously until the player loses and their high scores would be tracked in a separate div list on the side, sorting the scores with the highest at the top and the lowest on the bottom. Another feature I would consider adding is the ability to increase/decrease difficulty levels -easy, medium, and hard-. The current version would be considered the easy level. The medium level would slightly decrease the "len" parameter in the playTone() function as well as decrease the delay. The hard level would, in addition to the medium level changes, also play each sound without lighting up the button of that sound.

## Video Walkthrough

Add your screen recordings for specified implemented features here:

- [losing screen recording](https://www.loom.com/share/85cdf15963c944fdaffc7ea843e23308?sid=10cb2033-fa36-428b-9053-120fb7a4dd9d)
- [winning screen recording](https://www.loom.com/share/5d7646ae660549abbe086dd07e6a6850?sid=f22cd01c-4906-43b6-86e8-00282692f058)

## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/36c8406ae72e4b0798b89fe1f2063e9b?sid=279914d6-2a0b-4dcd-b755-c0e1a665a6aa)

## License

    Copyright [SAMUEL REBUELTA-SANCHEZ]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
