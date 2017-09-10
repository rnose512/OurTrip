class EventsController < ApplicationController
	def index
		@events = Event.where(destination_id: params[:destination_id])
		if @events
			render json: @events.as_json
		else
			@error = "Error: No events found"
			render json: @error.as_json
		end
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

	def destroy
	end
end
