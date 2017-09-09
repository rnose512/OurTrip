class TripsController < ApplicationController
	def index
		trips = Trip.all
		render json: trips
	end

	def create
	end

	def new
	end

	def edit
	end

	def show
	end

	def update
	end
end
