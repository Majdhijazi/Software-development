from mockito import mock, verify
import unittest

from main import reverse_list, add, stringstesteing


class TestAddition(unittest.TestCase):

    def test_add(self):
        self.assertEqual(add(3, 4), 7)

    def test_negative(self):
        self.assertEqual(add(-2, 5), 3)

    def test_zero(self):
        self.assertEqual(add(0, 0), 0)

class TestStringManipulation(unittest.TestCase):

    def test_concatenate(self):
        self.assertEqual(stringstesteing("Hello", "World"), "HelloWorld")

    def test_empty(self):
        self.assertEqual(stringstesteing("", ""), "")

    def test_whitespace(self):
        self.assertEqual(stringstesteing("   ", "Python"), "   Python")

class TestListOperations(unittest.TestCase):

    def test_reverse_list(self):
        self.assertEqual(reverse_list([1, 2, 3]), [3, 2, 1])

    def test_empty_list(self):
        self.assertEqual(reverse_list([]), [])

    def test_mixed_type_list(self):
        self.assertEqual(reverse_list(['a', 1, True]), [True, 1, 'a'])

if __name__ == '__main__':
    unittest.main()
