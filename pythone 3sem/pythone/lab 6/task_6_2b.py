# -*- coding: utf-8 -*-
"""
Задание 6.2b

Сделать копию скрипта задания 6.2a.

Дополнить скрипт:
Если адрес был введен неправильно, запросить адрес снова.

Ограничение: Все задания надо выполнять используя только пройденные темы.
"""

f=-1

while not f==1:
    ip=input('Введите IP:')
    ipp=ip
    ip=ip.split('.')

    i=0
    while  i<4 :
      if not ip[i].isdigit():
         f=0
         print('Неверно введен ip-адрес \n Повторите попытку \n')
         break
      else :
         if len(ip)==4:
            if  int(ip[i])>=0 and int(ip[i])<=255 :
               f=1
               i+=1
            else:
               f=0
               print('Неверно введен ip-адрес \n Повторите попытку \n')
               break
         else:
            f=0
            print('Неверно введен ip-адрес \n Повторите попытку \n')
            break
     

i=0

ip1=int(ip[0])



if (ip1>=1)  and (ip1<=223):
   i+=1
   print('unicast')
elif (ip1>=224)  and (ip1<=239):
   i+=1
   print('multicast')

if "255.255.255.255" in ipp :
   i+=1
   print('local broadcast')
elif "0.0.0.0" in ipp :
   i+=1
   print('unassigned',i)

if i==0 :
   print('unused')

