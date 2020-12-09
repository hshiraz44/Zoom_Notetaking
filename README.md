# Zoom_Notetaking

Zoom Notetaking Project for CS 338/399, Fall 2020

### Introduction and Explanation of Functionality 

Many students take notes in Google Docs on their recorded Zoom lectures stored on their local machines. This system allows a user to take notes within a Google Doc, keep track of how long he or she was taking notes, and ultimately obtain an HTML file containing both the notes taken in that Google Doc and a video clip corresponding to those notes that comes from a .mp4 file stored locally. This system is meant to serve as an aid to students looking to have a way to efficiently and conveniently refer back to clips of recorded video lectures that they take notes on by creating an HTML file that contains both notes and the corresponding video(s) right next to each other. 

This system is easily extendable to any form of notes that might not be contained in a Google Docs, as long as the notes can be converted to a .txt file.    



#### Note: Regarding Functionality

The current implementation of the system performs an essential functionality and has some objectives that are still not met yet in terms of automation for the user. The end output for the user still matches the goal of the system, and this system represents a minimum viable product of sorts, but there are some aspects of the UI and UX that are still being continually worked on and improved. 

Every action that a user has to perform in order to receive a set of notes that have corresponding video clips embedded next to those notes is explained below. 

### Directions for Use: Reads everything carefully and follow step by step  


1. Clone this repo to your local machine 

2. Take the .mp4 file that you want to take notes on and move it to the directory titled "Zoom_Notetaking" that has been cloned to your local machine. Replace "Zach's Lecture.mp4" with this .mp4 file if you would like (not absolutely necessary)

3. The folder titled "Google Doc" contains code that you should insert into the Script Editor of a Google Docs file that is stored in your Google Drive. Title this Google Doc "Zoom Note-Taking" for now, though this title can be changed later via the convert.py file
 

4. Run all of the functions that are contained in the Script Editor in the Google Doc titled "Zoom Note-Taking". You will notice a sidebar appear that contains a button titled "Start/Stop Taking Notes". Press this button once when you start watching the recorded lecture, once you start taking notes on the recorded lecture, and once you stop taking notes on the recorded lecture. Remember what the three different timestamps correspond to. 

5. Download your Google Docs file as a .txt file and store it in your "Zoom_Notetaking" directory contained on your local machine. 

6. Ensure that line 1 in the file titled "convert.py" contains the correct file name corresponding to the .txt version of the document in which you took your notes.

7. Navigate to the Terminal. `cd` into your "Zoom_Notetaking" directory. Run `python convert.py`

8. You will notice that a file called "notes.html" has been created. Open this file on your local machine in a text editor of your choice. This file will serve as the basis for your merged notes and video(s) documents.

9. Open the file titled ClipVid.py in a text editor on your local machine. Ensure that the name of the .mp4 file contained on line 2 matches the .mp4 file that you want a clip of in your final document 

10. Specify how you want to clip your lecture recording using the 2nd and 3rd arguments to the function contained on line 2 titled "ffmpeg_extract_subclip". The 2nd argument represents the number of seconds we want to chop off from the front of the .mp4 video and the 3rd argument specifies the point in the video at which we want our clip to end (e.g. if 300 is specified for the 3rd argument then the video clip we embed into our final document will be clipped such that it doesn't contain any portion of the original video that exists after the 5 minute mark has been reached in the original video). See the timestamps in your .txt file containing your notes for the information on what exactly to put in the 2nd and 3rd arguments to the function contained on line 2 titled "ffmpeg_extract_subclip". (Note: Remember that the first timestamp is when you started watching the zoom video and the second timestamp is when you started taking notes, so subtract these two times from each other to get how many seconds you want to delay the start of your lecture, which is the 2nd argument. Remember that the third timestamp corresponds to when you stopped taking notes, so see how much time has passed between the first timestamp and the third timestamp to see how far into the video you want to go before clipping, which is the 3rd argument)

11. Navigate to the Terminal. `cd` into your "Zoom_Notetaking" directory. Run `python ClipVid.py`

12. You should notice an output file titled "test.mp4" in your "Zoom_Notetaking" directory.

13. Navigate to the notes.html file that has been opened on your local machine. Right below the code you see, insert the following code and save your file:

`<br <video width="320" height="240" controls> />`
 `<br <source src="test.mp4" type="video/mp4"> />`
`\n</video>`


14. Open up "notes. html" in a browser and you should see your output document with notes and a corresponding clip of a .mp4 video. Hope you enjoy using this system!

### Additional Note Regarding Directions 

It is understandable that the directions for using this system as of now are long-winded and complex. It is my goal in future iterations of this system to reduce the quantity and complexity of steps that the user is required to take if he/she wants to use this system. Please feel free to contact me at anytime if you have questions regarding the use or functionality of this sytem. 

Email: hadishiraz2021@u.northwestern.edu
