# -*- coding: utf-8 -*-
"""
Задание 6.2a

Сделать копию скрипта задания 6.2.

Добавить проверку введенного IP-адреса. Адрес считается корректно заданным, если он:
   - состоит из 4 чисел (а не букв или других символов)
   - числа разделенны точкой
   - каждое число в диапазоне от 0 до 255

Если адрес задан неправильно, выводить сообщение:
'Неправильный IP-адрес'

Сообщение должно выводиться только один раз.

Ограничение: Все задания надо выполнять используя только пройденные темы.

"""
ip=input('Введите IP:')

ipp=ip
ip=ip.split('.')


f=-1
i=0

while  i<4 :
   if not ip[i].isdigit():
      f=0
      break
   else :
      if len(ip)==4:
         if  int(ip[i])>=0 and int(ip[i])<=255 :
            f=1
            i+=1
         else:
            f=0
            break
      else:
         f=0
         break
    




if not f==0:

   ip1=int(ip[0])

   i=0


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

else:
   print ('IP введен Неверно')