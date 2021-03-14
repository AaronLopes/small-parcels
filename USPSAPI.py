# -*- coding: utf-8 -*-
import urllib
import requests
import xml.etree.ElementTree as ET
import requests
import pycurl
from io import BytesIO
from bs4 import BeautifulSoup
usps_username = "850CREAT7421"
usps_password = "827OY73NU544"

Zip_origin = '22201'

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

<Width>5</Width>

<Length>5</Length>

<Height>5</Height>

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

price_string = soup.find('Price')
price = float(price_string.text.strip())


'''
#just a bunch of additional ways to try and connect to the url
b_obj = BytesIO()
crl = pycurl.Curl()

crl.setopt(crl.URL, url)

crl.setopt(crl.WRITEDATA, b_obj)

crl.perform()

crl.close()

get_body = b_obj.getvalue()



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
