# -*- coding: utf-8 -*-
"""
Задание 9.2a

Сделать копию функции generate_trunk_config из задания 9.2

Изменить функцию таким образом, чтобы она возвращала не список команд, а словарь:
    - ключи: имена интерфейсов, вида 'FastEthernet0/1'
    - значения: список команд, который надо выполнить на этом интерфейсе

Проверить работу функции на примере словаря trunk_config и шаблона trunk_mode_template.

Ограничение: Все задания надо выполнять используя только пройденные темы.

"""


trunk_mode_template = [
    "switchport mode trunk",
    "switchport trunk native vlan 999",
    "switchport trunk allowed vlan",
]

trunk_config = {
    "FastEthernet0/1": [10, 20, 30],
    "FastEthernet0/2": [11, 30],
    "FastEthernet0/4": [17],
}


def generate_access_config(intf_vlan_mapping,  trunk_template):
    
    # f=intf_vlan_mapping
    # f1=list(f.keys())
    # f2=list(f.values())
    
    # intf_vlan_mapping[f1[0]]=f"{trunk_template[0]}{trunk_template[1]}{trunk_template[2]} {str(f2[0]).strip('[]')}"
    # intf_vlan_mapping[f1[1]]=f"{trunk_template[0]}{trunk_template[1]}{trunk_template[2]} {str(f2[1]).strip('[]')}"
    # intf_vlan_mapping[f1[2]]=f"{trunk_template[0]}{trunk_template[1]}{trunk_template[2]} {str(f2[2]).strip('[]')}"
    # tru=f"interface {f1[0]}\n{trunk_template[0]}\n{trunk_template[1]}\n{trunk_template[2]}\t{str(f2[0]).strip('[]')}\n interface {f1[1]}\n{trunk_template[0]}\n{trunk_template[1]}\n{trunk_template[2]}\t{str(f2[1]).strip('[]')}\n interface {f1[2]}\n{trunk_template[0]}\n{trunk_template[1]}\n{trunk_template[2]}\t{str(f2[2]).strip('[]')}"
    tru=[]
    tru_di={}
    for inter, vlan in intf_vlan_mapping.items():
        tru.append('interface {}'.format(inter))
        for line in trunk_template:
            if line.endswith('allowed vlan'):
                line =line + ' {}'
                vl = [str(vlan1) for vlan1 in intf_vlan_mapping[inter]]
                tru.append(line.format(' '.join(vl)))
            else:
                tru.append(line)
        tru_di[inter] = tru
        tru = []


    return tru_di

ret = generate_access_config(trunk_config, trunk_mode_template)
print(ret)
