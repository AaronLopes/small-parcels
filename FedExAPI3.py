import logging
import sys

from FedEx_config import CONFIG_OBJ
from fedex.services.rate_service import FedexRateServiceRequest
from fedex.tools.conversion import sobject_to_dict

def FedExAPI(weight,zipto,stateto,zipfrom,statefrom):
    rate_value_2 = []
    service_types_list = ['FEDEX_GROUND','STANDARD_OVERNIGHT', 'PRIORITY_OVERNIGHT', 'FEDEX_GROUND', 'FEDEX_EXPRESS_SAVER']
    for x in service_types_list:
        logging.basicConfig(stream=sys.stdout, level=logging.INFO)


        customer_transaction_id = "*** RateService Request v18 using Python ***"  # Optional transaction_id
        rate_request = FedexRateServiceRequest(CONFIG_OBJ, customer_transaction_id=customer_transaction_id)

    # This is very generalized, top-level information.
    # REGULAR_PICKUP, REQUEST_COURIER, DROP_BOX, BUSINESS_SERVICE_CENTER or STATION
        rate_request.RequestedShipment.DropoffType = 'REGULAR_PICKUP'

        rate_request.RequestedShipment.ServiceType = x

    # What kind of package this will be shipped in.
    # FEDEX_BOX, FEDEX_PAK, FEDEX_TUBE, YOUR_PACKAGING
        rate_request.RequestedShipment.PackagingType = 'YOUR_PACKAGING'

    # Shipper's address
        rate_request.RequestedShipment.Shipper.Address.StateOrProvinceCode = statefrom
        rate_request.RequestedShipment.Shipper.Address.PostalCode = zipfrom
        rate_request.RequestedShipment.Shipper.Address.CountryCode = 'US'
        rate_request.RequestedShipment.Shipper.Address.Residential = False

    # Recipient address
        rate_request.RequestedShipment.Recipient.Address.StateOrProvinceCode = stateto
        rate_request.RequestedShipment.Recipient.Address.PostalCode = zipto
        rate_request.RequestedShipment.Recipient.Address.CountryCode = 'US'

        rate_request.RequestedShipment.EdtRequestType = 'NONE'


        rate_request.RequestedShipment.ShippingChargesPayment.PaymentType = 'SENDER'

        package1_weight = rate_request.create_wsdl_object_of_type('Weight')

        package1_weight.Value = float(weight)
        package1_weight.Units = "LB"

        package1 = rate_request.create_wsdl_object_of_type('RequestedPackageLineItem')
        package1.Weight = package1_weight

        package1.PhysicalPackaging = 'BOX'

        package1.GroupPackageCount = 1

        rate_request.add_package(package1)

        rate_request.send_request()

        for service in rate_request.response.RateReplyDetails:
            for rate_detail in service.RatedShipmentDetails:
                rate_value_2.append((rate_detail.ShipmentRateDetail.TotalNetFedExCharge.Amount,
                                                     service.ServiceType ))

    return (rate_value_2)

