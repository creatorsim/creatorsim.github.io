
#
# Creator (https://creatorsim.github.io/creator/)
#

.text
  main: 
        # add, sub, div, mul
        lui     a0, 0
        lui     a1, 2

        addi    a0, a0, 10
        add     a0, a0, a1
        sub     a0, a0, a1
        div     a0, a0, a1
        mul     a0, a1, a1

        # or, and, xor
        lui     a0, 0xF875
        lui     a1, 0x00FF

        or      a2, a0, a1
        ori     a3, a0, 0xFF
        and     a2, a0, a1
        andi    a3, a0, 0xFF
        xor     a2, a0, a1
        xori    a3, a0, 0xFF

        jalr x0, 0(ra)

