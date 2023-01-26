# Creator


## Contents

 - [Command line](#command-line-support)
 - [Frequently Asked Question](#faq)


## Command line support

### 1. Prerequisites

 - Linux with nodejs, npm and git packages installed (sudo apt-get update & sudo apt-get install -y nodejs npm git)
 - CREATOR repository cloned (git clone https://github.com/creatorsim/creator.git)
 - The necessary nodejs packages installed (cd creator; npm install terser jshint colors yargs readline-sync)

You can use the following commands to install the prerequisites:
```bash    
sudo apt-get update & sudo apt-get install nodejs npm git -y
git clone https://github.com/creatorsim/creator.git
cd creator
npm install terser jshint colors yargs readline-sync
```


### 2. Compile and run a program

* To compile with creator we have to use the -a and -s flags:

./creator.sh -a &lt;architercture file&gt; -s &lt;assembly file&gt;

Example:
```bash    
./creator.sh -a architecture/MIPS-32.json -s examples/MIPS/example2.txt
```

Output: 
```bash
CREATOR
-------
version: 3.1
website: https://creatorsim.github.io/

[examples/MIPS/example2.txt]
[Architecture] Architecture 'architecture/MIPS-32.json' loaded successfully.
[Library] Without library
[Compile] Code 'examples/MIPS/example2.txt' compiled successfully.
[Execute] Executed successfully.
[FinalState] cr[PC]:0x20; ir[t0,8]:0xa; ir[t1,9]:0xd; ir[t2,10]:0x2d; ir[t3,11]:0x21; ir[t4,12]:0x17; ir[t5,13]:0xc; ir[t6,14]:0x441; ir[t7,15]:0x53; keyboard[0x0]:''; display[0x0]:'';
```

### 3. Compile, run and check the execution of an assembly program
    
* First, we save the final state execution into a file we have to use the -a, -s and -o flags in this way:
    
./creator.sh -a &lt;architercture file&gt; -s &lt;assembly file&gt; -o min &gt; &lt;output file&gt;

Example:
```bash    
./creator.sh -a ./architecture/MIPS_32.json -s ./examples/MIPS/example2.txt -o min > output.txt
cat output.txt
```

Output: 
```bash

cr[PC]:0x20; ir[t0,8]:0xa; ir[t1,9]:0xd; ir[t2,10]:0x2d; ir[t3,11]:0x21; ir[t4,12]:0x17; ir[t5,13]:0xc; ir[t6,14]:0x441; ir[t7,15]:0x53; keyboard[0x0]:''; display[0x0]:'';

```

    
* Then, we compare the final state execution and the state saved on file by using the -r flag:
    
./creator.sh -a &lt;architercture file&gt; -s &lt;assembly file&gt; -o min -r &lt;compare file&gt;

Example:
```bash    
./creator.sh -a ./architecture/MIPS_32.json -s ./examples/MIPS/example2.txt -o min -r output.txt
```

Output: 
```bash

Equals
```

The output.txt is the final state we want to compare with, so we can remove the elements of the final state that are not part of the checking.


### 4. Get help !

* To show the command line help, just use the -h switch:
    
```bash    
./creator.sh -h
```

Output: 
```bash    
CREATOR
-------
version: 3.1
website: https://creatorsim.github.io/

Usage: creator.sh -a <file name> -s <file name>
Usage: creator.sh -h

Options:
      --version       Show version number                              [boolean]
  -a, --architecture  Architecture file        [string] [required] [default: ""]
  -s, --assembly      Assembly file            [string] [required] [default: ""]
  -d, --directory     Assemblies directory                [string] [default: ""]
  -l, --library       Assembly library file               [string] [default: ""]
  -r, --result        Result file to compare with         [string] [default: ""]
      --describe      Help on element                     [string] [default: ""]
      --maxins        Maximum number of instructions to be executed
                                                   [string] [default: "1000000"]
  -o, --output        Define output format          [string] [default: "normal"]
      --color         Colored output                  [boolean] [default: false]
  -h, --help          Show help                                        [boolean]

Examples:
  ./creator.sh  To show examples.
```



## FAQ

* How to make a line break?

A line break cannot be printed as a string (print_string), it has to be printed as a character (print_char). The following code can be used to print it:
```
li $v0 11   # print_char
li $a0 '\n' # Loads the ASCII value of the character into the register a0
```

 * Can you put two labels consecutively?
 
It is not allowed. The instructions can only be associated with one label. If a label is placed after another, the simulator will display a compilation error.

Example of incorrect two consecutive labels:
```
label1:
label2: li $t0 1
```

Alternative correct code with the same functionality:
```
label1: li  $t0 1
label2: add $t2 $t1 $t0 

syscall 
```


## Add or modify an architecture

### Create and edit a component

 * Create a new component: Allows you to create a new set of integer, floating point, or control registers.
<html>
<img height="100" src="https://creatorsim.github.io/images/advanced_mode/new_component.PNG">
<video src="videos/advanced_mode/new_component.mp4" allowfullscreen="allowfullscreen" controls="controls" class="embed-responsive-item"></video>
</html>

 * Edit an existent component: Allows you to modify the name of a component that has already been created in the selected architecture.
<html>
<img height="100" src="https://creatorsim.github.io/images/advanced_mode/edit_component.PNG">
<video src="videos/advanced_mode/new_component.mp4" allowfullscreen="allowfullscreen" controls="controls" class="embed-responsive-item"></video>
</html>


### Create and edit an element

 * Create a new element: Allows you to create a new element within a component. To create it you need an element name, the default value of the element and whether to read or write to it.

 * Edit an existent element: Allows you to change the name of an element that has already been created in a component. It is possible to modify its name, its default value and, finally, whether it can be read or written in it.


### Create and edit an instruction

 * Create a new instruction: Allows you to create a new instruction within the desired architecture. To do this, enter the name of the instruction, the type of instruction it will be, the fields it will have with their corresponding bits, the syntax the instruction will follow and, finally, the definition of the instruction.

 * Edit an existent instruction: It allows modifying an instruction within the desired architecture, being able to modify its name, the fields it uses, the syntax the instruction follows and, finally, its definition.


### Create and edit a pseudoinstruction

 * Create a new pseudoinstruction: Allows you to create a new pseudoinstruction within the desired architecture. To do this, you must enter the name of the pseudoinstruction, the fields it will have with their corresponding bits, the syntax the pseudoinstruction will follow and, finally, its definition.

 * Edit an existent pseudoinstruction: It allows to modify a pseudoinstruction within the desired architecture, being able to modify its name, as well as the fields it uses, the syntax that follows the pseudoinstruction and, finally, the definition of the pseudoinstruction.


### Create and edit a directive

 * Create a new directive: Allows you to create a new directive by entering the name it will have and, finally, the action the directive will perform.

 * Edit an existent directive: Allows you to modify an existing directive by modifying its name and, finally, the action that the directive will perform.


