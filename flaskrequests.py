# -*- coding: utf-8 -*-
"""
Created on Fri Mar 19 17:07:14 2021

@author: Chase Hubbard

"""
#Example flask call using USPS API
import requests
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

#this is the actual request structure for USPS's API
    requestXML = """
<RateV4Request USERID="850CREAT7421">

<Revision>2</Revision>

<Package ID="0">

<Service>PRIORITY</Service>

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



    soup = BeautifulSoup(response.text, 'xml')

    price_string = soup.find('Rate')
    price = float(price_string.text.strip())
    return price



#takes in the API
pricey = USPS()
#This is the base url address to access the server currently local need to run flask server
Base = "http://127.0.0.1:5000/"


#a bunch of dummy data

data = [{'weight':4, 'length':5, 'height':4,'width':2,'zip_to':30040,'zip_from':30301},
{'weight':6, 'length':7, 'height':49,'width':82,'zip_to':30040,'zip_from':30301},
{'weight':2, 'length':70, 'height':4,'width':2,'zip_to':30040,'zip_from':30301}
]

#reads all the data into the API

for i in range(len(data)):
    response = requests.put(Base + 'package_measures/' + str(i), data[i])
    print(response.json())


input()
#Retrives a given dummy variable based on its inputed index

response =requests.get(Base + 'package_measures/2')
print(response.json())
input()

#deletesa a set of inputted data based on the index.
response = requests.delete(Base + 'package_measures/0')
print(response)

