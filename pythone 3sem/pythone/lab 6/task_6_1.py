# -*- coding: utf-8 -*-
"""
Задание 6.1

Список mac содержит MAC-адреса в формате XXXX:XXXX:XXXX
Однако, в оборудовании cisco MAC-адреса используются в формате XXXX.XXXX.XXXX

Написать код, который преобразует MAC-адреса в формат cisco
и добавляет их в новый список mac_cisco

Ограничение: Все задания надо выполнять используя только пройденные темы.
"""

mac = ["aabb:cc80:7000", "aabb:dd80:7340", "aabb:ee80:7000", "aabb:ff80:7000"]
 
mac1=mac[0]
mac2=mac[1]
mac3=mac[2]
mac4=mac[3]

mac1=mac1.replace(':','.')
mac2=mac2.replace(':','.')
mac3=mac3.replace(':','.')
mac4=mac4.replace(':','.')


mac_cisco=mac

mac_cisco[0]=mac1
mac_cisco[1]=mac2
mac_cisco[2]=mac3
mac_cisco[3]=mac4
print(mac_cisco)
