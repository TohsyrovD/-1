# -*- coding: utf-8 -*-
"""
Задание 7.1

Обработать строки из файла ospf.txt и вывести информацию по каждой строке в таком виде:

Prefix                10.0.24.0/24
AD/Metric             110/41
Next-Hop              10.0.13.3
Last update           3d18h
Outbound Interface    FastEthernet0/0

Ограничение: Все задания надо выполнять используя только пройденные темы.

"""
f = open('ospf.txt')
for line in f:
     y=line.split(' ') 
     print('\n'' Prefix','\t\t', y[8],'\n','AD/Metric', '\t\t', y[9].strip('[]'), '\n',
     'Next-Hop', '\t\t', y[10], '\n', 'Last update', '\t\t', y[11].strip(','), '\n',
     'Outbound Interface', '\t', y[12].strip(','), '\n')   
     
f.close()

