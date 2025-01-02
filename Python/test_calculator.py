# test_calculator.py

import unittest
from calculator import Calculator

class TestCalculator(unittest.TestCase):

    def test_add(self):
        self.assertEqual(Calculator.add(1, 2), 3)
        self.assertEqual(Calculator.add(-1, 1), 1)
        self.assertEqual(Calculator.add(-1, -1), -2)

    def test_subtract(self):
        self.assertEqual(Calculator.subtract(5, 3), 2)
        self.assertEqual(Calculator.subtract(-1, -1), 0)
        self.assertEqual(Calculator.subtract(0, 5), -5)

    def test_multiply(self):
        self.assertEqual(Calculator.multiply(3, 7), 21)
        self.assertEqual(Calculator.multiply(-1, 1), -1)
        self.assertEqual(Calculator.multiply(0, 5), 0)

    def test_divide(self):
        self.assertEqual(Calculator.divide(10, 2), 5)
        self.assertEqual(Calculator.divide(-10, -2), 5)
        
        with self.assertRaises(ValueError):
            Calculator.divide(10, 0)

if __name__ == '__main__':
    unittest.main()