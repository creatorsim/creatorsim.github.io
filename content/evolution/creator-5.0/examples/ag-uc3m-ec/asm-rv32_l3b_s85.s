
#
# CREATOR (https://creatorsim.github.io/creator/)
#


# int vec[5] ;
# ...
# 
# main () 
# {
#     vec[4] = 8;
#    
# }


.data
    .align  2       # siguiente dato alineado a 4
    vec: .zero  20  # 5 elem.*4 bytes


.text
main:   la t1, vec
        li t2,  8      
        sw t2, 16(t1)       
        # ...

