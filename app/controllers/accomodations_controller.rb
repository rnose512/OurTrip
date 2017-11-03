
	class AccomodationsController < ApplicationController
		def index
			@accomodations = Accomodation.where(destination_id: params[:destination_id])
			if @accomodations
				render json: @accomodations.to_json
			else
				@error = "Error: No accomodations found"
				render json: @error.to_json
			end
		end

		def create
			@accomodation = Accomodation.new(
				name: params[:name],
				address: params[:address],
				phone_number: params[:phone_number],
				price: params[:price],
				destination_id: params[:destination_id],
				check_in: params[:check_in],
				check_out: params[:check_out]
				)
			if @accomodation.save
				render json: @accomodation.to_json
				redirect_to destination_accomodations_path
			else
				render :new, status: 422
			end
		end

		def new
			@accomodation = Accomodation.new
		end

		def edit
		end

		def update
		end

		def destroy
		end

		private
		def accomodation_params
			params.require(:accomodation).permit(:name, :address, :phone_number, :price, :destination_id, :check_in, :check_out)
		end
	end
# end
