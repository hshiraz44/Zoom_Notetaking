contents = open("Zoom Note-Taking.txt","r")
with open("notes.html", "w") as e:
    for lines in contents.readlines():
        e.write("<pre>" + lines + "</pre> <br>\n")