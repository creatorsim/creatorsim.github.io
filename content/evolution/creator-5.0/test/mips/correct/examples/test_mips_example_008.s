
#
# Creator (https://creatorsim.github.io/creator/)
#

.data

  matrixA:  .word 0x34000000, 0x34000000, 0x34000000, 0x34000000
            .word 0x23450000, 0x00432210, 0x77512120, 0x14141414
            .word 0x00000214, 0x44551122, 0xAABFF012, 0x77D00000
            .word 0x0000FF23, 0x12345678, 0x87654321, 0x33441124

  matrixB:  .float 0.0, 0.0, 0.0, 0.0
            .float 0.0, 0.0, 0.0, 0.0
            .float 0.0, 0.0, 0.0, 0.0
            .float 0.0, 0.0, 0.0, 0.0

.text
main:
        la $t0, matrixA
        la $t1, matrixB
        li $t2, 4
        li $t3, 4
        move $t4, $zero
        move $t5, $zero
    
loop1:  beq $t2, $t4, end1
loop2:  beq $t3, $t5, end2
        l.s $f0  ($t0)
        s.s $f0  ($t1)
        addi $t0, $t0, 4
        addi $t1, $t1, 4
        addi $t5, $t5, 1
        b loop2
end2:   addi $t4, $t4, 1
        move $t5, $zero
        b loop1
end1:   li $v0, 10
        syscall
