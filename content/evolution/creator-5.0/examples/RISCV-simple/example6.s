
#
# Creator (https://creatorsim.github.io/creator/)
#

.text
  accu: addi    sp, sp, -4
        sw      a0, 0(sp)
        lui     a1, 0
    b1: beq     a0, zero, f1
        add     a1, a1, a0
        addi    a0, a0, -1
        beq     zero, zero, b1
    f1: lw      a0, 0(sp)
        addi    sp, sp, 4
        jalr    x0, 0(ra)

main:   lui     a0, 2
        jal     ra, accu

