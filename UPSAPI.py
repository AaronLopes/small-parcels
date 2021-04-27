#imports defined in UPS documentation
import xml.etree.ElementTree as ET
from zeep import Client, Settings
from zeep.exceptions import Fault, TransportError, XMLSyntaxError

#my imports
from flask import Flask, jsonify
from zeep.helpers import serialize_object as serialize
def UPS(height,lenght,width,weight,zipto,stateto,zipfrom,statefrom):
    # Set Connection
    settings = Settings(strict=False, xml_huge_tree=True)
    client = Client('SCHEMA-WSDLs/RateWS.wsdl', settings=settings)

    #https://www.npmjs.com/package/ups-service-codes
    #these are domestic service codes
    service_levels = {
        14: 'UPS Next Day Air Early',
        1: 'UPS Next Day Air',
        13: 'UPS Next Day Air Saver',
        59: 'UPS 2nd Day Air A.M.',
        2: 'UPS 2nd Day Air',
        12: 'UPS 3 Day Select',
        3: 'UPS Ground'
        }

    # Set SOAP headers
    headers = {

        'UPSSecurity': {
            'UsernameToken': {
                'Username': 'gtseniordesign',
                'Password': 'BuzzBuzzISYE21'
            },

            'ServiceAccessToken': {
                'AccessLicenseNumber': '4D96598D682EF492'#API KEY
            }

        }
    }

    # Create request dictionary
    requestDictionary = {

        "RequestOption": "Shop",
        "TransactionReference": {
            "CustomerContext": "Your Customer Context"
        }
    }

    # Create rate request dictionary
    rateRequestDictionary = {

        "Package": {
            "Dimensions": {
                "Height": height,
                "Length": lenght,
                "UnitOfMeasurement": {
                    "Code": "IN",
                    "Description": "inches"
                },
                "Width": width
            },
            "PackageWeight": {
                "UnitOfMeasurement": {
                    "Code": "Lbs",
                    "Description": "pounds"
                },
                "Weight": weight
            },
            "PackagingType": {
                "Code": "02",
                "Description": "Rate"
            }
        },
        "Service": {
            "Code": "03",
            "Description": "Service Code"
        },
        "ShipFrom": {
            "Address": {
                "AddressLine": [
                    "",
                ],
                "City": "",
                "CountryCode": "US", #https://www.campusship.ups.com/us/en/campusship-support/country-codes.page?
                "PostalCode": zipfrom,
                "StateProvinceCode": statefrom
            },
            "Name": "Reed"
        },
        "ShipTo": {
            "Address": {
                "AddressLine": "",
                "City": "",
                "CountryCode": "US",
                "PostalCode": zipto,
                "StateProvinceCode": stateto
            },
            "Name": "Reed"
        },
        "Shipper": {
            "Address": {
                "AddressLine": [
                    "",
                ],
                "City": "",
                "CountryCode": "US",
                "PostalCode": "30350",
                "StateProvinceCode": "GA"
            },
            "Name": "Reed",
            "ShipperNumber": "Shipper Number"
        }
    }

    # Try operation
    try:
        response = serialize(client.service.ProcessRate(_soapheaders=headers, Request=requestDictionary,
                                              Shipment=rateRequestDictionary))
        price_list = []
        for shipment in response['RatedShipment']:
            price_list.append(( service_levels[int(shipment['Service']['Code'])], shipment['TotalCharges']['MonetaryValue']))

        price_list.sort(key=lambda x:x[1])

    except Fault as error:
        print(ET.tostring(error.detail))

    return price_list


