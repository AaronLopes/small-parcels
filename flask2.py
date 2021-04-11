from flask import Flask, request, jsonify, Blueprint
from flask_restful import Api, Resource, reqparse, abort
from flask_sqlalchemy import SQLAlchemy

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





def create_app():
    app = Flask(__name__)
    return app

app = create_app()

weights = []
heights = []
lengths = []
zipto_locations = []
zipfrom_locations = []
widths = []


@app.route('/store_weight/<weight>')
def find_weight(weight):
    weights = []
    weights.append(weight)
    return jsonify(weights)

@app.route('/get_weight/')
def get_weight():
    return jsonify(weights)


@app.route('/store_height/<height>')
def find_height(height):
    heights = []
    heights.append(height)
    return jsonify(heights)

@app.route('/get_height/')
def get_height():
    return jsonify(heights)

@app.route('/store_length/<length>')
def find_length(length):
    lengths = []
    lengths.append(length)
    return jsonify(lengths)

@app.route('/get_length/')
def get_length():
    return jsonify(lengths)

@app.route('/store_width/<width>')
def find_width(width):
    widths = []
    widths.append(width)
    return jsonify(widths)

@app.route('/get_width/')
def get_width():
    return jsonify(widths)

@app.route('/store_zipto/<zipto>')
def find_zipto(zipto):
    zipto_locations = []
    zipto_locations.append(zipto)
    return jsonify(zipto_locations)

@app.route('/get_zipto/')
def get_zipto():
    return jsonify(zipto_locations)

@app.route('/store_zipfrom/<zipfrom>')
def find_zipfrom(zipfrom):
    zipfrom_locations =[]
    zipfrom_locations.append(zipfrom)
    return jsonify(zipfrom_locations)

@app.route('/get_zipfrom/')
def get_zipfrom():
    return jsonify(zipfrom_locations)



@app.route('/price/')
def price():
    price_data = []
    price_data.append(USPS())
    return jsonify(price_data)



if __name__ == '__main__':
    app.run(debug=True)
