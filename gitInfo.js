/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = "Git is a software tool that acts as a version control in which you can, on a simple level, capture a certain point of your program where you can save it as a repository in case you need to load that point of your program. It saves locally but you can push those repositories to remote applications such as Git Hub."
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = "Git Hub is basically a cloud storage application where you can save your repositories both publically and privately. GitHub also builds a community where people can push their own versions of a certain project fostering ingenuity."
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
const gitInitDefinition = "'git init' is the command you type in the terminal to initialize a repository in which you can capture your progress of projects. It also creates a hidden directory named '.git' where you can view these save points."
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
const gitCloneDefinition = "'git clone' is another command in which you can copy a current git repository, whether locally or remote from applications like GitHub."
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
const gitStatusDefinition = "'git status' is another git command where you can view the state of the current repository, viewing files you may need to commit."
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
const gitAddDefinition = "'git add' is a git command that adds the files you name within the repository into the 'staging area' so that you can commit them."
const gitAddCode = "git add ." //This code adds all files within the present directory into the repositories "staging area".
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
const gitCommitDefinition = "'git commit' commits or creates a snapshot of the current progress of code and saves it to the repository. You can view these in the hidden directory .git. "
const gitCommitCode = "git commit -m 'initial commit' "
//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
const gitPushDefinition = "'git push' is a git command where you can send the repository to a remote location like GitHub's application."