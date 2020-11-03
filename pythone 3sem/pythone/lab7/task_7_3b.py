# -*- coding: utf-8 -*-
"""
Задание 7.3b

Сделать копию скрипта задания 7.3a.

Переделать скрипт:
- Запросить у пользователя ввод номера VLAN.
- Выводить информацию только по указанному VLAN.

Ограничение: Все задания надо выполнять используя только пройденные темы.

"""
from sys import argv

vlan=input('Ввелите нужный VLAN:')

tl=[]
tl2=[]


with open(argv[1], "r") as f:
    for line in f:
        x=line.strip('\n').split()
       
        if '/' in line:
             tl.append(int(x[0]))
             tl.append(x[1]) 
             tl.append(x[3])
             tl2.append(tl)
             tl=[]

    tl2.sort()     
    for i in range(len(tl2)):
         if str(tl2[i][0]) == vlan:
            print(str(tl2[i][0]) + '\t' + tl2[i][1] + '\t' + tl2[i][2])

