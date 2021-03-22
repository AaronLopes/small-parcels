# -*- coding: utf-8 -*-
import urllib
import requests
import xml.etree.ElementTree as ET
import requests
import pycurl
from io import BytesIO
from bs4 import BeautifulSoup
def USPS():
    usps_username = "850CREAT7421"
    usps_password = "827OY73NU544"

    Zip_origin = '22201'


    Types_of_Orders = ['First Class','Priority','First Class Commercial','First Class'
,'First Class Commercial','First Class HFP Commercial','Parcel Select Ground'
,'Priority','Priority Commercial','Priority Cpp'
,'Priority HFP Commercial','Priority HFP CPP','Priority Mail Express'
,'Priority Mail Express Commercial','Priority Mail Express CPP','Priority Mail Express Sh','Priority Mail Express Sh Commercial'
,'Priority Mail Express HFP','Priority Mail Express HFP Commercial','Priority Mail Express HFP CPP'
,'Priority Mail Cubic','Retail Ground','Media','Library'
,'All','Online','Plus','BPM'
    ]

    Tested = ['PRIORITY, PRIORITY MAIL EXPRESS,Parcel Select Ground,Media ']
#priority is 3 day, priority mail express is 2 day, parcel select ground is longer,Media is slower unknown time but cheaper 
#this is the actual request structure for USPS's API
    requestXML = """
<RateV4Request USERID="850CREAT7421">

<Revision>2</Revision>

<Package ID="0">

<Service>ALL</Service>

<ZipOrigination>30301</ZipOrigination>

<ZipDestination>26301</ZipDestination>

<Pounds>8</Pounds>

<Ounces>2</Ounces>

<Container></Container>

<Width></Width>

<Length></Length>

<Height></Height>

<Girth></Girth>

<Machinable>TRUE</Machinable>

</Package>

</RateV4Request>
    """

#convert XML to a webpage and then search the webpage using python
    docString = requestXML
    docString = docString.replace('\n','').replace('\t','')
    docString = urllib.parse.quote_plus(docString)

    url = "https://secure.shippingapis.com/ShippingAPI.dll?API=RateV4&XML=" + docString
#print(url + "\n\n")

    response = requests.get(url)

#print(response)

#print(response.text)

    soup = BeautifulSoup(response.text, 'xml')
    price_string = soup.find('Rate')
    prices = soup.find_all('Rate')
    new_prices = []
    real_service_types = []
    sub_service_types = []
    service_types = soup.find_all('MailService')
    for x in range(len(service_types)):
        sub_service_types.append(service_types[x].text.split('&'))
    for x in range(len(sub_service_types)):
            real_service_types.append(sub_service_types[x])

    for x in range(len(prices)):
        try:
            testtuple = (float(prices[x].text.strip())), (real_service_types[x][0] + real_service_types[x][5][3:])
        except:
            testtuple = (float(prices[x].text.strip())), (real_service_types[x][0])
        new_prices.append(testtuple)
    return(new_prices)

if __name__ == '__main__':
    print(USPS())
