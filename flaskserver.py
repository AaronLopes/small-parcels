# -*- coding: utf-8 -*-
"""
Created on Mon Mar  8 13:03:51 2021

@author: Chase Hubbard
"""
from flask import Flask, request
from flask_restful import Api, Resource, reqparse, abort
from flask_sqlalchemy import SQLAlchemy

#Initalize the flask api
app = Flask(__name__)
api = Api(app)

'''
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy


This is for creating a database to store information

class priceModel(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    ship_time = db.Column(db.String(32), nullable = True)
    price = db.Column(db.Integer, nullable = False)
    return_policy = db.Column(db.Integer, nullable = True)

    def __repr__(self):
        return f"Package(ship time = {ship_time}, price = {price}, return_policy = {return_policy})"

db.create_all()

'''

#Takes in values for each of these options
package_info = reqparse.RequestParser()
package_info.add_argument("weight",type=str, help = "Weight Please")
package_info.add_argument("length",type=int, help = "Length Please")
package_info.add_argument("width",type=int, help = "width Please")
package_info.add_argument("heigth",type=int, help = "heigth Please")
package_info.add_argument("zip_to",type=int, help = "Zip address for the send to location")
package_info.add_argument("zip_from",type=int, help = "Zip address for the sendders location")

#this is where the package information will be stored
packages = {}
price_data = []

#if there is no package id found gives an error
def abort_no_exist_id(package_id):
    if package_id not in packages:
        abort(404, message = 'no package id found in packages')

#if a package already exists gives an error
def package_exists(package_id):
    if package_id in packages:
        abort(409, message = "package already exists with that id")



class package_measures(Resource):
#Puts in package information to be used when the data base is called
    def put(self,package_id):
        package_exists(package_id)
        args = package_info.parse_args()
        packages[package_id] = args
        return packages[package_id], 201
#gets information with regards to packages when the database is called
    def get(self,package_id):
        abort_no_exist_id(package_id)
        return packages[package_id]
#deletes information from the database in regards to packages when called
    def delete(self, package_id):
        abort_no_exist_id(package_id)
        del packages[package_id]
        return '',204
#Currently just takes in the price that is given into it can be done from running the API
class Price(Resource):

    def put(self,price):
        return {'data':price}

    def get(self,price):
        return {'data':price}


#This is the format that the call will need to be in order for flask to read the information
api.add_resource(package_measures, '/package_measures/<int:package_id>')

api.add_resource(Price, "/Price/<string:price>")

if __name__ == '__main__':
    app.run(debug=True)

