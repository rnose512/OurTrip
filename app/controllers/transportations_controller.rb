class TransportationsController < ApplicationController
	def index
		@transportation = Transportation.where(destination_id: params[:destination_id])
		if @transportation
			render json: @transportation.to_json
		else
			@error = "Error: No packing list found"
			render json: @error.to_json
		end
	end

	def create
	end

	def new
	end

	def edit
	end

	def update
	end

	def update
	end

	def destroy
	end
end
