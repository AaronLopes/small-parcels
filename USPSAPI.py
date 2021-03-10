# -*- coding: utf-8 -*-
import urllib
import requests
import xml.etree.ElementTree as ET
import requests
import pycurl
from io import BytesIO
usps_username = "850CREAT7421"
usps_password = "827OY73NU544"


#this is the actual request structure for USPS's API
requestXML = """
<?xml version="1.0"?>
<RateV4Request USERID="850CREAT7421">

<Revision>2</Revision>

<Package ID="0">

<Service>PRIORITY</Service>

<ZipOrigination>22201</ZipOrigination>

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

url = "http://secure.shippingapis.com/ShippingAPI.dll?API=RateV4&XML=" + docString
print(url + "\n\n")


f = requests.get(url)
'''

b_obj = BytesIO()
crl = pycurl.Curl()

crl.setopt(crl.URL, url)

crl.setopt(crl.WRITEDATA, b_obj)

crl.perform()

crl.close()

get_body = b_obj.getvalue()

git@github.com:AaronLopes/small-parcels.git

#possible error response
response = requests.get(url).json()
print(response)
if response.getcode() != 200:
	print("Error making HTTP call:")
	print(response.info())
	exit()

contents = response.read()
print(contents)

#root = ET.fromstring(contents)
#for address in root.findall('Address'):
#	print()
#	print("Address1: " + address.find("Address1").text)
#	print("Address2: " + address.find("Address2").text)
#	print("City:	 " + address.find("City").text)
#	print("State:	" + address.find("State").text)
#	print("Zip5:	 " + address.find("Zip5").text)

'''
'''
from usps import USPSApi
from pprint import pprint as pp

usps_username = "850CREAT7421"
usps_password = "827OY73NU544"
'''
