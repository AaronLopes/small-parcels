#FedEx API
'''
Fedex API Info:

Key:
TE1f195EYkYmZ37f

Test Account Number:
510087780

Test Meter Number:
119208406

password:
BuzzBuzzISYE!!

username:
gtseniordesign
'''
import requests
from fedex.config import FedexConfig
from fedex.services.rate_service import FedexRateServiceRequest
url = 'https://sandbox-api.postmen.com/v3/rates'


CONFIG_OBJ = FedexConfig(key='TE1f195EYkYmZ37f',
                         password='120TFn6kRO9IHdXVFvO6TiG5X',
                         account_number='510087780',
                         meter_number='119208406')
print(CONFIG_OBJ)
rate = FedexRateServiceRequest(CONFIG_OBJ)

rate.RequestedShipment.DropoffType = 'REGULAR_PICKUP'
rate.RequestedShipment.ServiceType = 'FEDEX_GROUND'
rate.RequestedShipment.PackagingType = 'YOUR_PACKAGING'

rate.RequestedShipment.Shipper.Address.StateOrProvinceCode = 'SC'
rate.RequestedShipment.Shipper.Address.PostalCode = '29631'
rate.RequestedShipment.Shipper.Address.CountryCode = 'US'

rate.RequestedShipment.Recipient.Address.StateOrProvinceCode = 'NC'
rate.RequestedShipment.Recipient.Address.PostalCode = '27577'
rate.RequestedShipment.Recipient.Address.CountryCode = 'US'

rate.RequestedShipment.EdtRequestType = 'NONE'
rate.RequestedShipment.ShippingChargesPayment.PaymentType = 'SENDER'

package1_weight = rate.create_wsdl_object_of_type('Weight')
package1_weight.Value = 1.0
package1_weight.Units = "LB"
package1 = rate.create_wsdl_object_of_type('RequestedPackageLineItem')
package1.Weight = package1_weight
package1.PhysicalPackaging = 'BOX'
package1.GroupPackageCount = 1
rate.add_package(package1)

rate.send_request()
