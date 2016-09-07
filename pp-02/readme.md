## ITMD 361, Production Problem 2: HTML Validation

For this production problem, you will learn to pull changes from a remote Git repository and then work with the HTML Validator. Follow the steps below exactly in order to receive full credit.

1. Make sure that you have added the instructor’s repository as a second remote.
   From your command line and within the `itmd-361-pp` directory, run the command:
   
    $ git remote -v

    You should see output something like this:

    instructor https://github.com/profstolley/itmd-361-pp.git (fetch)
    instructor https://github.com/profstolley/itmd-361-pp.git (push)
    origin	https://github.com/USERNAME/itmd-361-pp.git (fetch)
    origin	https://github.com/USERNAME/itmd-361-pp.git (push)

    If you do not have the `instructor` remote, be sure to run the following command:

    $ git remote add instructor https://github.com/profstolley/itmd-361-pp.git
   
   ** To receive the remaining week’s Production Problems **, you will always change into your 
   `itmd-361-pp` directory and run
   
    $ git pull instructor master
    
2. Once you’ve pulled this week’s problem, you need to upload the `index.html` file to the W3C
   HTML validator at http://validator.w3.org/
   
   There are five errors in the HTML. Correct them one by one, starting with the first error in
   the validator. After **each** correction, make a commit stating precisely what you fixed.
   
3. Finally, remember to push your work to your own Production Problems repository by running

    $ git push origin master