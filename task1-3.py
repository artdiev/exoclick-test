# Task 1 - Highest occurrence

def highest_occurrence(array):
    """
    Time: O(n)
    Space: O(n)
    :param array: strings, int or floats, can be mixed
    :return: array containing element(s) with the highest
    occurrences without type coercion.
    Returns an empty array if given array is empty.
    """
    # hash table with a count of each item in the array
    counted = {}
    for item in array:
        if item in counted.keys():
            counted[item] += 1
        else:
            counted[item] = 1

    frequencies = counted.values()
    highest_frequency = max(frequencies, default="")
    most_frequent = [item for item in counted if counted[item] == highest_frequency]
    return most_frequent


print(highest_occurrence([2, 3, 2, 2, 2, 4, 2]))
print(highest_occurrence([2, 3, 2, 3, 2, 3, 4]))
print(highest_occurrence(['a', 'b', 'c', 'a', 'a', 'a', 'a']))
print(highest_occurrence(['a', 'a', 2, 2, 2, 'a', 4]))
print(highest_occurrence(['123123', 4, '4', 4]))
print(highest_occurrence(['123123', 4.3412, 4.3411]))
print(highest_occurrence(['123123', -45, -2]))
print(highest_occurrence([]))
print(highest_occurrence(['a']))


# Task 2 - Maximum Sub Array Sum

def max_sub_array_sum(array, number):
    """
    Time: O(n)
    Space: O(1)
    Finds a the maximum sum of a 'number' consecutive elements in an array
    :param array: float or int
    :param number: float or int
    :return: float or int, highest sum
    """
    if not array:
        return None

    maximum = 0

    temp = 0
    for index, integer in enumerate(array):
        temp += integer

        if index-number >= 0:
            temp -= array[index-number]

        if temp > maximum:
            maximum = temp

    return maximum


print(max_sub_array_sum([1,2,5,2,8,1,5], 4))
print(max_sub_array_sum([1,2,5,2,8,1,5], 2))
print(max_sub_array_sum([4,2,1,6], 1))
print(max_sub_array_sum([4,2,1,6,2], 4))
print(max_sub_array_sum([-4,-2,-1,-6,-2], 4))
print(max_sub_array_sum([4.3451,2.5334,1.12,6,2], 4))
print(max_sub_array_sum([], 4))


# Task 3 - Average Pair

def average_pair(array, target):
    """
    Time: O(n)
    Space: O(n)
    Returns true if there is a pair of numbers in the array that
    when averaged are equal to the target. False otherwise
    :param array: positive or negative int or floats
    :param target: positive or negative int or float
    :return: Bool
    """
    # hash table
    available_numbers = set()
    for item in array:
        temp = 2*target - item
        if temp in available_numbers:
            return True
        available_numbers.add(item)

    return False

print(average_pair([1,2,3], 2.5))
print(average_pair([1,3,3,5,6,7,10,12,19], 8))
print(average_pair([-1,0,3,4,5,6], 4.1))
print(average_pair([], 4))
print(average_pair([-1,8,8,-4,5,6], 8))