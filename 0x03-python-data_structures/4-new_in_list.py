#!/usr/bin/python3
def new_in_lists(my_lists, idx, element):
     copy = my_list.copy()
     if idx < 0 or idx > len(my_list) - 1:
         return my_lists.copy()
     else:
         copy[idx] = element
         return copy
