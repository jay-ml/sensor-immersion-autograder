# Sensor Immersion Autograder

This is a HTML / CSS / Javascript autograder that is designed to be used with the Sensor Immersion Curriculum. 

# Front End
The front-end of the autograder is similar in design to the Tutorial Map used by the Sensor Immersion Curriculum for its tutorials. When you click a specific tutorial, you are brought to a window in which to paste your javascript code from Makecode. On clicking Submit, this code is executed in the back end and produces either a Pass, Fail, or indicates an Error within the autograder system. Each outcome provides further feedback using the results of the tests and displays this alongside the results.

# Back End
This autograder utilizes a parent-child class structure that is used to tailor each grader to its respective tutorial. For each tutorial, the necessary blocks required to complete the assignment are called directly via the student code. However, instead of completing the task that is required (like showing a number for "showNumber"), it is used to flag that the student has indeed implemented this function properly.

This lends itself nicely to being able to alter the tutorials should they change, as you simply have to edit the logic to reflect the blocks that the students now need to implement. 

There is a fair bit of string manipulation that occurs in the back-end before the code can be executed, as the Makecode-native Typescript has a couple of small differences when compared to Javascript and the code's functions are rearranged and executed in a logical order (on-start, then forever, then button presses / action events).