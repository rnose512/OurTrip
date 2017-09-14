class DestinationsController < ApplicationController
	def index
		@destinations = Destination.where(trip_id: params[:trip_id])
		if @destinations
			render json: @destinations.to_json
		else
			@error = "Error: No destinations found"
			render json: @error.to_json
		end
	end

	def show
		@destination = Destination.find(params[:id])
		@attendees = Trip.find(params[:trip_id]).users
		render json: [ @attendees ]
	end

	def create
		@destination = Destination.new(
			name: params[:name],
			trip_id: params[:trip_id],
			start_date: params[:start_date],
			end_date: params[:end_date]
			)
		if @destination.save
			render json: @destination
		else
		render json: {
				saved: false
		}.to_json
		end
	end

	def new
	end

	def destroy
	end

	def edit
	end

	def update
	end

	private
	def destination_params
		params.require(:destination).permit(:name, :trip_id, :start_date, :end_date)
	end
end
