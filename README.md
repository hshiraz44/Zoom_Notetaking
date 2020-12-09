# Zoom_Notetaking

Zoom Notetaking Project for CS 338/399, Fall 2020

### Introduction and Explanation of Functionality 

Many students take notes in Google Docs on their recorded Zoom lectures stored on their local machines. This system allows a user to take notes within a Google Doc, keep track of how long he or she was taking notes, and ultimately obtain an HTML file containing both the notes taken in that Google Doc and a video clip corresponding to those notes that comes from a .mp4 file stored locally. This system is meant to serve as an aid to students looking to have a way to efficiently and conveniently refer back to clips of recorded video lectures that they take notes on by creating an HTML file that contains both notes and the corresponding video(s) right next to each other. 

This system is easily extendable to any form of notes that might not be contained in a Google Docs, as long as the notes can be converted to a .txt file.    



#### Note: Regarding Functionality

The current implementation of the system performs an essential functionality and has some objectives that are still not met yet in terms of automation for the user. The end output for the user still matches the goal of the system, and this system represents a minimum viable product of sorts, but there are some aspects of the UI and UX that are still being continually worked on and improved. 

Every action that a user has to perform in order to receive a set of notes that have corresponding video clips embedded next to those notes is explained below. 

### Directions for Use 


1. Clone this repo to your local machine 

2. Take the .mp4 file that you want to take notes on and move it to the directory titled "Zoom_Notetaking" that has been cloned to your local machine. Replace "Zach's Lecture.mp4" with this .mp4 file if you would like (not absolutely necessary)

3. The folder titled "Google Doc" contains code that you should insert into the Script Editor of a Google Docs file that is stored in your Google Drive. Title this Google Doc "Zoom Note-Taking" for now, though this title can be changed later via the convert.py file
 

4. Run all of the functions that are contained in the Script Editor in the Google Doc titled "Zoom Note-Taking". You will notice a sidebar appear that contains a button titled "Start/Stop Taking Notes". Press this button once when you start watching the recorded lecture, once you start taking notes on the recorded lecture, and once you stop taking notes on the recorded lecture. Remember that the three different timestamps 

5. Download your Google Docs file as a .txt file and store it in your "Zoom_Notetaking" directory contained on your local machine. 

6. Navigate to the Terminal. `cd`Z into your "Zoom_Notetaking" directory. 


### Additional Note Regarding Directions 

It is understandable that the directions for using this system as of now are long-winded and complex. It is my goal in future iterations of this system to reduce the quantity and complexity of steps that the user is required to take if he/she wants to use this system. Please feel free to contact me at anytime if you have questions regarding the use or functionality of this sytem. 

Email: hadishiraz2021@u.northwestern.edu