"""
This file holds various configuration options used for all of the examples.

You will need to change the values below to match your test account.
"""
import os
import sys

# Use the fedex directory included in the downloaded package instead of
# any globally installed versions.
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from fedex.config import FedexConfig

# Change these values to match your testing account/meter number.
CONFIG_OBJ = FedexConfig(key='TE1f195EYkYmZ37f',
                         password='120TFn6kRO9IHdXVFvO6TiG5X',
                         account_number='510087780',
                         meter_number='119208406',
                         use_test_server=True)
