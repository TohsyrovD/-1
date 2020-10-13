# -*- coding: utf-8 -*-
"""
Задание 5.2b

Преобразовать скрипт из задания 5.2a таким образом,
чтобы сеть/маска не запрашивались у пользователя,
а передавались как аргумент скрипту.

Ограничение: Все задания надо выполнять используя только пройденные темы.

"""
from sys import argv
print(argv)
x=argv[1]
print(x)
x=x.split('.')
ip1=x[0]
ip2=x[1]
ip3=x[2]


mask=x[3]
mask=mask.split('/')
ip4=mask[0]
ip4=int(ip4)



mask1=mask[1]




ms='1'*int(mask1)+'0'*(32-int(mask1))

ms1=ms[:8]
m1=int(ms1,2)

ms2=ms[8:16]
m2=int(ms2,2)

ms3=ms[16:24]
m3=int(ms3,2)

ms4=ms[24:]
m4=int(ms4,2)


ip1=int(ip1) & m1
ip2=int(ip2) & m2
ip3=int(ip3) & m3
ip4=ip4 & m4


ip_template = '''
     IP address:
     {:<8} {:<8} {:<8} {:<8}
     {:08b} {:08b} {:08b} {:08b}
     '''
print(ip_template.format(ip1, ip2, ip3, ip4, int(ip1), int(ip2), int(ip3), int(ip4)))

mask_template = '''
     Mask:
     /{}
     {:<8} {:<8} {:<8} {:<8}
     {:08b} {:08b} {:08b} {:08b}
     '''
print(mask_template.format(mask1,m1, m2, m3, m4, int(m1), int(m2), int(m3), int(m4)))   