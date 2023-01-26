# creatorsim.github.io


## Command line support

### 1. Prerequisites

 - Use Linux and have node.js and npm installed
 - Donwload the repository --> git clone https://github.com/creatorsim/creator.git
 - Enter into the creator directory--> cd creator
 - Install the necessary packages --> npm install terser jshint colors yargs readline-sync

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
./creator.sh -a ./architecture/MIPS-32.json -s ./examples/MIPS/example2.txt -o min > output.txt
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
./creator.sh -a ./architecture/MIPS-32.json -s ./examples/MIPS/example2.txt -o min -r output.txt .
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
acaldero@DESKTOP-ETUDNGJ:~/temp/c/creator$ ./creator.sh -h

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

