
#
# WepSIM (https://wepsim.github.io/wepsim/)
#

.data
  result1: .word 0x12345678

.text
  main: 
        # shift
        lui     a0, result1
        lb      a1, 0(a0)
        lh      a2, 0(a0)
        lw      a3, 0(a0)

        lui     a1, 0x1
        sb      a1, 0(a0)
        lui     a2, 0x2
        sh      a2, 0(a0)
        lui     a3, 0x3
        sw      a3, 0(a0)

        jalr x0, 0(ra)

